import _ from 'lodash';
import { useEffect, useState } from 'react';
import tuxPointing from '../../assets/images/tux-pointing.svg';
import { Directory, File } from '../shared/globalTypes';
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

  const initFileSystem = new Directory(
    '/',
    undefined,
    new Map([
      [
        'dir1',
        new Directory(
          'dir1',
          undefined,
          new Map([
            ['.dir1-1', new Directory('.dir1-1', undefined)],
            ['.file1', new File('.file1', undefined)],
          ])
        ),
      ],
      ['file1.txt', new File('file1.txt', 'file1 contents')],
    ]),
    '/',
    true
  );

  const [fileSystem, setFileSystem] = useState<Directory>(initFileSystem);
  const [currentWorkingDirectory, setCurrentWorkingDirectory] =
    useState<Directory>(initFileSystem);

  // This is to test changing the file system! (You can see the change after 3s)
  useEffect(() => {
    setTimeout(() => {
      let copyFileSystem = _.cloneDeep(fileSystem) as Directory;
      copyFileSystem = copyFileSystem
        .addFileSystemObject(new File('file2.txt', 'file2 contents'))
        .removeFileSystemObject('file1.txt');

      const workingDirectoryCopy = copyFileSystem.getFileSystemObjectFromPath(
        currentWorkingDirectory.path
      ) as Directory;

      const directory = copyFileSystem.changeCurrentWorkingDirectory(
        workingDirectoryCopy,
        '/dir1/.dir1-1'
      ) as Directory;

      setCurrentWorkingDirectory(directory);
      setFileSystem(copyFileSystem);
    }, 3000);
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="lesson-title">Searching</h2>
        <p className="body">
          Manually looking through all the file names in a directory or all the
          text in a file to find a specific string often takes forever. But
          Linux provides two commands that simplify this process:{' '}
          <span className="try-out-command">find</span> and{' '}
          <span className="try-out-command">grep</span>
        </p>
        <div id="lesson-content">
          <div>
            <span className="try-out-command">find</span>
            <p>
              recursively travels down the file hierarchy tree and, based on
              user-specified options, finds specific files or directories.
            </p>
          </div>
          <div>
            <span className="try-out-command">grep</span>
            <p>
              (short for “global/regular expression/print”) command searches for
              a specific string pattern in a file.
            </p>
          </div>
        </div>

        <h2 className="heading-1">Commands in Action</h2>
        <div id="task-description">
          <div>
            <p className="body">
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
            fileSystem={fileSystem}
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
