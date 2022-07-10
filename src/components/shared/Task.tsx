import { IconContext } from 'react-icons';
import { AiFillCheckCircle } from 'react-icons/ai';
import './../../styles/Task.scss';

function Task(prop: {
  taskPrompt: string;
  taskName: string;
  completed: boolean;
}): JSX.Element {
  return (
    <div id="task1" className="task">
      <span className="task-header">
        <IconContext.Provider
          value={{
            className: prop.completed ? 'complete' : 'incomplete',
            size: '1.5em',
          }}
        >
          <AiFillCheckCircle />
        </IconContext.Provider>
        <h2 className="task-name">{prop.taskName}</h2>
      </span>
      <p>{prop.taskPrompt}</p>
      <div className="task-content">
        <div className="terminal">terminal</div>
      </div>
    </div>
  );
}

export default Task;
