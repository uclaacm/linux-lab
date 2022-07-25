function Stationary(): JSX.Element {
  return (
    <div>
      <h1>Stationary Commands</h1>
      <p>
        Linux and the POSIX file system might seem confusing at first, but if
        you&#39;ve ever used a Windows or MacOS computer, there are actually
        quite a few similarities!
      </p>
      <h2>The pwd Command</h2>
      <p>
        For example, just as you can make nested folders on Windows/MacOS and
        double click to navigate into one, Linux lets you interact with the file
        system in a similar way, though these “folders” are called directories
        in Linux.
      </p>
      <p>
        Let&#39;s say you have a file called CS35L.pdf in a subfolder. Windows
        users might see a file path like C:\Documents\Notes\CS35L.pdf, whereas
        Mac users might see /Users/UserName/Documents/Notes/ CS35L.pdf. To
        navigate to the Notes folder, you&#39;d have to go relative from the
        folder you are currently in.
      </p>
      <p>
        So how do you determine what directory you are in in Linux? The pwd
        command lists the present working directory.
      </p>
      <h2>Task 1</h2>
      <p>Try it out in the terminal! Where is Tux?</p>
      <h2>The whoami Command</h2>
      <p>
        We now know how to answer the question of where?, but what about who?
        How do we figure out, say, which account we are logged in as? The whoami
        command displays the user id.
      </p>
      <h2>Task 2</h2>
      <p>Can you figure out Tux&#39; s username?</p>
      <h2>The man command</h2>
      <p>
        We&#39;ve seen two commands so far—pwd and whoami—but there are hundreds
        more. Luckily, you don&#39;t need to memorize what each command does.
        Instead, the man command, short for “manual”, displays explanations,
        options, and examples for specified commands.
        <h2>Task 3</h2>
        <p>
          Try running `man pwd` or `man whoami` in the terminal. What is the
          output?
        </p>
      </p>
    </div>
  );
}

export default Stationary;
