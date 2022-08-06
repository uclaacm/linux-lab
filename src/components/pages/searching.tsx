import tuxPointing from '../../assets/images/tux-pointing.svg';
import Modal from '../shared/Modal';
import Task from './../shared/Task';
import './../../styles/searching.scss';
import '../../styles/global.scss';

function Searching(): JSX.Element {
  const taskPrompts = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`,
  ];

  return (
    <>
      <div className="container">
        <h2 className="lesson-title">Lesson Title</h2>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div id="lesson-content">
          <div>
            <p>find</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <p>grep</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2 className="heading-1">Tasks</h2>
        <div id="task-description">
          <div>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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
