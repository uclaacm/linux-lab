import Landing from '../pages/landing';
import Creation from './../pages/creation';
import InputOutput from './../pages/inputOutput';
import Intro from './../pages/intro';
import Moving from './../pages/moving';
import PermissionsPage from './../pages/permissions';
import Redirection from './../pages/redirection';
import Searching from './../pages/searching';
import Stationary from './../pages/stationary';

/*
  These are just default names, you can change the sections to
  things of your choosing!
*/
export enum HeaderSections {
  DEFAULT_SECTION = 'defaultSection',
  SECONDARY_SECTION = 'secondarySection',
  TERTIARY_SECTION = 'tertiarySection',
}

export const PageMapping: Map<
  string,
  { component: () => JSX.Element; pageName: string; hideHeader?: boolean }
> = new Map([
  ['/', { component: Landing, pageName: 'Landing', hideHeader: true }],
  ['/intro', { component: Intro, pageName: 'Intro to Linux' }],
  ['/stationary', { component: Stationary, pageName: 'Stationary' }],
  ['/moving', { component: Moving, pageName: 'Moving' }],
  ['/creation', { component: Creation, pageName: 'Creation and Deletion' }],
  ['/inputOutput', { component: InputOutput, pageName: 'Input/Output' }],
  ['/redirection', { component: Redirection, pageName: 'I/O Redirection' }],
  ['/searching', { component: Searching, pageName: 'Searching' }],
  ['/permissions', { component: PermissionsPage, pageName: 'Permissions' }],
]);

interface Permission {
  read: boolean;
  write: boolean;
  execute: boolean;
}

export class FilePermission {
  user: Permission;
  group: Permission;
  other: Permission;

  constructor(userArg: string, groupArg: string, otherArg: string) {
    function getPermissions(permissions: string): Permission {
      return {
        read: permissions.includes('r'),
        write: permissions.includes('w'),
        execute: permissions.includes('x'),
      };
    }

    this.user = getPermissions(userArg);
    this.group = getPermissions(groupArg);
    this.other = getPermissions(otherArg);
  }
}

export class FileSystemObject {
  permissions: FilePermission;
  constructor(
    public name: string,
    public path: string,
    public isDirectory: boolean,
    public parent?: FileSystemObject,
    public content?: string,
    public children?: Map<string, FileSystemObject>,
    permissionsArg?: [string, string, string],
    public isHidden = false
  ) {
    this.name = name;
    this.path = path;
    this.isDirectory = isDirectory;
    this.content = content;
    this.children = children;
    this.parent = parent;
    this.isHidden = isHidden;
    permissionsArg ||= ['rwx', 'rwx', 'rwx'];
    this.permissions = new FilePermission(...permissionsArg);
  }

  rename(newName: string): void {
    this.name = newName;
    if (this.parent && this.parent.children) {
      this.parent.children.set(newName, this);
      this.parent.children.delete(this.name);
      this.path = this.parent.getPathForChild(newName);
    }
    if (this.children) {
      this.children.forEach((child) => {
        child.path = this.getPathForChild(child.name);
      });
    }
  }
  getPathForChild(name: string): string {
    return this.path === '/' ? `/${name}` : `${this.path}/${name}`;
  }
}

export class File extends FileSystemObject {
  constructor(
    name: string,
    content = '',
    path = '',
    permissions?: [string, string, string],
    parent?: FileSystemObject
  ) {
    super(name, path, false, parent, content, undefined, permissions);
  }
}

export class Directory extends FileSystemObject {
  constructor(
    name: string,
    parent?: FileSystemObject,
    children?: Map<string, FileSystemObject>,
    path = '/',
    public isCurrentDirectory = false,
    permissions?: [string, string, string]
  ) {
    super(name, path, true, parent, undefined, children, permissions);
    if (this.children) {
      this.children.forEach((child) => {
        this.addFileSystemObject(child);
      });
    }
    this.isCurrentDirectory = isCurrentDirectory;
  }

  addFileSystemObject(fileSystemObject: FileSystemObject): Directory {
    if (this.children === undefined) {
      this.children = new Map();
    }
    fileSystemObject.isHidden = this.checkHidden(fileSystemObject.name);
    fileSystemObject.parent = this;
    fileSystemObject.path = this.getPathForChild(fileSystemObject.name);
    this.children.set(fileSystemObject.name, fileSystemObject);

    // Recursively add children of children
    this.children.forEach((child) => {
      if (child.isDirectory && child.children) {
        child.children.forEach((grandchild) => {
          (child as Directory).addFileSystemObject(grandchild);
        });
      }
    });
    return this;
  }

  removeFileSystemObject(name: string): Directory {
    if (this.children === undefined) {
      return this;
    }
    this.children.delete(name);
    return this;
  }

  getChildren(showHidden = false): Array<Directory | File> {
    if (this.children === undefined) {
      return [];
    }
    // If we are showing hidden files, we just return all the children
    return Array.from(this.children.values()).filter(
      (child) => !child.isHidden || showHidden
    );
  }

  getChildrenNames(showHidden = false, longFormat = false): Array<string> {
    return this.getChildren(showHidden).map((child) => {
      if (!longFormat) {
        return child.name;
      }
      let permissionString = child.isDirectory ? 'd' : '-';
      for (const permission of [
        child.permissions.user,
        child.permissions.group,
        child.permissions.other,
      ]) {
        // permissionString += ' ';
        permissionString += `${permission.read ? '\u2009r' : '\u2009-'}`;
        permissionString += `${permission.write ? '\u2009w' : '\u2009-'}`;
        permissionString += `${permission.execute ? '\u2009x' : '\u2009-'}`;
      }
      const options = {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      };
      // The user is tux, so we just hardcode that
      return `${permissionString} tux ${new Date().toLocaleString(
        'en-us',
        options
      )} ${child.name}`;
    });
  }

  getChild(name: string): Directory | File | undefined {
    if (name === '..') {
      // If we are at the root directory, we can't go up any further
      return this.parent === undefined ? this : this.parent;
    }
    if (name === '.' || name === '') {
      return this;
    }

    if (this.children === undefined) {
      return undefined;
    }
    return this.children.get(name);
  }

  getParent(): Directory | File | undefined {
    return this.parent;
  }

  changeCurrentWorkingDirectory(
    currentWorkingDirectory: Directory,
    path: string
  ): Directory | string {
    currentWorkingDirectory.isCurrentDirectory = false;
    let newCwd: Directory | File | undefined;

    // If the path is absolute, we start from the root directory and find the new cwd
    if (path.startsWith('/')) {
      newCwd = this.getFileSystemObjectFromPath(path);
    } else {
      newCwd = currentWorkingDirectory.getFileSystemObjectFromPath(path);
    }

    // If the new cwd is a file or does not exist, we can't cd into it
    if (!newCwd) {
      return `cd: '${path}': No such directory`;
    }
    if (newCwd instanceof File) {
      return `cd: '${path}': Not a directory`;
    }
    (newCwd as Directory).isCurrentDirectory = true;
    return newCwd as Directory;
  }

  getFileSystemObjectFromPath(path: string): Directory | File | undefined {
    if (path === this.path) return this;

    // Removes the trailing slash if it exists
    if (path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    // Remove leading slash if it exists
    const children = path.startsWith('/')
      ? path.split('/').slice(1)
      : path.split('/');

    let currentDirectory = <Directory>this;
    let currentFsObject: Directory | File | undefined;

    // Traverse the path to find the new cwd and return the fs object
    for (let i = 0; i < children.length; i++) {
      if (currentDirectory.isDirectory) {
        currentFsObject = currentDirectory.getChild(children[i]);
        if (!currentFsObject) return undefined;
      }

      // If the object is a file, we can't go any deeper
      if (i !== children.length - 1) {
        if (!currentFsObject?.isDirectory) {
          return undefined;
        }
        currentDirectory = <Directory>currentFsObject;
      }
    }
    return currentFsObject;
  }

  isEmpty(): boolean {
    return this.children === undefined || this.children.size === 0;
  }

  private checkHidden(name: string) {
    return name.startsWith('.');
  }
}
