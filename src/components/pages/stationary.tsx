import tuxBehindIgloo from '../../assets/images/tux-behind-igloo.svg';
import '../../styles/global.scss';
import Task from '../shared/Task';

function Stationary(): JSX.Element {
  return (
    <div>
      <h1 className="lesson-title">Stationary Commands</h1>
      <p className="body">
        Linux and the POSIX file system might seem confusing at first, but if
        you&#39;ve ever used a Windows or MacOS computer, there are actually
        quite a few similarities!
      </p>
      <img src={tuxBehindIgloo} alt="tux the penguin behind an igloo" />

      <h2 className="heading-1">
        The <span className="command-in-heading">pwd</span> Command
      </h2>
      <p className="body">
        For example, just as you can make nested folders on Windows/MacOS and
        double click to navigate into one, Linux lets you interact with the file
        system in a similar way, though these “folders” are called{' '}
        <b>directories</b> in Linux.
      </p>
      <br />
      <p className="body">
        Let&#39;s say you have a file called <b>CS35L.pdf</b> in a subfolder.
        Windows users might see a file path like C:\Documents\Notes\CS35L.pdf,
        whereas Mac users might see /Users/UserName/Documents/Notes/ CS35L.pdf.
        To navigate to the Notes folder, you&#39;d have to go relative from the
        folder you are currently in.
      </p>
      <br />
      <p className="body">
        So how do you determine what directory you are in in Linux? The{' '}
        <span className="try-out-command">pwd</span> command lists the present
        working directory.
      </p>
      <Task
        taskPrompt={'Try it out in the terminal! Where is Tux?'}
        taskName="Task 1"
        completed={false}
        fileSystem={undefined}
        currentWorkingDirectory={undefined}
      ></Task>

      <h2 className="heading-1">
        The <span className="command-in-heading">whoami</span> Command
      </h2>
      <p className="body">
        We now know how to answer the question of where?, but what about who?
        How do we figure out, say, which account we are logged in as? The{' '}
        <span className="try-out-command">whoami</span> command displays the
        user id.
      </p>
      <Task
        taskPrompt={"Can you figure out Tux's username?"}
        taskName="Task 2"
        completed={false}
        fileSystem={undefined}
        currentWorkingDirectory={undefined}
      ></Task>
      <h2 className="heading-1">
        The <span className="command-in-heading">man</span> command
      </h2>
      <p className="body">
        We&#39;ve seen two commands so far—pwd and whoami—but there are hundreds
        more. Luckily, you don&#39;t need to memorize what each command does.
        Instead, the <span className="try-out-command">man</span> command, short
        for “manual”, displays explanations, options, and examples for specified
        commands.
      </p>
      <Task
        taskPrompt={
          <p className="body task-prompt">
            Try running <span className="try-out-command">man pwd</span> or{' '}
            <span className="try-out-command">man whoami</span> in the terminal.
            What is the output?
          </p>
        }
        taskName="Task 3"
        completed={false}
        fileSystem={undefined}
        currentWorkingDirectory={undefined}
      ></Task>
      <footer>
        <a href="intro">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="moving">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Stationary;
// monospace font
// left alignment
// font size
// input has black background and border
