import '../../styles/piping.scss';
import tuxHoldingEgg from '../../assets/images/tux-holding-egg.svg';
import '../../styles/global.scss';

function Piping(): JSX.Element {
  return (
    <div className="lesson-container">
      <h1 className='lesson-title'>Piping/IO Redirection</h1>
      <div className='first-paragraph'>
      <p className='body'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco
      </p>
      <img src={tuxHoldingEgg} alt="tux holding up an egg" />
      </div>
      
      <div className="section">
        <h2 className='heading-1'>Standard Streams</h2>
        <p className='body'>
          Linux has three <b>standard streams</b> for data to move along:
        </p>
        <div className="content-container">
          <div className="content-box">
            <p className="content-header">standard input</p>
            <span className='try-out-command'>stdin</span>
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
            <span className='try-out-command'>stdout</span>
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
            <span className='try-out-command'>stderr</span>
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
      <p className='body'>Now let`s explore 2 useful commands.</p>
      <div className="section">
        <h2 className='heading-1'>
          The <span className='command-in-heading'>echo</span> Command
        </h2>
        <p className='body'>
          The <span className='try-out-command'>echo</span> command writes arguments to the standard output.
        </p>
        <div className="command-container">
          <div className="trial-container">
            <div className="command-box">
              <p className='body'>Example</p>
              <div className="content-box com-box" id="example-box">
                <p className='body'>tux@tux:~$ echo I&#39;m in a cave!</p>
                <p className='body'>I&#39;m in a cave!</p>
              </div>
            </div>
          </div>
        </div>
        <p className='body'>
          Just like how your voice might echo in a cave, <span>echo</span>{' '}
          repeats the provided string by printing it out once to the terminal.
        </p>
      </div>
      <div className="section">
        <h3 className='heading-1'>Task 1</h3>
        <p className='body'>
          Try running <span className='try-out-command'>echo</span> in the terminal!
        </p>
        <div className="try-out-container">
          <div className="content-box" id="try-out-box"></div>
        </div>
      </div>
      <div className="section">
        <h2 className='heading-1'>
          The <span className='command-in-heading'>cat</span> Command
        </h2>
        <p className='body'>
          The <span className='try-out-command'>cat</span> command can be used to create, concatenate, or
          print the contents of a file.
        </p>
        <p className='body'>
          If you have a file named mystery.txt in your current directory, you
          can display its contents with the following commands.
        </p>
        <div className="command-container">
          <div className="trial-container">
            <div className="command-box">
              <p className='body'>Example</p>
              <div className="content-box com-box" id="example-box">
                <p className='body'>tux@tux:~$ cat mystery.txt </p>
                <p className='body'>Super secret contents !</p>
              </div>
            </div>
          </div>
        </div>
        <p className='body'>
          Note that listing multiple files will print all the contents out.
        </p>
      </div>
      <div className="section">
        <h3 className='heading-1'>Task 2</h3>
        <p className='body'>
          Try running <span className='try-out-command'>cat</span> in the terminal!
        </p>
        <div className="try-out-container">
          <div className="content-box" id="try-out-box"></div>
        </div>
      </div>
    </div>
  );
}

export default Piping;
