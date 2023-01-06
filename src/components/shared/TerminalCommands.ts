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
  flags: string,
  rawArgs: string[]
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
      {
        const args = path.split(' ');
        if (
          (args.length < 2 && !flags.toLowerCase().includes('r')) ||
          args.length > 2
        ) {
          result.err = ['grep: invalid usage'];
          return result;
        }
        result = executeGrep(
          fileSystem,
          currentWorkingDirectory,
          args[1],
          args[0],
          flags
        );
      }
      break;
    case 'find':
      {
        // This is a temporary solution for processing the arguments,
        // a better universal arg parser should be applied instead

        let invalid = false;
        const args = [];
        const findFlags: Map<string, string> = new Map<string, string>();

        // Rough way of checking correct usage based on number or arguments
        // So far we only support -type and -name
        if (rawArgs.length === 0 || rawArgs.length > 6) {
          invalid = true;
        }

        for (let i = 0; i < rawArgs.length; i++) {
          if (rawArgs[i].startsWith('-')) {
            if (i + 1 >= rawArgs.length) {
              invalid = true;
              break;
            }
            if (rawArgs[i + 1].startsWith('-')) {
              invalid = true;
              break;
            } else {
              findFlags.set(rawArgs[i].slice(1), rawArgs[i + 1]);
              i++;
            }
          } else {
            args.push(rawArgs[i]);
          }
        }

        if (invalid) {
          result.err = ['find: invalid usage'];
          return result;
        }
        result = executeFind(
          fileSystem,
          currentWorkingDirectory,
          args,
          findFlags
        );
      }
      break;
    case 'chmod':
      result = executeChmod(fileSystem, currentWorkingDirectory, rawArgs);
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
  let resultPath: string | null = null;

  if (path.includes('>')) {
    const files = path.split('>');
    path = files[0].trim();
    resultPath = files[1].trim();
  }

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

  const userCanReadFile = (file as File).permissions.user.read;
  if (!userCanReadFile) {
    result.err = [`cat: '${path}': Permission denied`];
  } else {
    const fileContent = ((file as File).content ||= '\n');
    result.out = [fileContent];
  }

  if (!resultPath) {
    return result;
  }
  const resultFile = resultPath.startsWith('/')
    ? fileSystem.getFileSystemObjectFromPath(resultPath)
    : currentWorkingDirectory.getFileSystemObjectFromPath(resultPath);

  if (resultFile && resultFile.isDirectory) {
    result.err = [`bash: '${resultPath}': Is a directory`];
    result.out = [];
    return result;
  }

  if (resultFile && !resultFile.isDirectory) {
    resultFile.content = result.out[0];
    console.log('resultFile.content: ', resultFile.content);
    result.modifiedFS = fileSystem;
    result.modifiedCWD = currentWorkingDirectory;
    result.out = [];
    console.log(resultFile);
    return result;
  }

  // Create the file since it does not exist
  const touchResult = executeTouch(
    fileSystem,
    currentWorkingDirectory,
    resultPath
  );

  result.modifiedFS = touchResult.modifiedFS;
  result.modifiedCWD = touchResult.modifiedCWD;
  const newlyCreatedFile = resultPath.startsWith('/')
    ? (result.modifiedFS as Directory).getFileSystemObjectFromPath(resultPath)
    : (result.modifiedCWD as Directory).getFileSystemObjectFromPath(resultPath);

  if (newlyCreatedFile && !newlyCreatedFile.isDirectory) {
    newlyCreatedFile.content = result.out[0];
  }

  result.out = [];
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

function executeGrep(
  fileSystem: Directory,
  currentWorkingDirectory: Directory,
  path: string,
  pattern: string,
  flags: string
): TerminalCommandResult {
  path ||= '.';

  path = path === '*' ? '.' : path;

  const result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };

  const recursiveSearch = flags.toLowerCase().includes('r');

  const file = getFSObjectHelper(
    path,
    fileSystem,
    currentWorkingDirectory,
    () => `grep: ${path}: No such file or directory`
  );

  if (typeof file === 'string') {
    result.err = [file];
    return result;
  }

  if (file?.isDirectory && !recursiveSearch) {
    result.err = [`grep: ${path}: Is a directory`];
    return result;
  }

  if (!recursiveSearch) {
    const searchResult = findStringInFile(file, pattern);
    if (searchResult) {
      result.out = [searchResult];
    }
    return result;
  }

  const visited: string[] = [];
  const queue: FileSystemObject[] = [];
  queue.push(file as FileSystemObject);

  while (queue.length > 0) {
    const curr = queue.shift() as FileSystemObject;
    if (visited.includes(curr.path)) {
      continue;
    }
    visited.push(curr.path);
    if (curr.isDirectory) {
      if (!curr.children) {
        continue;
      }
      curr.children.forEach((child) => queue.push(child));
    } else {
      const searchResult = findStringInFile(curr, pattern);
      if (searchResult) {
        result.out.push(curr.path + ': ' + searchResult);
      }
    }
  }
  return result;
}

function findStringInFile(file: FileSystemObject, pattern: string) {
  const fileContent = (file as File).content || '';
  const lines = fileContent.split(' ');
  for (const line of lines) {
    const index = line.indexOf(pattern);
    if (index !== -1) {
      return `${line.slice(0, index)}<span>${line.slice(
        index,
        index + pattern.length
      )}</span>${line.slice(index + pattern.length)}`;
    }
  }
  return null;
}

function executeFind(
  fileSystem: Directory,
  cwd: Directory,
  args: string[],
  flags: Map<string, string>
): TerminalCommandResult {
  const result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };
  const path = args[0] || '.';
  const fileToFind = flags.get('name') ?? args[1] ?? null;
  const type = flags.get('type') ?? null;

  const directoryToSearch = getFSObjectHelper(
    path,
    fileSystem,
    cwd,
    () => `find: ${path}: No such file or directory`,
    () => `find ${path}: Not a directory`
  );

  // Supplied directory to search either does not exist or is a file
  if (typeof directoryToSearch === 'string') {
    result.err = [directoryToSearch];
    return result;
  }

  const visited: string[] = [];
  const queue: FileSystemObject[] = [];
  queue.push(directoryToSearch as FileSystemObject);

  while (queue.length > 0) {
    const curr = queue.shift() as FileSystemObject;
    if (visited.includes(curr.path)) {
      continue;
    }
    visited.push(curr.path);

    const currType = curr.isDirectory ? 'd' : 'f';
    const matchingType = !type || type === currType;
    const matchingName = !fileToFind || curr.name.includes(fileToFind);

    if (matchingType && matchingName) {
      result.out.push(curr.path);
    }

    if (curr.isDirectory) {
      if (!curr.children) {
        continue;
      }
      curr.children.forEach((child) => queue.push(child));
    }
  }

  return result;
}

function setAllPermissions(
  permissionMap: Map<string, string>,
  action: string,
  role: string,
  file: FileSystemObject
): void {
  const p = permissionMap.get(action);
  const val = role === '+';
  if (p === 'read' || p === 'write' || p === 'execute') {
    Object.keys(file.permissions).forEach((r) => {
      if (r === 'user' || r === 'group' || r === 'other') {
        file.permissions[r][p] = val;
      }
    });
  }
}

function executeChmod(
  fileSystem: Directory,
  cwd: Directory,
  args: string[]
): TerminalCommandResult {
  const result: TerminalCommandResult = {
    modifiedFS: null,
    modifiedCWD: null,
    err: [],
    out: [],
  };

  const permissions = args[0];
  const path = (args[1] ||= '.');

  const file = getFSObjectHelper(
    path,
    fileSystem,
    cwd,
    () => `chmod: ${path}: No such file or directory`
  );

  if (typeof file === 'string') {
    result.err = [file];
    return result;
  }

  if (!file) {
    result.err = ['chmod: missing operand'];
    return result;
  }

  const chmodArgs = permissions.split(',');

  for (const permission of chmodArgs) {
    const role = permission.charAt(0);
    const action = permission.charAt(1);
    const value = permission.substring(2).split('');
    const roleMap: Map<string, string> = new Map([
      ['u', 'user'],
      ['g', 'group'],
      ['o', 'other'],
    ]);
    const permissionMap: Map<string, string> = new Map([
      ['r', 'read'],
      ['w', 'write'],
      ['x', 'execute'],
    ]);

    // Handling the case where the user does not specify a role
    if (permission.length == 2 && (role === '+' || role === '-')) {
      if (path === '.') {
        file.children?.forEach((child) => {
          setAllPermissions(permissionMap, action, role, child);
        });
      } else {
        setAllPermissions(permissionMap, action, role, file);
      }
      continue;
    }

    // Minor error handling
    if (action !== '+' && action !== '-' && action !== '=') {
      result.err = [`chmod: invalid mode: ${permissions}`];
      continue;
    }

    const roleProp = roleMap.get(role) ?? 'user';
    const validRoleProp =
      roleProp === 'user' || roleProp === 'group' || roleProp === 'other';

    if (!validRoleProp) {
      result.err = [`chmod: invalid mode: ${permissions}`];
      continue;
    }

    if (action === '=') {
      file.permissions[roleProp].read = value.includes('r');
      file.permissions[roleProp].write = value.includes('w');
      file.permissions[roleProp].execute = value.includes('x');
      continue;
    }

    for (const permissionToUpdate of value) {
      const permissionUpdateProp =
        permissionMap.get(permissionToUpdate) ?? 'read';
      const validPermission =
        permissionUpdateProp === 'read' ||
        permissionUpdateProp === 'write' ||
        permissionUpdateProp === 'execute';

      if (validPermission) {
        file.permissions[roleProp][permissionUpdateProp] =
          action === '+' ? true : false;
      } else {
        result.err = [`chmod: invalid mode: ${permissions}`];
        continue;
      }
    }
  }

  result.modifiedCWD = cwd;
  result.modifiedFS = fileSystem;

  return result;
}
