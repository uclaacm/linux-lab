import tuxHoldingEgg from '../../assets/images/tux-hugging-egg.svg';
import '../../styles/global.scss';

function Moving(): JSX.Element {
  return (
    <div>
      <h1 className='lesson-title'>Moving Around the File System</h1>
      <p className="body">
        Ok, we can now figure out information about ourselves, from where to who
        we are But what if we want to learn about our surroundings?
      </p>
      <img src={tuxHoldingEgg} alt="tux hugging a pink egg" />
      <h2 className='heading-1'>The <span className='command'>ls</span> Command</h2>
      <p className="body">
        The ls command lists the contents of a directory.
      </p>
      <p className="body">
      You can provide over 40 options/flags to ls to customize exactly
      customize exactly how information is displayed. Two particularly
      important options are -a and -l, which can be used separately or
      combined into -al or -la.
      </p>
      <span className='try-out-command'>ls -a</span>
      <p className="body">
       lists normal AND hidden files, or directory entries
      whose names begin with a dot that are not displayed with the
      bare ls command alone.
      </p>
      <span className='try-out-command'>ls -l</span>
      <p className="body">
        lists files in the long format. Rather than just listing
        file name, the following information is provided: file mode,
        number of links, owner name, group name, number of bytes in the
        file, abbreviated month, day-of-month file was last modified,
        hour file last modified, minute file last modified, and the
        pathname.       
      </p>
      <h2 className='heading-1'>The <span className='command'>cd</span> Command</h2>
      <p className='body'>
        The cd command lets you change into a directory. Think of this as double
        clicking on a folder to open it on a Windows/MacOS computer.
      </p>
      <p className='body'>
          For example, if there is a Notes subdirectory in my current
          directory, `cd Notes` lets me move into Notes, making Notes my new
          current directory.
      </p>
      <p className='body'>
          TASK: Try running `pwd` before and after cd-ing into a
          directory. What do you notice?
        </p>
      <p className="body">
        Something seems amiss in this cave. Is there a secret hiding in plain
        sight?
      </p>
    </div>
  );
}

export default Moving;
