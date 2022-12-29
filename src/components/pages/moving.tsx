import tuxHoldingEgg from '../../assets/images/tux-hugging-egg.svg';
import '../../styles/global.scss';
import '../../styles/moving.scss';
import { Directory, File } from '../shared/globalTypes';
import Task from '../shared/Task';

function Moving(): JSX.Element {
  const task1FS = new Directory(
    '/',
    undefined,
    new Map([['Notes', new Directory('Notes', undefined)]]),
    '/',
    true
  );
  const task1CWD = task1FS as Directory;
  const task2FS = new Directory(
    '/',
    undefined,
    new Map([['.secret', new File('.secret', undefined, 'CS35L')]]),
    '/',
    true
  );
  const task2CWD = task2FS as Directory;

  return (
    <div>
      <h1 className="lesson-title">Moving Around the File System</h1>
      <p className="body">
        We can now figure out information about ourselves, from where to who we
        are. But what if we want to learn about our surroundings?
      </p>
      <img src={tuxHoldingEgg} alt="tux hugging a pink egg" />
      <h2 className="heading-1">
        The <span className="command-in-heading">ls</span> Command
      </h2>
      <p className="body">
        The <span className="try-out-command">ls</span> command lists the
        contents of a directory.
      </p>
      <p className="body">
        You can provide over 40 <b>options/flags</b> to{' '}
        <span className="try-out-command">ls</span> to customize exactly how
        information is displayed. Two particularly important options are{' '}
        <b>-a</b> and <b>-l</b>, which can be used separately or combined into{' '}
        <b>-al</b> or <b>-la</b>.
      </p>
      <div className="iceberg-container">
        <div className="iceberg-child left">
          <span className="try-out-command">ls -a</span>
          <p className="body">
            lists normal AND <b>hidden files</b>, or directory entries whose
            names begin with a dot that are not displayed with the bare ls
            command alone.
          </p>
        </div>
        <div className="iceberg-child right">
          <span className="try-out-command">ls -l</span>
          <p className="body">
            lists files in the <b>long format</b>. Rather than just listing file
            name, the following information is provided: file mode, number of
            links, owner name, group name, number of bytes in the file,
            abbreviated month, day-of-month file was last modified, hour file
            last modified, minute file last modified, and the pathname.
          </p>
        </div>
      </div>
      <h2 className="heading-1">
        The <span className="command-in-heading">cd</span> Command
      </h2>
      <p className="body">
        The <span className="try-out-command">cd</span> command lets you change
        into a directory. Think of this as double clicking on a folder to open
        it on a Windows/MacOS computer.
      </p>
      <p className="body">
        For example, if there is a <em>Notes</em> subdirectory in my current
        directory, <span className="try-out-command">cd Notes</span> lets me
        move into <em>Notes</em>, making <em>Notes</em> my new current
        directory.
      </p>
      <Task
        taskPrompt={
          <p className="body task-prompt">
            Try running <span className="try-out-command">pwd</span> before and
            after changing into the <em>Notes</em> directory. What do you
            notice?
          </p>
        }
        taskName="Task 1"
        solutions={['cd Notes']}
        fileSystem={task1FS}
        currentWorkingDirectory={task1CWD}
        displayFileSystem={true}
      />
      <h2 className="heading-1">Putting It All Together</h2>
      <Task
        taskPrompt={
          <p className="body task-prompt">
            Something seems amiss in this cave. Is there a secret hiding in
            plain sight?
          </p>
        }
        taskName="Task 2"
        solutions={['ls -a']}
        fileSystem={task2FS}
        currentWorkingDirectory={task2CWD}
        displayFileSystem={true}
      />
      <footer>
        <a href="stationary">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="creation">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Moving;
