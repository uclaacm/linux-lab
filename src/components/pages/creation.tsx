import '../../styles/global.scss';
import { Directory, File } from '../shared/globalTypes';
// import Bar from '../shared/progressbar';
import Task from '../shared/Task';

function Creation(): JSX.Element {
  const task1FS = new Directory('/', undefined, new Map(), '/', true);
  const task1CWD = task1FS as Directory;

  const task2FS = new Directory(
    '/',
    undefined,
    new Map([
      ['file1', new File('file1')],
      ['file2', new File('file2')],
      ['emptyDir', new Directory('emptyDir')],
      [
        'nonemptyDir',
        new Directory(
          'nonemptyDir',
          undefined,
          new Map([['file3', new File('file3')]])
        ),
      ],
    ]),
    '/',
    true
  );
  const task2CWD = task2FS as Directory;

  const task3FS = new Directory(
    '/',
    undefined,
    new Map([
      ['sourceFile', new File('sourceFile', 'This is the source.')],
      [
        'destinationFile',
        new File('destinationFile', 'This is the destination.'),
      ],
      ['file1', new File('file1', 'Super cool secret info')],
      ['file2', new File('file2', 'You should join Cyber PBR :)')],
      ['directoryPath', new Directory('directoryPath')],
    ]),
    '/',
    true
  );
  const task3CWD = task3FS as Directory;

  const task4FS = new Directory(
    '/',
    undefined,
    new Map([
      ['oldName', new File('oldName')],
      ['file1', new File('file1')],
      ['file2', new File('file2')],
      ['directoryPath', new Directory('directoryPath')],
    ]),
    '/',
    true
  );
  const task4CWD = task4FS as Directory;

  return (
    <div>
      <h1 className="lesson-title">Creation and Deletion</h1>
      <p className="body">
        At the heart of any project is the ability to create and delete things.
        So let&apos;s start with commands that let us make things.
      </p>
      <br />
      <Task
        taskPrompt={
          <>
            <p className="body task-prompt">
              The <span className="try-out-command">touch</span> command makes a
              new empty file.
            </p>
            <p className="body task-prompt">
              Run <span className="try-out-command">touch emptyFile</span> and
              see how the file system below changes.
            </p>
            <p className="body task-prompt">
              If you then run{' '}
              <span className="try-out-command">cat emptyFile</span>, notice how
              nothing is printed because the file has no contents!
            </p>
          </>
        }
        taskName={
          <h2 className="heading-1 task-name">
            The <span className="command-in-heading">touch</span> Command
          </h2>
        }
        completed={false}
        fileSystem={task1FS}
        currentWorkingDirectory={task1CWD}
        displayFileSystem={true}
      />
      <Task
        taskPrompt={
          <>
            <p className="body task-prompt">
              The <span className="try-out-command">mkdir</span> command makes a
              new empty directory.
            </p>
            <p className="body task-prompt">
              Run <span className="try-out-command">mkdir newDir</span> and see
              how the file system diagram changes.
            </p>
            <p className="body task-prompt">
              Notice how you can now change into the newly-created directory
              with <span className="try-out-command">cd newDir</span> !
            </p>
          </>
        }
        taskName={
          <h2 className="heading-1 task-name">
            The <span className="command-in-heading">mkdir</span> Command
          </h2>
        }
        completed={false}
        fileSystem={task1FS}
        currentWorkingDirectory={task1CWD}
        displayFileSystem={true}
      />
      <p className="body">
        Awesome, so now you know how to create files and directories. As you
        will learn below, commands for deletion are quite similar (plus, the
        names basically tell you what the command does!).
      </p>
      <Task
        taskPrompt={
          <>
            <p className="body task-prompt">
              The <span className="try-out-command">rm</span> command removes an
              existing file.
              <p className="body task-prompt">
                Looks like we have three files in the current directory. Go
                ahead and remove one with the command{' '}
                <span className="try-out-command">rm</span> followed by the file
                name.
              </p>
              Can <span className="try-out-command">rm</span> be used to remove
              a directory? Give it a try.
              <p className="body task-prompt">
                The terminal printed an error message! Notice how the file
                system diagram remains unchanged because rm cannot be used to
                remove directories. To remove a directory, we need to learn
                another command: <span className="try-out-command">rmdir</span>.
              </p>
            </p>
          </>
        }
        taskName={
          <h2 className="heading-1 task-name">
            The <span className="command-in-heading">rm</span> Command
          </h2>
        }
        completed={false}
        fileSystem={task2FS}
        currentWorkingDirectory={task2CWD}
        displayFileSystem={true}
      />
      <Task
        taskPrompt={
          <>
            <p className="body task-prompt">
              The <span className="try-out-command">rmdir</span> command removes
              an existing empty directory.
            </p>
            <p className="body task-prompt">
              Try running{' '}
              <span className="try-out-command">rmdir nonemptyDir</span>.
            </p>
            <p className="body task-prompt">
              Uh oh! The terminal printed an error message. Looks like the
              directory must be empty before we can use{' '}
              <span className="try-out-command">rmdir</span>. Now, we could
              manually rm all the files in a directory one by one, but
              there&apos;s an easier way: the -rf options combination.
            </p>
            <p className="body task-prompt">
              For example,{' '}
              <span className="try-out-command">rm -rf nonemptyDir</span>{' '}
              recursively and forcefully (i.e., does not ask for confirmation)
              removes all files within the nonemptyDir directory before also
              deleting the directory.
            </p>
          </>
        }
        taskName={
          <h2 className="heading-1 task-name">
            The <span className="command-in-heading">rmdir</span> Command
          </h2>
        }
        completed={false}
        fileSystem={task2FS}
        currentWorkingDirectory={task2CWD}
        displayFileSystem={true}
      />
      <p className="body">
        Congrats! You&apos;ve learned the basic commands needed to create and
        delete things. Two more related commands are{' '}
        <span className="try-out-command">cp</span> and{' '}
        <span className="try-out-command">mv</span>.
      </p>
      <Task
        taskPrompt={
          <>
            <p className="body task-prompt">
              The <span className="try-out-command">cp</span> command copies one
              file to another.
            </p>
            <p className="body task-prompt">
              <span className="try-out-command">
                cp sourceFile destinationFile
              </span>{' '}
              copies the contents of sourceFile into destinationFile, though the
              two will have different timestamps.
            </p>
            <p className="body task-prompt">
              <span className="try-out-command">
                cp file1 file2 directoryPath
              </span>{' '}
              copies the contents of file1 and file2 to two new files in the
              directoryPath directory, though the two new files will have
              different timestamps from the two original files.
            </p>
          </>
        }
        taskName={
          <h2 className="heading-1 task-name">
            The <span className="command-in-heading">cp</span> Command
          </h2>
        }
        completed={false}
        fileSystem={task3FS}
        currentWorkingDirectory={task3CWD}
        displayFileSystem={true}
      />
      <Task
        taskPrompt={
          <>
            <p className="body task-prompt">
              The <span className="try-out-command">mv</span> command
              moves/renames files.
            </p>
            <p className="body task-prompt">
              <span className="try-out-command">mv oldName newName</span>{' '}
              renames a file called oldName to newName, with the timestamp
              remaining unchanged.
            </p>
            <p className="body task-prompt">
              <span className="try-out-command">
                mv file1 file2 directoryPath
              </span>{' '}
              moves file1 and file2 to directoryPath, with the timestamps
              remaining unchanged.
            </p>
          </>
        }
        taskName={
          <h2 className="heading-1 task-name">
            The <span className="command-in-heading">mv</span> Command
          </h2>
        }
        completed={false}
        fileSystem={task4FS}
        currentWorkingDirectory={task4CWD}
        displayFileSystem={true}
      />
      <br />

      {/* TODO: subpages and bar */}
      {/* <Bar totalsteps={6} currentstep={1} /> */}
      <footer>
        <a href="moving">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="piping">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Creation;
