import { RefObject, useEffect, useRef, useState } from 'react';
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
  const [dimensions, setDimensions] = useState({
    renderWidth: 0,
    renderHeight: 0,
  });

  function handleResize(
    currDimensions: RefObject<HTMLInputElement> | RefObject<null> | null
  ): void {
    if (currDimensions && currDimensions.current) {
      setDimensions({
        renderWidth: currDimensions.current.offsetWidth,
        renderHeight: currDimensions.current.offsetHeight,
      });
    } else {
      setDimensions({
        renderWidth: 0,
        renderHeight: 0,
      });
    }
  }

  useEffect(() => {
    handleResize(ref);
    window.addEventListener('resize', () => handleResize(ref));
    return () => window.removeEventListener('resize', () => handleResize(ref));
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
          <FileSystemRender
            data={prop.fileSystem}
            renderDimensions={dimensions}
          />
        )}
        <Terminal />
      </div>
    </div>
  );
}

export default Task;
