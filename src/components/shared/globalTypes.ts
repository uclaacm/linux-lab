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
  { component: () => JSX.Element; pageName: string }
> = new Map([
  ['/', { component: Intro, pageName: 'Home' }],
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
    path = '/'
  ) {
    super(name, path, true, parent, undefined, children);
    if (this.children) {
      this.children.forEach((child) => {
        this.addFileSystemObject(child);
      });
    }
  }
  addFileSystemObject(fileSystemObject: FileSystemObject): void {
    if (this.children === undefined) {
      this.children = new Map();
    }
    fileSystemObject.isHidden = this.checkHidden(fileSystemObject.name);
    fileSystemObject.parent = this;
    fileSystemObject.path = this.getPathForChild(fileSystemObject.name);
    this.children.set(fileSystemObject.name, fileSystemObject);
  }
  removeFileSystemObject(name: string): void {
    if (this.children === undefined) {
      return;
    }
    this.children.delete(name);
  }
  getChildren(showHidden = false): Array<Directory | File> {
    if (this.children === undefined) {
      return [];
    }
    return Array.from(this.children.values()).filter(
      (child) => !child.isHidden || showHidden
    );
  }
  getChild(name: string): Directory | File | undefined {
    if (this.children === undefined) {
      return undefined;
    }
    return this.children.get(name);
  }
  getParent(): Directory | File | undefined {
    return this.parent;
  }
  private checkHidden(name: string) {
    return name.startsWith('.');
  }
}

// Example usage:
const root = new Directory(
  '/',
  undefined,
  new Map([
    ['index.html', new File('index.html', '/index.html', 'Hello World!')],
  ])
);

// Adding a directory to the root:
root.addFileSystemObject(new Directory('dir'));
const dir = <Directory>root.getChild('dir'); // returns a Directory object
dir.addFileSystemObject(new File('file.txt', 'Hello World!'));

// The path and the parent don't actually matter when doing "addFileSystemObject",
// since they are automatically set when adding a child to a parent.
dir.addFileSystemObject(new Directory('.secrets'));

// returns all the children of the root directory (ls)
// console.log(root.getChildren());

dir.rename('newName'); // renames the directory

const file = <File>dir.getChild('file.txt');
file.content = 'Changed content!';

// console.log(dir.getChildren(true)); // show hidden files/directories (ls -a)
dir.removeFileSystemObject('file.txt'); // remove a file (rm)
// console.log(dir.getChildren(true));
