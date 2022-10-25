import '../../styles/global.scss';
import { Directory, File } from '../shared/globalTypes';
import Bar from '../shared/progressbar';
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
      ['file3', new File('file3')],
      ['dir', new Directory('dir')],
      ['dir2', new Directory('dir2')],
    ]),
    '/',
    true
  );
  const task2CWD = task2FS as Directory;

  return (
    <div>
      <h1 className="lesson-title">Creation and Deletion</h1>
      <p className="body">
        At the heart of any project is the ability to create and delete things.
        So let’s start with making commands.
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
              see how the file system diagram changes.
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
            <p className="body task-prompt">
              Removing commands are quite similar (plus, the names basically
              tell you what the command does!).
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

      <Task
        taskPrompt={
          <>
            <p className="body task-prompt">
              The <span className="try-out-command">rm</span> command removes an
              existing file.
              <br />
              Looks like we have three files in the current directory.
              <br />
              Go ahead and remove one of them with the command{' '}
              <span className="try-out-command">rm fileName</span>.
              <br />
              Can rm be used to remove a directory? Give it a try.
              <br />
              Notice how the file system diagram remains unchanged because rm
              cannot be used to remove directories.
              <br />
              The terminal also printed an error message: rm: DIRNAME: is a
              directory
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
              The rmdir command removes an existing empty directory.
              <br />
              Try running{' '}
              <span className="try-out-command">rmdir nonemptyDir</span>.
              <br />
              Notice how the terminal prints the error message: rmdir:
              nonemptyDir: Directory not empty
              <br />
              We could manually rm all the files in a directory one by one, but
              there’s an easier way: the -rf options combination.
              <br />
              For example,
              <br />
              <span className="try-out-command">rm -rf nonemptyDir</span>{' '}
              recursively and forcefully (i.e., does not ask for confirmation)
              <br />
              removes all files within the nonemptyDir directory.
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
      <Task
        taskPrompt={
          <>
            <p className="body task-prompt">
              The cp command copies one file to another.
              <br />
              <span className="try-out-command">
                cp sourceFile destinationFile
              </span>{' '}
              copies the contents of sourceFile into destinationFile,
              <br />
              though the two will have different timestamps.
              <br />
              <span className="try-out-command">
                cp file1 file2 directoryPath
              </span>{' '}
              copies the contents of file1 and file2 to two new files in the
              directoryPath directory,
              <br />
              though the two new files will have different timestamps from the
              two original files.
            </p>
          </>
        }
        taskName={
          <h2 className="heading-1 task-name">
            The <span className="command-in-heading">cp</span> Command
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
              The mv command moves/renames files.
              <br />
              <span className="try-out-command">mv oldName newName</span>{' '}
              renames a file called oldName to newName, with the timestamp
              remaining unchanged.
              <br />
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
        fileSystem={task2FS}
        currentWorkingDirectory={task2CWD}
        displayFileSystem={true}
      />
      <br />
      <Bar totalsteps={6} currentstep={1} />
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
