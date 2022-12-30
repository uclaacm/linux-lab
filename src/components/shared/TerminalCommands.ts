import _ from 'lodash';
import { Directory, File, FileSystemObject } from './globalTypes';
import { manPages } from './ManPages';

export interface TerminalCommandResult {
  modifiedFS: Directory | null;
  modifiedCWD: Directory | null;
  err: string[];
  out: string[];
  clear?: boolean;
}

export function getFSObjectHelper(
  path: string,
  root: Directory,
  cwd: Directory,
  onFileNotFound?: () => string,
  onIsNotDirectory?: () => string
): Directory | File | null | string {
  const fsObject = path.startsWith('/')
    ? root.getFileSystemObjectFromPath(path)
    : cwd.getFileSystemObjectFromPath(path);

  if (!fsObject && onFileNotFound) {
    return onFileNotFound();
  }
  if (onIsNotDirectory && !fsObject!.isDirectory) {
    return onIsNotDirectory();
  }
  if (!fsObject) {
    return null;
  }
  return fsObject;
}

export function executeCommand(
  fileSystem: Directory,
  currentWorkingDirectory: Directory,
  command: string,
  path: string,
  flags: string
): TerminalCommandResult {
  let result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };
  switch (command) {
    case 'whoami':
      result.out = ['tux'];
      break;
    case 'pwd':
      result.out = [currentWorkingDirectory.path];
      break;
    case 'man':
      result.out = executeMan(path);
      break;
    case 'ls':
      result = executeList(fileSystem, currentWorkingDirectory, flags, path);
      break;
    case 'cd':
      result = executeCd(fileSystem, currentWorkingDirectory, path);
      break;
    case 'touch':
      result = executeTouch(fileSystem, currentWorkingDirectory, path);
      break;
    case 'mkdir':
      result = executeMkdir(fileSystem, currentWorkingDirectory, path);
      break;
    case 'rm':
      result = executeRm(fileSystem, currentWorkingDirectory, path, flags);
      break;
    case 'rmdir':
      result = executeRmdir(fileSystem, currentWorkingDirectory, path, flags);
      break;
    case 'cp': {
      const cpArgs = path.split(' ');
      if (cpArgs.length < 2) {
        result.err = ['cp: invalid usage'];
      } else {
        const destination = cpArgs.pop();

        result = executeCopy(
          fileSystem,
          currentWorkingDirectory,
          cpArgs,
          destination as string,
          flags
        );
      }
      break;
    }
    case 'mv': {
      const mvArgs = path.split(' ');
      if (mvArgs.length < 2) {
        result.err = ['mv: invalid usage'];
      } else {
        const destination = mvArgs.pop();
        result = executeMove(
          fileSystem,
          currentWorkingDirectory,
          mvArgs,
          destination as string
        );
      }
      break;
    }
    case 'echo':
      result.out = [path];
      break;
    case 'cat':
      result = executeCat(fileSystem, currentWorkingDirectory, path);
      break;
    case 'grep':
      break;
    case 'find':
      [result.out, result.err] = executeFind(path, flags);
      break;
    case 'chmod':
      break;
    case 'clear':
      result.clear = true;
      break;
    default:
      result.out = ['Invalid command. Try again.'];
      break;
  }
  return result;
}

function executeMan(command: string): string[] {
  return manPages[command]
    ? [manPages[command]]
    : ['Command invalid for purposes of this learning lab'];
}

function executeFind(path: string, flags: string): TerminalCommandResult {
  console.log('find', path, flags);
  const result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };
  return result;
}

function executeList(
  fileSystem: Directory,
  currentWorkingDirectory: Directory,
  flags: string,
  path: string
): TerminalCommandResult {
  const result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };
  const [displayAll, longFormat]: [boolean, boolean] = [
    flags.includes('a'),
    flags.includes('l'),
  ];

  const fsObject = getFSObjectHelper(
    path,
    fileSystem,
    currentWorkingDirectory,
    () => `ls: '${path}': No such file or directory`
  );

  if (typeof fsObject === 'string') {
    result.err = [fsObject];
  } else if (fsObject instanceof File) {
    result.out = [fsObject.name];
  } else if (fsObject instanceof Directory) {
    result.out = (fsObject as Directory).getChildrenNames(
      displayAll,
      longFormat
    );
  }
  return result;
}

function executeCd(
  fileSystem: Directory,
  currentWorkingDirectory: Directory,
  path: string
): TerminalCommandResult {
  const result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };
  const CWDRelativeToFS = fileSystem.getFileSystemObjectFromPath(
    currentWorkingDirectory.path
  ) as Directory;

  const newCWD = fileSystem.changeCurrentWorkingDirectory(
    CWDRelativeToFS,
    path
  );

  if (newCWD instanceof Directory) {
    result.modifiedCWD = newCWD;
    result.modifiedFS = fileSystem;
  } else {
    result.err = [newCWD];
  }
  return result;
}

function executeCat(
  fileSystem: Directory,
  currentWorkingDirectory: Directory,
  path: string
): TerminalCommandResult {
  const result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };
  const file = path.startsWith('/')
    ? fileSystem.getFileSystemObjectFromPath(path)
    : currentWorkingDirectory.getFileSystemObjectFromPath(path);

  if (!file) {
    result.err = [`cat: '${path}': No such file or directory`];
    return result;
  }
  if (file.isDirectory) {
    result.err = [`cat: '${path}': Is a directory`];
    return result;
  }

  result.out = [((file as File).content ||= '\n')];
  return result;
}

function executeTouch(
  fileSystem: Directory,
  currentWorkingDirectory: Directory,
  path: string,
  directory = false
): TerminalCommandResult {
  const result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };
  // Make a copy to avoid mutating the original (it's a state variable)
  const cwdCopy = fileSystem.getFileSystemObjectFromPath(
    currentWorkingDirectory.path
  ) as Directory;
  let newFileName = '';
  let dir;

  // If the path is absolute, find the directory to create the file in
  // Otherwise, use the current working directory
  if (path.includes('/')) {
    const pathArr = path.split('/');
    newFileName = pathArr.pop() || '';
    if (path.startsWith('/')) {
      dir = fileSystem.getFileSystemObjectFromPath(pathArr.join('/'));
    } else {
      dir = cwdCopy.getFileSystemObjectFromPath(pathArr.join('/'));
    }
  } else {
    newFileName = path;
    dir = cwdCopy;
  }

  if (!dir) {
    result.err = [`touch: '${path}': No such file or directory`];
    return result;
  } else if (!dir.isDirectory) {
    result.err = [`touch: '${path}': Not a directory`];
    return result;
  }

  if (!(dir as Directory).getChild(newFileName)) {
    (dir as Directory).addFileSystemObject(
      directory ? new Directory(newFileName) : new File(newFileName)
    );
  } else if (directory) {
    result.err = [`mkdir: '${path}': File exists`];
    return result;
  }

  result.modifiedFS = fileSystem;
  result.modifiedCWD = cwdCopy;
  return result;
}

function executeMkdir(
  fileSystem: Directory,
  currentWorkingDirectory: Directory,
  path: string
): TerminalCommandResult {
  return executeTouch(fileSystem, currentWorkingDirectory, path, true);
}

function executeRm(
  fileSystem: Directory,
  currentWorkingDirectory: Directory,
  path: string,
  flags: string,
  directory = false
): TerminalCommandResult {
  const result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };

  if (path === '.' || path === '..') {
    result.err = ['rm: "." and ".." may not be removed'];
    return result;
  }
  const cwdCopy = fileSystem.getFileSystemObjectFromPath(
    currentWorkingDirectory.path
  ) as Directory;
  let fileName = '';
  let dir;

  if (path.includes('/')) {
    const pathArr = path.split('/');
    fileName = pathArr.pop() || '';
    if (path.startsWith('/')) {
      dir = fileSystem.getFileSystemObjectFromPath(pathArr.join('/'));
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
      result.err = ["What are you doing? You can't delete the root directory!"];
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

  result.modifiedCWD = cwdCopy;
  result.modifiedFS = fileSystem;
  result.err = [];

  return result;
}

function executeRmdir(
  fileSystem: Directory,
  currentWorkingDirectory: Directory,
  path: string,
  flags: string
): TerminalCommandResult {
  return executeRm(fileSystem, currentWorkingDirectory, path, flags, true);
}

function executeCopy(
  fileSystem: Directory,
  currentWorkingDirectory: Directory,
  paths: string[],
  destination: string,
  flags: string
): TerminalCommandResult {
  const result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };

  // Make a copy to avoid mutating the original (it's a state variable)
  const cwdCopy = fileSystem.getFileSystemObjectFromPath(
    currentWorkingDirectory.path
  ) as Directory;
  const newFiles: FileSystemObject[] = [];

  // Determine whether to copy to a directory or rename the file
  let destDir = destination.startsWith('/')
    ? fileSystem.getFileSystemObjectFromPath(destination)
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
  } else if (!destDir || !destDir.isDirectory) {
    const tempDest = destination.split('/');
    newFileName = tempDest.pop() || '';
    destination = tempDest.join('/');

    destDir = destination.startsWith('/')
      ? fileSystem.getFileSystemObjectFromPath(destination)
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
      ? fileSystem.getFileSystemObjectFromPath(path)
      : currentWorkingDirectory.getFileSystemObjectFromPath(path);

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

    const childDir = (destDir as Directory).getChild(
      newFileName
    ) as FileSystemObject;
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

  result.modifiedCWD = cwdCopy;
  result.modifiedFS = fileSystem;

  return result;
}

function executeMove(
  fileSystem: Directory,
  currentWorkingDirectory: Directory,
  paths: string[],
  destination: string
): TerminalCommandResult {
  const result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };

  let prevRes = executeCopy(
    fileSystem,
    currentWorkingDirectory,
    paths,
    destination,
    '-r'
  );
  let error = prevRes.err.map((err) => err.replace('cp', 'mv'));

  // If there are any errors in copy step, avoid modifying fs state
  if (error.length > 0) {
    result.err = error;
    return result;
  }

  // Removing all the original files
  for (const path of paths) {
    prevRes = executeRm(
      prevRes.modifiedFS as Directory,
      prevRes.modifiedCWD as Directory,
      path,
      '-r',
      false
    );
    error = prevRes.err.map((err) => err.replace('rm', 'mv'));
    if (error.length > 0) {
      result.err = error;
      return result;
    }
  }

  return prevRes;
}
