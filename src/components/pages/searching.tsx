import {
  MdCheckCircleOutline,
  MdExpandLess,
  MdExpandMore,
} from 'react-icons/md';

function Searching(): JSX.Element {
  return (
    <>
      <div className="container">
        <h2 className="header-text">Lesson Title</h2>
        <p>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2 className="header-text">Tasks</h2>
        <div id="task-description">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div id="task-hint">
            <div id="helpful-commands">Helpful Commands</div>
            <div id="penguin">Penguin</div>
          </div>
        </div>
        <div id="tasks-container">
          <div id="task1" className="task">
            <div className="task-header">
              <MdCheckCircleOutline className="complete" />
              <div className="task-name">Task 1</div>
              <div className="toggle-expand">
                <MdExpandMore />
              </div>
            </div>
            <div className="task-content closed-task">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <div className="terminal">terminal</div>
              <div className="submit">submit</div>
            </div>
          </div>
          <div id="task2" className="task">
            <div className="task-header">
              <MdCheckCircleOutline className="incomplete" />
              <div className="task-name">Task 2</div>
              <div className="toggle-expand">
                <MdExpandLess />
              </div>
            </div>
            <div className="task-content">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <div className="terminal">terminal</div>
              <div className="submit">submit</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searching;
