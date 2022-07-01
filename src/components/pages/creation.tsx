function Creation(): JSX.Element {
  return (
    <div style={{ textAlign: 'left', paddingLeft: '2.5vw' }}>
      Creation and Deletion
      <br />
      <br />
      At the heart of any project is the ability to create and delete things. So
      let’s start with making commands.
      <br />
      <br />
      touch
      <br />
      The touch command makes a new empty file.
      <br />
      Run `touch emptyFile` and see how the file system diagram changes.
      <br />
      If you then run `cat emptyFile`, notice how nothing is printed because the
      file has no contents!
      <br />
      <br />
      mkdir
      <br />
      The mkdir command makes a new empty directory.
      <br />
      Run `mkdir newDir` and see how the file system diagram changes.
      <br />
      Notice how you can now change into the newly-created directory with `cd
      newDir`!
      <br />
      Removing commands are quite similar (plus, the names basically tell you
      what the command does!).
      <br />
      <br />
      rm
      <br />
      The rm command removes an existing file.
      <br />
      Looks like we have three files in the current directory.
      <br />
      Go ahead and remove one of them with the command `rm fileName`.
      <br />
      Can rm be used to remove a directory? Give it a try.
      <br />
      Notice how the file system diagram remains unchanged because rm cannot be
      used to remove directories.
      <br />
      The terminal also printed an error message: rm: DIRNAME: is a directory
      <br />
      <br />
      rmdir
      <br />
      The rmdir command removes an existing empty directory.
      <br />
      Try running `rmdir nonemptyDir`.
      <br />
      Notice how the terminal prints the error message: rmdir: nonemptyDir:
      Directory not empty
      <br />
      We could manually rm all the files in a directory one by one, but there’s
      an easier way: the -rf options combination.
      <br />
      For example,
      <br />
      `rm -rf nonemptyDir` recursively and forcefully (i.e., does not ask for
      confirmation)
      <br />
      removes all files within the nonemptyDir directory.
      <br />
      <br />
      cp
      <br />
      The cp command copies one file to another.
      <br />
      `cp sourceFile destinationFile` copies the contents of sourceFile into
      destinationFile,
      <br />
      though the two will have different timestamps.
      <br />
      `cp file1 file2 directoryPath` copies the contents of file1 and file2 to
      two new files in the directoryPath directory,
      <br />
      though the two new files will have different timestamps from the two
      original files.
      <br />
      <br />
      mv
      <br />
      The mv command moves/renames files.
      <br />
      `mv oldName newName` renames a file called oldName to newName, with the
      timestamp remaining unchanged.
      <br />
      `mv file1 file2 directoryPath` moves file1 and file2 to directoryPath,
      with the timestamps remaining unchanged.
    </div>
  );
}

export default Creation;
