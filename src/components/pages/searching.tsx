import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import Task from './../shared/Task';
import './../../styles/searching.scss';

function Searching(): JSX.Element {
  const [displayModalState, setModalState] = useState(false);
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
      <div className={displayModalState ? 'modal' : 'hidden'}>
        <div className="modal-content">
          <div className="close-modal" onClick={() => setModalState(false)}>
            <MdClose />
          </div>
          <div id="helpful-commands">
            <div className="helpful-command-row">Helpful Commands</div>
            <div className="helpful-command-row">
              <div>
                <p>Find a file under a specified directory</p>
              </div>
              <div>
                <span>find [directoryToSearch] -name [fileToFind]</span>
              </div>
            </div>
            <div className="helpful-command-row">
              <div>
                <p> Find a directory under a specified directory</p>
              </div>
              <div>
                <span>find [directoryToSearch] -type d -name [fileToFind]</span>
              </div>
            </div>
            <div className="helpful-command-row">
              <div>
                <p>Find all hidden files</p>
              </div>
              <div>
                <span>
                  find [directoryToSearch] -type f -name &quot;.* &quot;
                </span>
              </div>
            </div>
            <div className="helpful-command-row">
              <div>
                <p>Find a string in a file</p>
              </div>
              <div>
                <span>grep &quot;[string]&quot; [filename]</span>
              </div>
            </div>
            <div className="helpful-command-row">
              <div>
                <p>Find a string in all files of a directory</p>
              </div>
              <div>
                <span>grep -R &quot;[string]&quot; [filename] [directory]</span>
              </div>
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
