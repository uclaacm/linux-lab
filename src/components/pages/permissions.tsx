import tuxHoldingEgg from '../../assets/images/tux-egg-flippers-raised.svg';
import '../../styles/global.scss';
import { Directory, File } from '../shared/globalTypes';
import Task from './../shared/Task';
import '../../styles/Terminal.scss';
import '../../styles/Permissions.scss';

function Permissions(): JSX.Element {
  const taskPrompts = [
    'Tux found a cool file named hiddenStuff.txt but he isn’t able to open it. Can you help him read the contents?',
  ];
  const initFileSystem = new Directory(
    '/',
    undefined,
    new Map([
      [
        'hiddenStuff.txt',
        new File(
          'hiddenStuff.txt',
          'This is super secret info. I bet no one can read it.',
          '/hiddenStuff.txt',
          ['---', '---', '---']
        ),
      ],
    ]),
    '/',
    true
  );

  const currentWorkingDirectory = initFileSystem;
  return (
    <>
      <div>
        <div className="permissionContainer">
          <h1 className="lesson-title">Permissions</h1>
          <div className="body">
            If you run a command like{' '}
            <span className="try-out-command">ls -l</span> in a terminal,
            you&apos;ll notice a set of 10 letters and/or dashes in the far left
            column next to each item. These are the <b>file type</b> and{' '}
            <b>permissions</b>.
          </div>
          <div className="body">
            For example, let&apos;s break down the following set of letters:
          </div>
          <div className="permissions-example">
            <span className="red-permissions">d</span>
            <span className="green-permissions">rwx</span>
            <span className="blue-permissions">r-x</span>
            <span className="purple-permissions">r--</span>
          </div>
          <h2 className="heading-1 red">File Type</h2>
          <div className="body">
            The first letter indicates the <b>file type</b>.{' '}
            <span className="try-out-command red-permissions">d</span> means the
            item is a directory, whereas{' '}
            <span className="try-out-command red-permissions">-</span> means the
            item is a file.
          </div>
          <h2 className="heading-1 green">User Permissions</h2>
          <div className="body">
            The second through fourth letters are the <b>User permissions</b>.
            The User is the user of the file. They should have the most
            permissions, as they created the file. In the example above, we see
            the User has{' '}
            <span className="try-out-command green-permissions">rwx</span>{' '}
            permissions.
          </div>
          <div className="body">
            <span className="try-out-command green-permissions">r</span> means
            read, <span className="try-out-command green-permissions">w</span>{' '}
            means write, and{' '}
            <span className="try-out-command green-permissions">x</span> means
            execute, so the User can perform all three actions.
          </div>
          <h2 className="heading-1 blue">Group Permissions</h2>
          <div className="body">
            The fifth through seventh letters are the <b>Group permissions</b>.
            The Group can consist of multiple people and should have fewer or
            the same number of permissions as the User, but more than or equal
            to Other people.
          </div>
          <div className="body">
            In this example,{' '}
            <span className="try-out-command blue-permissions">r-x</span> means
            the Group can read and execute the file, but not write to it (i.e.,
            cannot make changes to the file).
          </div>
          <h2 className="heading-1 purple">Permissions</h2>
          <div className="body">
            The last three letters are the <b>Other permissions</b>. Other
            includes people who did not create the file and are not in a special
            Group. They should have, at most, equal to the Group permissions.
          </div>
          <div className="body">
            In this example,{' '}
            <span className="try-out-command purple-permissions">r--</span>{' '}
            means Other people can only read the file, but not write or execute
            it.
          </div>
          <h2 className="heading-1">Summary</h2>
          <div className="body">
            In summary, from the most permissions to least permissions, we have
            User ≥ Group ≥ Other.
          </div>
          <h2 className="heading-1">
            The <span className="command-in-heading">chmod</span> Command
          </h2>
          <div className="body">
            To change permissions, we use the{' '}
            <span className="try-out-command">chmod</span> command. Note that{' '}
            <span className="try-out-command">u</span> refers to the user,{' '}
            <span className="try-out-command">g</span> refers to the group, and{' '}
            <span className="try-out-command">o</span> refers to others. Two
            examples are listed below:
          </div>
          <div className="examples-container">
            <div className="example">
              <div className="blue-text">Giving the group write permission</div>
              <div className="terminal">chmod g+w myFile.txt</div>
            </div>
            <div className="example">
              <div className="blue-text">
                Giving everyone execute permission
              </div>
              <div className="terminal">chmod +x</div>
            </div>
          </div>
        </div>

        <Task
          taskPrompt={taskPrompts[0]}
          taskName="Task 1"
          solutions={['chmod u+r hiddenStuff.txt']}
          fileSystem={initFileSystem}
          currentWorkingDirectory={currentWorkingDirectory}
        />
        <img
          className="tux-egg"
          src={tuxHoldingEgg}
          alt="tux raising his flippers while holding an egg"
        />
        <div className="body last-line">
          🎉 Congrats, you&apos;ve reached the end! Click the{' '}
          <em>start over</em> button below to return to the beginning. 🎉
        </div>
      </div>
      <footer>
        <a href="searching">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="/">
          <button
            type="button"
            className="next-button"
            onClick={() => window.localStorage.clear()}
          >
            start over
          </button>
        </a>
      </footer>
    </>
  );
}

export default Permissions;
