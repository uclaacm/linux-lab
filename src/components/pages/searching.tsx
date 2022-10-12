import tuxPointing from '../../assets/images/tux-pointing.svg';
import { Directory, File } from '../shared/globalTypes';
import Modal from '../shared/Modal';
import Task from './../shared/Task';
import './../../styles/searching.scss';
import '../../styles/global.scss';

function Searching(): JSX.Element {
  const taskPrompts = [
    <p className="body task-prompt" key={'search-task-text-1'}>
      Tux&apos;s friend Ruby lost her <strong>glasses.txt</strong>. Can you{' '}
      <i>find</i> where she left them?
    </p>,
    <p className="body task-prompt" key={'search-task-text-2'}>
      Ruby was so impressed by your work that she recommended you to Bob. Bob
      was packing for a trip and couldn&apos;t find where he placed his
      &quot;camera&quot;. Can you find what box (i.e., file) he placed a
      &quot;camera&quot;?
    </p>,
  ];

  const initFileSystem = new Directory(
    '/',
    undefined,
    new Map([
      [
        'dir1',
        new Directory(
          'dir1',
          undefined,
          new Map([['.file1', new File('.file1', '/dir1/.file1')]])
        ),
      ],
      ['file1.txt', new File('file1.txt', 'file1 contents')],
    ]),
    '/',
    true
  );
  (initFileSystem.getChild('dir1') as Directory).addFileSystemObject(
    new Directory('.dir2')
  );
  const currentWorkingDirectory = initFileSystem;

  return (
    <>
      <div className="container">
        <h2 className="lesson-title">Searching</h2>
        <p className="body">
          Manually looking through all the file names in a directory or all the
          text in a file to find a specific string often takes forever. But
          Linux provides two commands that simplify this process:{' '}
          <span className="try-out-command">find</span> and{' '}
          <span className="try-out-command">grep</span>
        </p>
        <div id="lesson-content">
          <div>
            <span className="try-out-command">find</span>
            <p>
              recursively travels down the file hierarchy tree and, based on
              user-specified options, finds specific files or directories.
            </p>
          </div>
          <div>
            <span className="try-out-command">grep</span>
            <p>
              (short for “global/regular expression/print”) command searches for
              a specific string pattern in a file.
            </p>
          </div>
        </div>

        <h2 className="heading-1">Commands in Action</h2>
        <div id="task-description">
          <div>
            <p className="body">
              Let&#39;s see these commands in action! Click on the Helpful
              Commands button for hints.
            </p>
          </div>
          <div id="task-hint">
            <Modal />
            <img
              src={tuxPointing}
              alt="tux pointing to the 'helpful commands' button"
              id="penguin"
            />
          </div>
        </div>
        <div id="tasks-container">
          <Task
            taskPrompt={taskPrompts[0]}
            taskName="Task 1"
            completed={true}
            fileSystem={initFileSystem}
            currentWorkingDirectory={currentWorkingDirectory}
            displayFileSystem={true}
          />
          <Task
            taskPrompt={taskPrompts[1]}
            taskName="Task 2"
            completed={false}
          />
        </div>
        <footer>
          <a href="piping">
            <button type="button" className="back-button">
              back
            </button>
          </a>
          <a href="permissions">
            <button type="button" className="next-button">
              next
            </button>
          </a>
        </footer>
      </div>
    </>
  );
}

export default Searching;
