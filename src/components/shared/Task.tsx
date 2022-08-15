import { useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillCheckCircle } from 'react-icons/ai';
import './../../styles/Task.scss';
import FileSystemRender from './FileSystemRender';
import { FileSystemObject } from './globalTypes';
import Terminal from './Terminal';

function Task(prop: {
  taskPrompt: string;
  taskName: string;
  completed: boolean;
  fileSystem?: FileSystemObject;
}): JSX.Element {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(ref.current ? ref.current.offsetWidth : 0);
    };
    setWidth(ref.current ? ref.current.offsetWidth : 0);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

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
      <div className="task-content" ref={ref}>
        {prop.fileSystem && (
          <FileSystemRender data={prop.fileSystem} renderWidth={width} />
        )}
        <Terminal />
      </div>
    </div>
  );
}

export default Task;
