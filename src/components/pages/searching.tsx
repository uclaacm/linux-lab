import { useState } from 'react';
import {
  MdCheckCircleOutline,
  MdClose,
  MdExpandLess,
  MdExpandMore,
} from 'react-icons/md';
import './../../styles/searching.scss';

function Searching(): JSX.Element {
  const [displayModalState, setModalState] = useState(false);

  return (
    <>
      <div className={displayModalState ? 'modal' : 'hidden'}>
        <div className="modal-content">
          <div className="closeModal" onClick={() => setModalState(false)}>
            <MdClose />
          </div>
          <div id="helpful-commands">
            <div className="helpful-command-row">Helpful Commands</div>
            <div className="helpful-command-row">
              <div>Find a file under a specified directory</div>
              <div>find [directoryToSearch] -name [fileToFind]</div>
            </div>
            <div className="helpful-command-row">
              <div>Find a directory under a specified directory</div>
              <div>find [directoryToSearch] -type d -name [fileToFind]</div>
            </div>
            <div className="helpful-command-row">
              <div>Find all hidden files</div>
              <div>find [directoryToSearch] -type f -name &quot;.* &quot;</div>
            </div>
            <div className="helpful-command-row">
              <div>Find a string in a file</div>
              <div>grep &quot;[string]&quot; [filename]</div>
            </div>
            <div className="helpful-command-row">
              <div>Find a string in all files of a directory</div>
              <div>grep -R &quot;[string]&quot; [filename] [directory]</div>
            </div>
          </div>
        </div>
      </div>
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
            <div
              id="helpful-commands-button"
              onClick={() => setModalState(true)}
            >
              Helpful Commands
            </div>
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
            <div className="task-content hidden">
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
