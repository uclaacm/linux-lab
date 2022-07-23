import '../../styles/PageStyling.scss';

function Creation1(): JSX.Element {
  return (
    <div>
      <h1 className="lesson-title">Creation and Deletion</h1>
      <p className="body">
        At the heart of any project is the ability to create and delete things.
        So let’s start with making commands.
      </p>
      <br />
      <h2 className="heading-1">
        The <span className="command">touch</span> Command
      </h2>
      <p className="body">
        The <span className="try-out-command">touch</span> command makes a new
        empty file.
        <br />
        Run <span className="try-out-command">touch emptyFile</span> and see how
        the file system diagram changes.
        <br />
        If you then run <span className="try-out-command">cat emptyFile</span>,
        notice how nothing is printed because the file has no contents!
      </p>
      <h2 className="heading-1">
        The <span className="command">mkdir</span> Command
      </h2>
      <p className="body">
        <span className="try-out-command">The mkdir</span> command makes a new
        empty directory.
        <br />
        Run <span className="try-out-command">mkdir newDir</span> and see how
        the file system diagram changes.
        <br />
        Notice how you can now change into the newly-created directory with{' '}
        <span className="try-out-command">cd newDir</span>!
      </p>
      <p className="body">
        Removing commands are quite similar (plus, the names basically tell you
        what the command does!).
      </p>
      <h2 className="heading-1">
        The <span className="command">rm</span> Command
      </h2>
      <p className="body">
        The <span className="try-out-command">rm</span> command removes an
        existing file.
        <br />
        Looks like we have three files in the current directory.
        <br />
        Go ahead and remove one of them with the command{' '}
        <span className="try-out-command">rm fileName</span>.
        <br />
        Can rm be used to remove a directory? Give it a try.
        <br />
        Notice how the file system diagram remains unchanged because rm cannot
        be used to remove directories.
        <br />
        The terminal also printed an error message: rm: DIRNAME: is a directory
      </p>
      <h2 className="heading-1">
        The <span className="command">rmdir</span> Command
      </h2>
      <p className="body">
        The rmdir command removes an existing empty directory.
        <br />
        Try running <span className="try-out-command">rmdir nonemptyDir</span>.
        <br />
        Notice how the terminal prints the error message: rmdir: nonemptyDir:
        Directory not empty
        <br />
        We could manually rm all the files in a directory one by one, but
        there’s an easier way: the -rf options combination.
        <br />
        For example,
        <br />
        <span className="try-out-command">rm -rf nonemptyDir</span> recursively
        and forcefully (i.e., does not ask for confirmation)
        <br />
        removes all files within the nonemptyDir directory.
      </p>
      <h2 className="heading-1">
        The <span className="command">cp</span> Command
      </h2>
      <p className="body">
        The cp command copies one file to another.
        <br />
        <span className="try-out-command">
          cp sourceFile destinationFile
        </span>{' '}
        copies the contents of sourceFile into destinationFile,
        <br />
        though the two will have different timestamps.
        <br />
        <span className="try-out-command">
          cp file1 file2 directoryPath
        </span>{' '}
        copies the contents of file1 and file2 to two new files in the
        directoryPath directory,
        <br />
        though the two new files will have different timestamps from the two
        original files.
      </p>
      <h2 className="heading-1">
        The <span className="command">mv</span> Command
      </h2>
      <p className="body">
        The mv command moves/renames files.
        <br />
        <span className="try-out-command">mv oldName newName</span> renames a
        file called oldName to newName, with the timestamp remaining unchanged.
        <br />
        <span className="try-out-command">
          mv file1 file2 directoryPath
        </span>{' '}
        moves file1 and file2 to directoryPath, with the timestamps remaining
        unchanged.
      </p>
    </div>
  );
}

export default Creation1;
