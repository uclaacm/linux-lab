import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import './../../styles/Modal.scss';

function Modal(): JSX.Element {
  const [displayModalState, setModalState] = useState(false);
  return (
    <>
      <div id="helpful-commands-button" onClick={() => setModalState(true)}>
        Helpful Commands
      </div>
      <div className={displayModalState ? 'modal' : 'hidden'}>
        <div className="modal-content">
          <div className="close-modal" onClick={() => setModalState(false)}>
            <MdClose />
          </div>

          <div id="helpful-commands">
            <div className="lesson-title" id="modal-title">
              Helpful Commands
            </div>
            <div className="helpful-command-row">
              <div>
                <p>Find a file under a specified directory</p>
              </div>
              <div>
                <span className="try-out-command">
                  find [directoryToSearch] -name [fileToFind]
                </span>
              </div>
            </div>
            <div className="helpful-command-row">
              <div>
                <p> Find a directory under a specified directory</p>
              </div>
              <div>
                <span className="try-out-command">
                  find [directoryToSearch] -type d -name [fileToFind]
                </span>
              </div>
            </div>
            <div className="helpful-command-row">
              <div>
                <p>Find all hidden files</p>
              </div>
              <div>
                <span className="try-out-command">
                  find [directoryToSearch] -type f -name &quot;.* &quot;
                </span>
              </div>
            </div>
            <div className="helpful-command-row">
              <div>
                <p>Find a string in a file</p>
              </div>
              <div>
                <span className="try-out-command">
                  grep &quot;[string]&quot; [filename]
                </span>
              </div>
            </div>
            <div className="helpful-command-row">
              <div>
                <p>Find a string in all files of a directory</p>
              </div>
              <div>
                <span className="try-out-command">
                  grep -R &quot;[string]&quot; [filename] [directory]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
