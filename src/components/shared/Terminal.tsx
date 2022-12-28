import _ from 'lodash';
import React, { useState } from 'react';
import '../../styles/Terminal.scss';
import '../../styles/global.scss';
import { Directory, File, FileSystemObject } from './globalTypes';

function Terminal(prop: {
  fileSystem: Directory;
  currentWorkingDirectory: Directory;
  setFileSystem: (fileSystem: Directory) => void;
  setCurrentWorkingDirectory: (cwd: Directory) => void;
}): JSX.Element {
  const [commands, setCommands] = useState<string[]>([]);
  const [input, setInput] = useState('$ ');
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const [inputHistoryIndex, setInputHistoryIndex] = useState(0);

  function executeList(flags: string, path: string): [string[], string[]] {
    const displayAll = flags.includes('a');
    const longFormat = flags.includes('l');
    const fsObject = path.startsWith('/')
      ? prop.fileSystem.getFileSystemObjectFromPath(path)
      : prop.currentWorkingDirectory.getFileSystemObjectFromPath(path);

    if (!fsObject) {
      return [[], [`ls: '${path}': No such file or directory`]];
    }
    if (!fsObject.isDirectory) {
      return [[fsObject.name], []];
    }
    return [
      (fsObject as Directory).getChildrenNames(displayAll, longFormat),
      [],
    ];
  }

  function executeCd(path: string): string[] {
    // Make a copy to avoid mutating the original (it's a state variable)
    const fileSystemCopy = _.cloneDeep(prop.fileSystem);
    const cwdCopy = fileSystemCopy.getFileSystemObjectFromPath(
      prop.currentWorkingDirectory.path
    ) as Directory;
    const newCwd = fileSystemCopy.changeCurrentWorkingDirectory(cwdCopy, path);

    if (newCwd instanceof Directory) {
      prop.setFileSystem(fileSystemCopy);
      prop.setCurrentWorkingDirectory(newCwd);
    } else {
      return [newCwd];
    }
    return [];
  }

  function executeCat(path: string): [string[], string[]] {
    const file = path.startsWith('/')
      ? prop.fileSystem.getFileSystemObjectFromPath(path)
      : prop.currentWorkingDirectory.getFileSystemObjectFromPath(path);

    if (!file) {
      return [[], [`cat: '${path}': No such file or directory`]];
    }
    if (file.isDirectory) {
      return [[], [`cat: '${path}': Is a directory`]];
    }
    // console.log(((file as File).content ||= '\n'));
    return [[((file as File).content ||= '\n')], []];
  }

  function executeTouch(path: string, directory = false): string[] {
    // Make a copy to avoid mutating the original (it's a state variable)
    const fileSystemCopy = _.cloneDeep(prop.fileSystem);
    const cwdCopy = fileSystemCopy.getFileSystemObjectFromPath(
      prop.currentWorkingDirectory.path
    ) as Directory;
    let newFileName = '';
    let dir;

    // If the path is absolute, find the directory to create the file in
    // Otherwise, use the current working directory
    if (path.includes('/')) {
      const pathArr = path.split('/');
      newFileName = pathArr.pop() || '';
      if (path.startsWith('/')) {
        dir = fileSystemCopy.getFileSystemObjectFromPath(pathArr.join('/'));
      } else {
        // console.log(pathArr.join('/'));
        dir = cwdCopy.getFileSystemObjectFromPath(pathArr.join('/'));
      }
    } else {
      newFileName = path;
      dir = cwdCopy;
    }

    if (!dir) {
      return [`touch: '${path}': No such file or directory`];
    } else if (!dir.isDirectory) {
      return [`touch: '${path}': Not a directory`];
    }

    if (!(dir as Directory).getChild(newFileName)) {
      (dir as Directory).addFileSystemObject(
        directory ? new Directory(newFileName) : new File(newFileName)
      );
    } else if (directory) {
      return [`mkdir: '${path}': File exists`];
    }

    prop.setFileSystem(fileSystemCopy);
    prop.setCurrentWorkingDirectory(cwdCopy);
    return [];
  }

  function executeMkdir(path: string): string[] {
    return executeTouch(path, true);
  }

  // This is very sinful spaghetti code, sorry :(
  interface CopyAndRmResult {
    fileSystemCopy: Directory | null;
    cwdCopy: Directory | null;
    err: string[];
  }

  function executeRm(
    path: string,
    flags: string,
    directory = false,
    prevCwd?: Directory,
    prevFileSystem?: Directory
  ): CopyAndRmResult {
    const result: CopyAndRmResult = {
      fileSystemCopy: null,
      cwdCopy: null,
      err: [],
    };

    if (path === '.' || path === '..') {
      result.err = ['rm: "." and ".." may not be removed'];
      return result;
    }
    // Make a copy to avoid mutating the original (it's a state variable)
    const fileSystemCopy = _.cloneDeep(
      prevFileSystem ? prevFileSystem : prop.fileSystem
    );
    const cwdCopy = fileSystemCopy.getFileSystemObjectFromPath(
      prevCwd ? prevCwd.path : prop.currentWorkingDirectory.path
    ) as Directory;
    let fileName = '';
    let dir;

    if (path.includes('/')) {
      const pathArr = path.split('/');
      fileName = pathArr.pop() || '';
      if (path.startsWith('/')) {
        dir = fileSystemCopy.getFileSystemObjectFromPath(pathArr.join('/'));
      } else {
        dir = cwdCopy.getFileSystemObjectFromPath(pathArr.join('/'));
      }
    } else {
      fileName = path;
      dir = cwdCopy;
    }

    const file = (dir as Directory)?.getChild(fileName);
    if (!file) {
      result.err = [`rm: '${path}': No such file or directory`];
      return result;
    }

    const rmDirAndEmptyDirectory = directory && (file as Directory).isEmpty();
    const removeDirectory = rmDirAndEmptyDirectory || flags.includes('r');

    if (!file.isDirectory || removeDirectory) {
      if (path === '/') {
        result.err = [
          "What are you doing? You can't delete the root directory!",
        ];
        // TODO: Figure out how to handle this
        return result;
      }
      (dir as Directory).removeFileSystemObject(fileName);
    } else {
      if (directory && !(file as Directory).isEmpty()) {
        result.err = [`rm: '${path}': Directory not empty`];
        return result;
      }
      result.err = [`rm: '${path}': Is a directory`];
      return result;
    }

    result.cwdCopy = cwdCopy;
    result.fileSystemCopy = fileSystemCopy;
    result.err = [];

    prop.setFileSystem(fileSystemCopy);
    prop.setCurrentWorkingDirectory(cwdCopy);
    return result;
  }

  function executeRmdir(path: string, flags: string): string[] {
    return executeRm(path, flags, true).err;
  }

  function executeCopy(
    paths: string[],
    destination: string,
    flags: string
  ): CopyAndRmResult {
    const result: CopyAndRmResult = {
      fileSystemCopy: null,
      cwdCopy: null,
      err: [],
    };

    // Make a copy to avoid mutating the original (it's a state variable)
    const fileSystemCopy = _.cloneDeep(prop.fileSystem);
    const cwdCopy = fileSystemCopy.getFileSystemObjectFromPath(
      prop.currentWorkingDirectory.path
    ) as Directory;
    const newFiles: FileSystemObject[] = [];

    // Determine whether to copy to a directory or rename the file
    let destDir = destination.startsWith('/')
      ? fileSystemCopy.getFileSystemObjectFromPath(destination)
      : cwdCopy.getFileSystemObjectFromPath(destination);

    let newFileName = '';
    let rename = false;

    if (paths.length > 1) {
      if (!destDir) {
        result.err = [`cp: '${destination}': No such file or directory`];
        return result;
      }
      if (!destDir.isDirectory) {
        result.err = [`cp: '${destination}': Not a directory`];
        return result;
      }
    } else if (!destDir) {
      const tempDest = destination.split('/');
      newFileName = tempDest.pop() || '';
      destination = tempDest.join('/');

      destDir = destination.startsWith('/')
        ? fileSystemCopy.getFileSystemObjectFromPath(destination)
        : cwdCopy.getFileSystemObjectFromPath(destination);

      if (!destDir) {
        result.err = [`cp: '${destination}': No such file or directory`];
        return result;
      }
      if (!destDir.isDirectory) {
        result.err = [`cp: '${destination}': Not a directory`];
        return result;
      }
      rename = true;
    }

    for (const path of paths) {
      const file = path.startsWith('/')
        ? prop.fileSystem.getFileSystemObjectFromPath(path)
        : prop.currentWorkingDirectory.getFileSystemObjectFromPath(path);

      // If the path is absolute, find the directory to create the file in
      // Otherwise, use the current working directory
      newFileName = !rename ? path.split('/').pop() || '' : newFileName;

      if (!file) {
        result.err = [`cp: '${path}': No such file or directory`];
        return result;
      }
      if (file.isDirectory && !flags.toLowerCase().includes('r')) {
        result.err = [`cp: '${path}' is a directory (not copied)`];
        return result;
      }

      const childDir = (destDir as Directory).getChild(newFileName);
      const newFile = _.cloneDeep(file);
      if (childDir && childDir.isDirectory) {
        destDir = childDir;
      } else {
        newFile.name = newFileName;
      }

      newFiles.push(newFile);
    }

    for (const newFile of newFiles) {
      (destDir as Directory).addFileSystemObject(newFile);
    }

    result.cwdCopy = cwdCopy;
    result.fileSystemCopy = fileSystemCopy;

    prop.setFileSystem(fileSystemCopy);
    prop.setCurrentWorkingDirectory(cwdCopy);
    return result;
  }

  function executeMove(paths: string[], destination: string): string[] {
    // Make a copy to avoid mutating the original (it's a state variable)
    let error: string[] = [];

    // console.log(paths, destination, 'Executing copy part of move!');

    let prevRes = executeCopy(paths, destination, '-r');
    error = prevRes.err.map((err) => err.replace('cp', 'mv'));

    // // If there are any errors in copy step, just return them and don't delete
    if (error.length > 0) {
      return error;
    }

    // Removing all the original files
    for (const path of paths) {
      prevRes = executeRm(
        path,
        '-r',
        false,
        // TODO: Change this logic here when refactoring code. This is incredibly cursed
        prevRes.cwdCopy ? prevRes.cwdCopy : undefined,
        prevRes.fileSystemCopy ? prevRes.fileSystemCopy : undefined
      );
      if (prevRes.err.length > 0) {
        return error;
      }
    }

    if (prevRes.fileSystemCopy) prop.setFileSystem(prevRes.fileSystemCopy);
    if (prevRes.cwdCopy) prop.setCurrentWorkingDirectory(prevRes.cwdCopy);
    return error;
  }

  function executeFind(path: string, flags: string): [string[], string[]] {
    if (path || flags) {
      return [[], ['find: Not implemented']];
    }
    return [[], []];
  }

  function isValid(usertyped: string) {
    const userInput = usertyped.trim().split(' ');
    const command = input.length > 1 ? userInput.slice(1, 2).join(' ') : '';
    const args = userInput.slice(2);
    let flags = '';
    let i;
    for (i = 0; i < args.length; i++) {
      if (args[i].includes('-')) {
        flags += args[i];
      } else {
        break;
      }
    }
    let path = args.slice(i).join(' ');
    path = path === '' ? '.' : path;
    let output: string[] = [];
    let error: string[] = [];

    switch (command) {
      case 'whoami':
        output = ['tux'];
        break;
      case 'pwd':
        output = [prop.currentWorkingDirectory.path];
        break;
      case 'man':
        switch (args[0]) {
          case 'whoami':
            output = [
              `whoami – display effective user id
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'pwd':
            output = [
              `pwd – return working directory name
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'ls':
            output = [
              `ls – list directory contents.
              OPTIONS: 
                -a      Include directory entries whose names begin with a dot (‘.’).
                -l      List files in the long format: file mode, number of links, owner name, group name, number of
                bytes in the file, abbreviated month, day-of-month file was last
                modified, hour file last modified, minute file last modified, and the
                pathname.
                (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'cd':
            output = [
              `cd — change the working directory
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'touch':
            output = [
              `touch – change file access and modification times
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'mkdir':
            output = [
              `mkdir – make directories
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'rmdir':
            output = [
              `rmdir – remove directories
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'cp':
            output = [
              `cp – copy files
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'mv':
            output = [
              `mv – move files
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'echo':
            output = [
              `echo – write arguments to the standard output
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'cat':
            output = [
              `cat – concatenate and print files
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'grep':
            output = [
              `grep - file pattern searcher. The grep utility searches any given input files, selecting lines that
              match one or more patterns.  By default, a pattern matches an input line
              if the regular expression (RE) in the pattern matches the input line
              without its trailing newline.  An empty expression matches every line.
              Each input line that matches at least one of the patterns is written to
              the standard output.
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'find':
            output = [
              `find – walk a file hierarchy. The find utility recursively descends the directory tree for each path
              listed, evaluating an expression in terms of each file in the tree.
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'chmod':
            output = [
              `chmod – change file modes or Access Control Lists.
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          case 'clear':
            output = [
              `clear - clear the terminal screen
              (DESCRIPTION SIMPLIFIED FOR LAB)`,
            ];
            break;
          default:
            output = ['Command invalid for purposes of this learning lab'];
        }
        break;
      case 'ls':
        [output, error] = executeList(flags, path);
        break;
      case 'cd':
        error = executeCd(path);
        break;
      case 'touch':
        error = executeTouch(path);
        break;
      case 'mkdir':
        error = executeMkdir(path);
        break;
      case 'rm':
        error = executeRm(path, flags).err;
        break;
      case 'rmdir':
        error = executeRmdir(path, flags);
        break;
      case 'cp': {
        const cpArgs = path.split(' ');
        if (cpArgs.length < 2) {
          error = ['cp: invalid usage'];
        } else {
          const destination = cpArgs.pop();
          // console.log(flags);
          error = executeCopy(cpArgs, destination as string, flags).err;
        }
        break;
      }
      case 'mv': {
        const mvArgs = path.split(' ');
        if (mvArgs.length < 2) {
          error = ['mv: invalid usage'];
        } else {
          const destination = mvArgs.pop();
          error = executeMove(mvArgs, destination as string);
        }
        break;
      }
      case 'echo':
        output = [path];
        break;
      case 'cat':
        [output, error] = executeCat(path);
        break;
      case 'grep':
        // console.log('User input grep');
        break;
      case 'find':
        [output, error] = executeFind(path, flags);
        break;
      case 'chmod':
        // console.log('User input chmod');
        break;
      case 'clear':
        error = ['CLEAR'];
        break;
      default:
        output = ['Invalid command. Try again.'];
        break;
    }
    return { out: output, err: error };
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const currInput = e.currentTarget.value;
    // Prevent the user from removing the '$ ' from the input
    if (currInput.split(' ').length < 2 || currInput.split(' ')[0] !== '$') {
      setInput('$ ');
    } else {
      setInput(e.currentTarget.value);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = isValid(input);
    const newHistory = [...inputHistory, input];
    if (result.err.length > 0 && result.err[0] === 'CLEAR') {
      setCommands([]);
    } else {
      setCommands([...commands, input, ...result.err, ...result.out]);
    }
    setInputHistory(newHistory);
    setInputHistoryIndex(newHistory.length);
    setInput('$ ');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (inputHistoryIndex > 0) {
        setInputHistoryIndex(inputHistoryIndex - 1);
        setInput(inputHistory[inputHistoryIndex - 1]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (inputHistoryIndex < inputHistory.length - 1) {
        setInputHistoryIndex(inputHistoryIndex + 1);
        setInput(inputHistory[inputHistoryIndex + 1]);
      } else {
        setInput('$ ');
        if (inputHistoryIndex < inputHistory.length) {
          setInputHistoryIndex(inputHistoryIndex + 1);
        }
      }
    }
  }

  return (
    <div className="terminal">
      <div>
        {commands.map((command: string, key: number) => {
          return command === '\n' ? (
            <br key={key} />
          ) : (
            <p className="command" key={key}>
              {command}
            </p>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} id="input-form">
        <input
          type="text"
          className="command"
          value={input}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <div className="terminal-top-icicle">
          <svg
            width="163"
            height="72"
            viewBox="0 0 163 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.28192 12.8277C5.94003 10.669 8.25335 9.11794 10.8684 8.41166L19.9216 5.96649C22.2349 5.34168 24.6786 5.40671 26.957 6.15369L33.3078 8.23574C35.8559 9.07114 38.6031 9.05131 41.1379 8.17924L49.6896 5.23709C52.2224 4.3657 55.0245 5.23509 56.6366 7.39245C58.2039 9.48998 60.9026 10.3761 63.3913 9.61043L75.5984 5.85466C77.9206 5.14019 80.4001 5.12985 82.729 5.82494L96.5992 9.96449C97.6505 10.2783 98.7384 10.45 99.8342 10.4751L116.014 10.8462C117.926 10.8901 119.821 10.487 121.552 9.6687L134.613 3.49409C136.106 2.78808 137.725 2.39007 139.373 2.32339L140.567 2.27509C144.09 2.13258 147.507 3.51061 149.964 6.06431L151.546 7.70923C152.697 8.90597 153.6 10.3227 154.201 11.8762L160.992 29.4237C161.155 29.846 161.08 30.3244 160.794 30.6741L158.403 33.6012C158.297 33.7309 158.218 33.8808 158.171 34.042L155.07 44.6291C154.995 44.8856 154.627 44.8599 154.587 44.5954L152.514 30.8018C152.481 30.5809 152.385 30.3744 152.238 30.2068L147.478 24.7607C146.924 24.1269 146.023 23.9362 145.264 24.2921C144.694 24.5594 144.294 25.0953 144.195 25.7218L140.195 51.2182C140.128 51.6426 139.528 51.6558 139.442 51.2346L136.94 38.8934C136.502 36.7294 133.389 36.8833 133.165 39.08C133.146 39.2623 132.91 39.3181 132.813 39.1632L126.144 28.5201C125.009 26.7092 122.281 27.1322 121.74 29.2029C121.686 29.4126 121.659 29.6286 121.66 29.8454L121.792 48.416C121.794 48.7005 121.399 48.7668 121.309 48.497L117.134 35.9472C116.183 33.0884 114.241 30.6716 111.666 29.1416L109.88 28.0808C109.404 27.7979 108.794 27.912 108.451 28.3484C107.146 30.0053 106.335 32.0023 106.111 34.1071L103.855 55.3352C103.851 55.3774 103.824 55.4141 103.786 55.4314C103.06 55.7594 102.225 55.2849 102.127 54.4878L99.5963 34.0266C99.5724 33.8333 99.493 33.6513 99.3679 33.503L94.9524 28.267C91.501 24.1742 84.9047 25.7994 83.7167 31.0352L83.5943 31.5745C83.5665 31.6973 83.4342 31.7636 83.3203 31.7118C82.1475 31.1784 80.7908 31.8976 80.5615 33.1744L74.3899 67.532C74.1575 68.8255 72.3581 68.9266 71.983 67.6672L68.7417 56.7839C67.7722 53.5286 65.5321 50.8105 62.5369 49.2548L58.1177 46.9595C57.8624 46.8269 57.6671 46.6009 57.5716 46.3278L53.0806 33.4843C52.2636 31.1477 49.2662 30.5443 47.626 32.3862L45.6256 34.6326C45.0588 35.2692 44.0339 35.1276 43.6565 34.3605L43.6309 34.3084C43.3136 33.6636 42.4981 33.4611 41.9213 33.884C41.4253 34.2477 40.7336 34.1553 40.3479 33.6738L35.1599 27.1984C34.5821 26.4773 33.4275 26.8775 33.4118 27.8044L32.853 60.7167L29.5055 31.0535C29.0845 27.3228 24.9543 25.3059 21.7965 27.2888C20.2116 28.284 19.2987 30.0791 19.4212 31.9595L20.5317 49.0087L16.4788 27.6738C16.2542 26.4915 15.4472 25.5062 14.3388 25.0609C11.9493 24.1009 9.38779 25.9869 9.5653 28.5755L9.88771 33.2769C9.93531 33.971 9.01392 34.2432 8.6823 33.6329L0.628913 18.8122C0.391518 18.3754 0.433487 17.8382 0.735762 17.4446L4.28192 12.8277Z"
              fill="#98C4E7"
            />
            <path
              d="M4.28191 12.8275C5.94002 10.6688 8.25335 9.11772 10.8684 8.41143L19.9216 5.96626C22.2349 5.34145 24.6786 5.40648 26.957 6.15346L33.3078 8.23551C35.8559 9.07091 38.6031 9.05108 41.1379 8.17901L49.6896 5.23686C52.2224 4.36547 55.0245 5.23486 56.6366 7.39222C58.2039 9.48975 60.9026 10.3759 63.3913 9.6102L75.5984 5.85443C77.9206 5.13996 80.4001 5.12962 82.729 5.82471L96.5992 9.96426C97.6505 10.278 98.7384 10.4497 99.8342 10.4749L116.014 10.846C117.926 10.8898 119.821 10.4868 121.552 9.66847L134.613 3.49386C136.106 2.78785 137.725 2.38984 139.373 2.32317L140.567 2.27486C144.09 2.13235 147.507 3.51038 149.964 6.06408L151.546 7.709C152.697 8.90574 153.6 10.3225 154.201 11.8759L160.992 29.4234C161.155 29.8458 161.08 30.3242 160.794 30.6738L158.561 33.4072C158.377 33.6327 158.059 33.6914 157.807 33.5463C154.885 31.8607 151.162 32.9523 149.594 35.9548L149.531 36.0754C149.262 36.5887 148.503 36.4736 148.395 35.9034L147.018 28.6092C146.605 26.426 144.052 25.4524 142.314 26.8154C141.534 27.4268 140.503 27.6031 139.566 27.2848L133.36 25.1752C131.926 24.6879 130.416 24.4694 128.905 24.5305L127.872 24.5723C122.808 24.7772 118.379 28.0731 116.69 32.8945L113.989 40.6068C113.852 40.9962 113.309 41.0043 113.161 40.6192L111.728 36.9016C110.847 34.6133 107.672 34.5214 106.665 36.7549C106.59 36.9194 106.383 36.9694 106.243 36.8562L104.77 35.6651C102.942 34.1864 100.314 34.2947 98.6139 35.9187L98.534 35.9951C98.4 36.1231 98.1904 36.1244 98.0546 35.998C96.3362 34.3987 93.5793 34.9066 92.5342 37.015L91.9597 38.1741C91.7991 38.4981 91.3448 38.5089 91.1689 38.1929L82.7608 23.0939C82.7556 23.0846 82.7514 23.0748 82.7481 23.0647C82.2577 21.5348 80.0894 21.6053 79.6999 23.1638L73.472 48.078C73.3431 48.5936 72.6183 48.5966 72.4845 48.0821L71.2312 43.2635C70.1014 38.9196 63.8824 39.26 63.2312 43.7014C63.173 44.0982 62.6446 44.1859 62.463 43.8289L57.1232 33.3337C55.2782 29.7074 50.8196 28.3496 47.2981 30.3414C47.022 30.4976 46.6767 30.4511 46.4506 30.2272L41.1479 24.977C39.2549 23.1027 36.2161 23.1298 34.359 25.0374L33.3981 26.0244C32.4978 26.9492 31.1058 27.1756 29.9621 26.5832L29.2335 26.2058C28.2657 25.7045 27.079 26.0469 26.521 26.9885L26.0757 27.7399C25.719 28.3419 24.9381 28.5244 24.3547 28.1421C23.5193 27.5946 22.4203 28.2259 22.4609 29.23L22.4917 29.9908C22.5421 31.2369 21.2449 32.0763 20.1431 31.5104L8.64846 25.6069C7.86335 25.2036 7.13981 24.6884 6.50013 24.0771L1.05355 18.872C0.590654 18.4296 0.535324 17.7054 0.925603 17.1972L4.28191 12.8275Z"
              fill="#D1E6F7"
            />
            <path
              d="M4.28191 12.8275C5.94002 10.6688 8.25335 9.11772 10.8684 8.41143L19.9216 5.96626C22.2349 5.34145 24.6786 5.40648 26.957 6.15346L33.3078 8.23551C35.8559 9.07091 38.6031 9.05108 41.1379 8.17901L49.6896 5.23686C52.2224 4.36547 55.0245 5.23486 56.6366 7.39222C58.2039 9.48975 60.9026 10.3759 63.3913 9.6102L75.5984 5.85443C77.9206 5.13996 80.4001 5.12962 82.729 5.82471L96.5992 9.96426C97.6505 10.278 98.7384 10.4497 99.8342 10.4749L116.014 10.846C117.926 10.8898 119.821 10.4868 121.552 9.66847L134.613 3.49386C136.106 2.78785 137.725 2.38984 139.373 2.32317L140.567 2.27486C144.09 2.13235 147.507 3.51038 149.964 6.06408L151.546 7.709C152.697 8.90574 153.6 10.3225 154.201 11.8759L159.417 25.3545C159.889 26.5734 158.425 27.6116 157.448 26.7507L150.422 20.5592C147.41 17.9047 143.1 17.3713 139.545 19.2132C137.428 20.31 134.986 20.5877 132.679 19.9941L117.584 16.1103C114.336 15.2745 110.891 15.8014 108.037 17.5707L90.9441 28.1637C90.3314 28.5435 89.5278 28.3188 89.1954 27.6748L86.7975 23.0283C83.7376 17.099 76.6014 14.6407 70.5925 17.4459L57.7392 23.4464C54.793 24.8218 51.4288 24.9753 48.3698 23.8739L38.0529 20.1594C35.8614 19.3704 33.4945 19.2194 31.2228 19.7238L13.8829 23.5738C9.86876 24.4651 5.6764 23.2899 2.69055 20.4364L1.05355 18.872C0.590654 18.4296 0.535324 17.7054 0.925603 17.1972L4.28191 12.8275Z"
              fill="white"
            />
          </svg>
        </div>
      </form>
    </div>
  );
}

export default Terminal;
