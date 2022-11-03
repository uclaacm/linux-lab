import { Directory, File } from '../shared/globalTypes';
import Task from '../shared/Task';

function Redirection(): JSX.Element {
  // Update task contents below once redirection is implemented
  const initFileSystem = new Directory(
    '/',
    undefined,
    new Map([['mystery.txt', new File('mystery.txt', 'wow, what a mystery')]]),
    '/',
    true
  );
  const currentWorkingDirectory = initFileSystem;
  return (
    <div>
      <h1 className="lesson-title">Redirection</h1>
      <p className="body">
        There are many ways to redirect the three data streams, but{' '}
        <span className="try-out-command">{'>'}</span> and{' '}
        <span className="try-out-command">|</span> are two of the most popular
        commands.
      </p>

      <h1 className="lesson-title">
        The <span className="try-out-command">{'>'}</span> Command
      </h1>
      <p className="body">
        <span className="try-out-command">{'>'}</span> is used to redirect
        output into an existing or newly-created file.
      </p>
      <div className="example-container">
        <p className="blue-text">Example 1</p>
        <div className="example-black-box">
          <p className="example-box-text">
            tux@tux:~$ echo &quot;Like putting something into a box&quot; {'>'}{' '}
            destinationFile
          </p>
        </div>
      </div>
      <p className="body">
        This command writes the string “Like putting something into a box” to
        destinationFile. If destinationFile already exists, its contents will be
        cleared and overwritten. Otherwise, a new file named destinationFile
        containing the string will be created.
      </p>
      <br />
      <p className="body">
        Similarly, the cat command can also be used with {'>'}. Example 2 writes
        the standard output of sourceFile to destinationFile.
      </p>
      <div className="example-container">
        <p className="blue-text">Example 2</p>
        <div className="example-black-box">
          <p className="example-box-text">
            tux@tux:~$ cat sourceFile {'>'} destinationFile
          </p>
        </div>
      </div>
      <br />
      {/* TODO: update task below to work for > once redirection is implemented */}
      <Task
        taskPrompt={
          <p className="body task-prompt">
            Try running <span className="try-out-command">{'>'}</span> in the
            terminal!
          </p>
        }
        taskName="Task 1"
        completed={false}
        fileSystem={initFileSystem}
        currentWorkingDirectory={currentWorkingDirectory}
      />
      <footer>
        <a href="piping">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="searching">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Redirection;
