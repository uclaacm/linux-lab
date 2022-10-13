import tuxHoldingEgg from '../../assets/images/tux-egg-flippers-raised.svg';
import '../../styles/global.scss';
import Task from './../shared/Task';

function Permissions(): JSX.Element {
  const taskPrompts = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
    sed do eiusmod tempor incididunt ut labore et dolore magna\
     aliqua. Ut enim ad minim veniam, quis nostrud exercitation\
     ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  ];
  return (
    <div>
      <div className="permissionContainer">
        <h1 className="lesson-title">Permissions</h1>
        <div className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div
          style={{
            background: 'gray',
            width: 200,
            height: 50,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          placeholder
        </div>
        <h2 className="heading-1">
          The first letter (red) indicates the file type.
        </h2>
        <div className="body">
          Lorem <span className="try-out-command">d</span> dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
        </div>
        <h2 className="heading-1">
          The first letter (red) indicates the file type.
        </h2>
        <div className="body">
          Lorem <span className="try-out-command">d</span> dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
        </div>
        <h2 className="heading-1">
          The first letter (red) indicates the file type.
        </h2>
        <div className="body">
          Lorem <span className="try-out-command">d</span> dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
        </div>
        <h2 className="heading-1">
          The first letter (red) indicates the file type.
        </h2>
        <div className="body">
          Lorem <span className="try-out-command">d</span> dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
        </div>
        <h2 className="heading-1">Subsection</h2>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>

        <div
          style={{
            background: 'gray',
            width: 200,
            height: 50,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          placeholder
        </div>

        <p className="body">
          Lorem <span className="try-out-command">command</span>
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation
        </p>

        <div
          style={{
            background: 'gray',
            width: 200,
            height: 50,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          placeholder
        </div>

        <Task
          taskPrompt={taskPrompts[0]}
          taskName={'Task 1'}
          completed={false}
        />
        <img
          src={tuxHoldingEgg}
          alt="tux raising his flippers while holding an egg"
        />
      </div>
      <footer>
        <a href="searching">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="game">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Permissions;
