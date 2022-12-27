import tuxBehindIgloo from '../../assets/images/tux-behind-igloo.svg';
import '../../styles/global.scss';
import { Directory } from '../shared/globalTypes';
import Task from '../shared/Task';

function Stationary(): JSX.Element {
  const task1FS = new Directory(
    '/',
    undefined,
    new Map([['igloo', new Directory('igloo', undefined)]]),
    '/',
    true
  );
  const task1CWD = task1FS.getChild('igloo') as Directory;

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
      <p className="body">
        Let&#39;s say you have a file called{' '}
        <span className="magenta-text">CS35L.pdf</span> in a subfolder. Windows
        users might see a <b>file path</b> like{' '}
        <span className="magenta-text">C:\Documents\Notes\CS35L.pdf</span>,
        whereas Mac users might see{' '}
        <span className="magenta-text">
          /Users/UserName/Documents/Notes/CS35L.pdf
        </span>
        . In either case, to navigate to the Notes folder, you&#39;d have to go
        relative from the folder you are currently in.
      </p>
      <p className="body">
        So how do you determine what directory you are in in Linux?
        <div className="boxed">
          <p>
            The <span className="try-out-command">pwd</span> command lists the
            present working directory.
          </p>
        </div>
      </p>
      <Task
        taskPrompt={"Type 'pwd' in the terminal and press enter. Where is Tux?"}
        taskName="Task 1"
        solutions={['pwd']}
        fileSystem={task1FS}
        currentWorkingDirectory={task1CWD}
      />

      <h2 className="heading-1">
        The <span className="command-in-heading">whoami</span> Command
      </h2>
      <p className="body">
        We now know how to answer the question of <em>where?</em>, but what
        about <em>who?</em> How do we figure out which account we are logged in
        as?
        <div className="boxed">
          <p>
            The <span className="try-out-command">whoami</span> command displays
            the user id.
          </p>
        </div>
      </p>
      <Task
        taskPrompt={"Can you figure out Tux's username?"}
        taskName="Task 2"
        solutions={['whoami']}
        fileSystem={task1FS}
        currentWorkingDirectory={task1CWD}
      />
      <h2 className="heading-1">
        The <span className="command-in-heading">man</span> command
      </h2>
      <p className="body">
        We&#39;ve seen two commands so far—pwd and whoami—but there are hundreds
        more. Luckily, you don&#39;t need to memorize what each command does.
        <div className="boxed">
          <p>
            Instead, the <span className="try-out-command">man</span> command,
            short for “manual”, displays explanations, options, and examples for
            specified commands.
          </p>
        </div>
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
        solutions={['man pwd', 'man whoami']}
        fileSystem={task1FS}
        currentWorkingDirectory={task1CWD}
      />
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
