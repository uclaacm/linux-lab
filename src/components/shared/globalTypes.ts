import Landing from '../pages/landing';
import Creation from './../pages/creation';
import Game from './../pages/game';
import Intro from './../pages/intro';
import Moving from './../pages/moving';
import Permissions from './../pages/permissions';
import Piping from './../pages/piping';
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
  ['/creation', { component: Creation, pageName: 'Creation' }],
  ['/piping', { component: Piping, pageName: 'Piping' }],
  ['/searching', { component: Searching, pageName: 'Searching' }],
  ['/permissions', { component: Permissions, pageName: 'Permissions' }],
  ['/game', { component: Game, pageName: 'Game' }],
]);

export class FileSystemObject {
  constructor(
    public name: string,
    public path: string,
    public isDirectory: boolean,
    public parent?: FileSystemObject,
    public content?: string,
    public children?: Map<string, FileSystemObject>,
    public isHidden = false
  ) {
    this.name = name;
    this.path = path;
    this.isDirectory = isDirectory;
    this.content = content;
    this.children = children;
    this.parent = parent;
    this.isHidden = isHidden;
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
    parent?: FileSystemObject
  ) {
    super(name, path, false, parent, content, undefined);
  }
}

export class Directory extends FileSystemObject {
  constructor(
    name: string,
    parent?: FileSystemObject,
    children?: Map<string, FileSystemObject>,
    path = '/',
    public isCurrentDirectory = false
  ) {
    super(name, path, true, parent, undefined, children);
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
    return Array.from(this.children.values()).filter(
      (child) => !child.isHidden || showHidden
    );
  }

  getChildrenNames(showHidden = false, longFormat = false): Array<string> {
    if (longFormat) {
      // TODO: implement long format
    }
    return this.getChildren(showHidden).map((child) => child.name);
  }

  getChild(name: string): Directory | File | undefined {
    if (name === '..') {
      return this.parent;
    }
    if (name === '.') {
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
  ): Directory | undefined {
    currentWorkingDirectory.isCurrentDirectory = false;
    let newCwd: Directory | File | undefined;

    if (!path.startsWith('/')) {
      newCwd = currentWorkingDirectory.getFileSystemObjectFromPath(path);
    } else {
      newCwd = this.getFileSystemObjectFromPath(path);
    }

    if (!newCwd || !newCwd.isDirectory) return undefined;
    (newCwd as Directory).isCurrentDirectory = true;
    return newCwd as Directory;
  }

  getFileSystemObjectFromPath(path: string): Directory | File | undefined {
    if (path === this.path) return this;

    if (path.charAt(path.length - 1) == '/') {
      path = path.slice(0, -1);
    }

    const children = path.includes('/') ? path.split('/').slice(1) : [path];
    let currentDirectory = <Directory>this;
    let currentFsObject: Directory | File | undefined;
    for (let i = 0; i < children.length; i++) {
      if (currentDirectory.isDirectory) {
        currentFsObject = currentDirectory.getChild(children[i]);
        if (!currentFsObject) return undefined;
      }

      // If the object is a file, we can't go any deeper
      if (i !== children.length - 1) {
        if (!currentFsObject?.isDirectory) {
          console.log('here');
          return undefined;
        }
        currentDirectory = <Directory>currentFsObject;
      }
    }
    return currentFsObject;
  }

  private checkHidden(name: string) {
    return name.startsWith('.');
  }
}
