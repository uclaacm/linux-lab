import tuxHoldingEgg from '../../assets/images/tux-holding-egg.svg';
import '../../styles/global.scss';
import '../../styles/inputOutput.scss';
import { Directory, File } from '../shared/globalTypes';
import Task from '../shared/Task';

function InputOutput(): JSX.Element {
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
      <h1 className="lesson-title">Input/Output (I/O)</h1>
      <div className="first-paragraph">
        <p className="body">
          If we want to perform a complicated task, typing one command at a time
          is often quite inefficient. Instead, we can take advantage of piping
          and input/output redirection in Linux. Think of it as chaining a bunch
          of info together!
        </p>
        <img
          className="tux-egg"
          src={tuxHoldingEgg}
          alt="tux holding up an egg"
        />
      </div>
      <div>
        <h2 className="heading-1">Standard Streams</h2>
        <p className="body">
          Linux has three <b>standard streams</b> for data to move along:
        </p>
        <div className="content-container">
          <div className="content-box">
            <p className="blue-text">
              Standard Input (<span className="try-out-command">stdin</span>)
            </p>
            <ul>
              <li>
                Numbered <b>0</b>
              </li>
              <li>
                Example: when a user sends data to a program by typing on a
                keyboard
              </li>
            </ul>
          </div>
          <div className="content-box">
            <p className="blue-text">
              Standard Output (<span className="try-out-command">stdout</span>)
            </p>
            <ul>
              <li>
                Numbered <b>1</b>
              </li>
              <li>
                <b>Intended</b> output
              </li>
              <li>
                Example: a program displays the results of a computation on the
                terminal
              </li>
            </ul>
          </div>
          <div className="content-box">
            <p className="blue-text">
              Standard Error (<span className="try-out-command">stderr</span>)
            </p>
            <ul>
              <li>
                Numbered <b>2</b>
              </li>
              <li>
                <b>Unintended</b> output
              </li>
              <li>
                Example: a program fails and displays an error message on the
                terminal
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="body">
        Now let&apos;s explore 2 commands often used for piping and IO
        redirection.
      </p>
      <div className="section">
        <h2 className="heading-1">
          The <span className="command-in-heading">echo</span> Command
        </h2>
        <p className="body">
          The <span className="try-out-command">echo</span> command writes
          arguments to the standard output.
        </p>
        <div className="example-container">
          <p className="blue-text">Example</p>
          <div className="example-black-box">
            <p className="example-box-text">tux@tux:~$ echo I am in a cave!</p>
            <p className="example-box-text">I am in a cave!</p>
          </div>
        </div>
        <p className="body">
          Just like how your voice might echo in a cave,{' '}
          <span className="try-out-command">echo</span> repeats the provided
          string by printing it out once to the terminal.
        </p>
      </div>
      <Task
        taskPrompt={
          <p className="body task-prompt">
            Try running{' '}
            <span className="try-out-command">echo Hello world!</span> in the
            terminal!
          </p>
        }
        taskName="Task 1"
        solutions={['echo Hello world!']}
        fileSystem={initFileSystem}
        currentWorkingDirectory={currentWorkingDirectory}
      ></Task>
      <div className="section">
        <h2 className="heading-1">
          The <span className="command-in-heading">cat</span> Command
        </h2>
        <p className="body">
          The <span className="try-out-command">cat</span> command can be used
          to create, concatenate, or print the contents of a file.
        </p>
        <p className="body">
          If you have a file named mystery.txt in your current directory, you
          can display its contents with the following commands.
        </p>
        <div className="example-container">
          <p className="blue-text">Example</p>
          <div className="example-black-box">
            <p className="example-box-text">tux@tux:~$ cat confidential.txt </p>
            <p className="example-box-text">Super secret contents!</p>
          </div>
        </div>
        <p className="body">
          Note that listing multiple files will print all the contents out.
        </p>
      </div>
      <Task
        taskPrompt={
          <p className="body task-prompt">
            Try running <span className="try-out-command">cat</span> on the file
            in the terminal!
          </p>
        }
        taskName="Task 2"
        solutions={['cat mystery.txt']}
        fileSystem={initFileSystem}
        currentWorkingDirectory={currentWorkingDirectory}
      ></Task>
      <footer>
        <a href="creation">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="redirection">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default InputOutput;
