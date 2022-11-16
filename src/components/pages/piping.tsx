import tuxHoldingEgg from '../../assets/images/tux-holding-egg.svg';
import '../../styles/global.scss';
import '../../styles/piping.scss';
import { Directory, File } from '../shared/globalTypes';
import Task from '../shared/Task';

function Piping(): JSX.Element {
  const initFileSystem = new Directory(
    '/',
    undefined,
    new Map([['mystery.txt', new File('mystery.txt', 'wow, what a mystery')]]),
    '/',
    true
  );
  const currentWorkingDirectory = initFileSystem;
  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Piping/IO Redirection</h1>
      <div className="first-paragraph">
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
        <img src={tuxHoldingEgg} alt="tux holding up an egg" />
      </div>

      <div className="section">
        <h2 className="heading-1">Standard Streams</h2>
        <p className="body">
          Linux has three <b>standard streams</b> for data to move along:
        </p>
        <div className="content-container">
          <div className="content-box">
            <p className="blue-text">Standard Input</p>
            <div className="example-heading">
              <span className="try-out-command">stdin</span>
            </div>
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
            <p className="blue-text">Standard Output</p>
            <div className="example-heading">
              <span className="try-out-command">stdout</span>
            </div>
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
            <p className="blue-text">Standard Error</p>
            <div className="example-heading">
              <span className="try-out-command">stderr</span>
            </div>
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
      <p className="body">Now let`s explore 2 useful commands.</p>
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
                <p className="example-box-text">tux@tux:~$ echo I&#39;m in a cave!</p>
                <p className="example-box-text">I&#39;m in a cave!</p>
              </div>
            </div>
        <p className="body">
          Just like how your voice might echo in a cave, <span>echo</span>{' '}
          repeats the provided string by printing it out once to the terminal.
        </p>
      </div>
      <Task
        taskPrompt={
          <p className="body task-prompt">
            Try running <span className="try-out-command">echo</span> in the
            terminal!
          </p>
        }
        taskName="Task 1"
        completed={false}
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
                <p className="example-box-text">tux@tux:~$ cat mystery.txt </p>
                <p className="example-box-text">Super secret contents !</p>
              </div>
        </div>
        <p className="body">
          Note that listing multiple files will print all the contents out.
        </p>
      </div>
      <Task
        taskPrompt={
          <p className="body task-prompt">
            Try running <span className="try-out-command">cat</span> in the
            terminal!
          </p>
        }
        taskName="Task 2"
        completed={false}
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

export default Piping;
