import tuxPointing from '../../assets/images/tux-pointing.svg';
import Modal from '../shared/Modal';
import Task from './../shared/Task';
import './../../styles/searching.scss';
import '../../styles/global.scss';

function Searching(): JSX.Element {
  const taskPrompts = [
    "Tux's friend Ruby lost her glasses.txt. Can you find where she left them?",
    `Ruby was so impressed by your work that she recommended you to Bob. Bob was packing for a trip and couldn't find where he placed his “camera”. Can you find what box (i.e., file) he placed a “camera” in?
`,
  ];

  return (
    <>
      <div className="container">
        <h2 className="lesson-title">Searching</h2>
        <p className='body'>
          Manually looking through all the file names in a directory or all the
          text in a file to find a specific string often takes forever. But
          Linux provides two commands that simplify this process:{' '}
          <span>find</span> and <span>grep</span>
        </p>
        <div id="lesson-content">
          <div>
            <span className='try-out-command'>find</span>
            <p>
              recursively travels down the file hierarchy tree and, based on
              user-specified options, finds specific files or directories.
            </p>
          </div>
          <div>
            <span className='try-out-command'>grep</span>
            <p>
              (short for “global/regular expression/print”) command searches for
              a specific string pattern in a file.
            </p>
          </div>
        </div>

        <h2 className="heading-1">Commands in Action</h2>
        <div id="task-description">
          <div>
            <p className='body'>
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
          />
          <Task
            taskPrompt={taskPrompts[1]}
            taskName="Task 2"
            completed={false}
          />
        </div>
      </div>
    </>
  );
}

export default Searching;
