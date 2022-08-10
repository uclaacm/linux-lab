import '../../styles/piping.scss';
import tuxHoldingEgg from '../../assets/images/tux-holding-egg.svg';
import '../../styles/global.scss';

function Piping(): JSX.Element {
  return (
    <div className="lesson-container">
      <h1>Piping/IO Redirection</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco
      </p>
      <img src={tuxHoldingEgg} alt="tux holding up an egg" />
      <div className="section">
        <h2>Standard Streams</h2>
        <p className="lesson-text">
          Linux has three standard streams for data to move along:
        </p>
        <div className="content-container">
          <div className="content-box">
            <p className="content-header">standard input</p>
            <span>stdin</span>
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
            <p className="content-header">standard output</p>
            <span>stdout</span>
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
            <p className="content-header">standard error</p>
            <span>stderr</span>
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
      <p>Now let`s explore 2 useful commands.</p>
      <div className="section">
        <h2 className="lesson-subheading">
          The <span>echo</span> Command
        </h2>
        <p className="lesson-text">
          The <span>echo</span> command writes arguments to the standard output.
        </p>
        <div className="command-container">
          <div className="trial-container">
            <div className="command-box">
              Example
              <div className="content-box com-box" id="example-box">
                <p>tux@tux:~$ echo I&#39;m in a cave!</p>
                <p>I&#39;m in a cave!</p>
              </div>
            </div>
          </div>
        </div>
        <p className="lesson-text">
          Just like how your voice might echo in a cave, <span>echo</span>{' '}
          repeats the provided string by printing it out once to the terminal.
        </p>
      </div>
      <div className="section">
        <h3 className="sub-subheading">Task 1</h3>
        <p className="lesson-text">
          Try running <span>echo</span> in the terminal!
        </p>
        <div className="try-out-container">
          <div className="content-box" id="try-out-box"></div>
        </div>
      </div>
      <div className="section">
        <h2 className="lesson-subheading">
          The <span>cat</span> Command
        </h2>
        <p className="lesson-text">
          The <span>cat</span> command can be used to create, concatenate, or
          print the contents of a file.
        </p>
        <p>
          If you have a file named mystery.txt in your current directory, you
          can display its contents with the following commands.
        </p>
        <div className="command-container">
          <div className="trial-container">
            <div className="command-box">
              Example
              <div className="content-box com-box" id="example-box">
                <p>tux@tux:~$ cat mystery.txt </p>
                <p>Super secret contents !</p>
              </div>
            </div>
          </div>
        </div>
        <p className="lesson-text">
          Note that listing multiple files will print all the contents out.
        </p>
      </div>
      <div className="section">
        <h3 className="sub-subheading">Task 2</h3>
        <p className="lesson-text">
          Try running <span>cat</span> in the terminal!
        </p>
        <div className="try-out-container">
          <div className="content-box" id="try-out-box"></div>
        </div>
      </div>
    </div>
  );
}

export default Piping;
