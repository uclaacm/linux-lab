import tuxHoldingEgg from '../../assets/images/tux-hugging-egg.svg';
import '../../styles/global.scss';

function Moving(): JSX.Element {
  return (
    <div>
      <h1 className="lesson-title">Moving Around the File System</h1>
      <p className="body">
        Ok, we can now figure out information about ourselves, from where to who
        we are But what if we want to learn about our surroundings?
      </p>
      <img src={tuxHoldingEgg} alt="tux hugging a pink egg" />
      <h2 className="heading-1">
        The <span className="command-in-heading">ls</span> Command
      </h2>
      <p className="body">The ls command lists the contents of a directory.</p>
      <p className="body">
        You can provide over 40 <b>options/flags</b> to ls to customize exactly
        customize exactly how information is displayed. Two particularly
        important options are <b>-a</b> and <b>-l</b>, which can be used
        separately or combined into <b>-al</b> or <b>-la</b>.
      </p>
      <span className="try-out-command">ls -a</span>
      <p className="body">
        lists normal AND <b>hidden files</b>, or directory entries whose names
        begin with a dot that are not displayed with the bare ls command alone.
      </p>
      <span className="try-out-command">ls -l</span>
      <p className="body">
        lists files in the <b>long format</b>. Rather than just listing file
        name, the following information is provided: file mode, number of links,
        owner name, group name, number of bytes in the file, abbreviated month,
        day-of-month file was last modified, hour file last modified, minute
        file last modified, and the pathname.
      </p>
      <h2 className="heading-1">
        The <span className="command-in-heading">cd</span> Command
      </h2>
      <p className="body">
        The <span className="try-out-command">cd</span> command lets you change
        into a directory. Think of this as double clicking on a folder to open
        it on a Windows/MacOS computer.
      </p>
      <p className="body">
        For example, if there is a Notes subdirectory in my current directory,{' '}
        <span className="try-out-command">cd Notes</span> lets me move into
        Notes, making Notes my new current directory.
      </p>
      <h2 className="heading-1">Task 1</h2>
      <p className="body">
        Try running <span className="try-out-command">pwd</span> before and
        after <span className="try-out-command">cd-ing</span> into a directory.
        What do you notice?
      </p>
      <h2 className="heading-1">Task 2</h2>
      <p className="body">
        Something seems amiss in this cave. Is there a secret hiding in plain
        sight?
      </p>
      <footer>
        <a href="stationary">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="creation">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Moving;
