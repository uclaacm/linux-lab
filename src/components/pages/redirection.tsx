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
      <h1 className="lesson-title">Input/Output Redirection</h1>
      <p className="body">
        There are many ways to redirect the three data streams, but{' '}
        <span className="try-out-command">{'>'}</span> and{' '}
        <span className="try-out-command">|</span> are two of the most popular
        commands.
      </p>

      <h1 className="lesson-title">
        The <span className="command-in-heading">{'>'}</span> Command
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
        The command above writes the string “Like putting something into a box”
        to destinationFile. If destinationFile already exists, its contents will
        be cleared and overwritten. Otherwise, a new file named destinationFile
        containing the string will be created.
      </p>
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
            Try running{' '}
            <span className="try-out-command">
              cat mystery.txt &gt; anotherMystery.txt
            </span>{' '}
            in the terminal!
          </p>
        }
        taskName="Task 1"
        solutions={['cat mystery.txt > anotherMystery.txt']}
        fileSystem={initFileSystem}
        currentWorkingDirectory={currentWorkingDirectory}
      />

      <h1 className="lesson-title">
        The <span className="command-in-heading">{'|'}</span> Command
      </h1>
      <p className="body">
        Known as the pipe operator,{' '}
        <span className="try-out-command">{'|'}</span> is often used to redirect
        data between commands.
      </p>
      <div className="example-container">
        <p className="blue-text">Example 1</p>
        <div className="example-black-box">
          <p className="example-box-text">
            tux@tux:~$ cat reallyLongFile.txt | head
          </p>
          <p className="example-box-text">
            According to
            <br />
            all known laws
            <br />
            of aviation,
            <br />
            there is no way
            <br />
            a bee should be
            <br />
            able to fly.
            <br />
            Its wings are
            <br />
            too small to get
            <br />
            its fat little body
            <br />
            off the ground.
            <br />
          </p>
        </div>
      </div>
      <p className="body">
        The presence of the <span className="try-out-command">ls</span> command
        suggests that all of the contents of the reallyLongFile.txt should be
        listed. However, only 10 lines are seen.
      </p>
      <p className="body">
        This is because the output of{' '}
        <span className="try-out-command">cat reallyLongFile.txt</span> is
        redirected to the <span className="try-out-command">head</span> command,
        which by default, displays only the first ten lines. Think of it as the
        output of the left command becoming the input to the right command.
      </p>

      <h1 className="lesson-title">Wait a second...</h1>
      <p className="body">
        Aren&apos;t <span className="try-out-command">{'>'}</span> and{' '}
        <span className="try-out-command">{'|'}</span> kinda doing the same
        thing?
      </p>
      <p className="body">
        You&apos;re right. The two commands share some similar functionalities.
        However, <span className="try-out-command">{'>'}</span> is more for
        redirecting data to files, whereas{' '}
        <span className="try-out-command">{'|'}</span> is more for redirecting
        data to another command.
      </p>

      <footer>
        <a href="inputOutput">
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
