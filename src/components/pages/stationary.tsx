import tuxBehindIgloo from '../../assets/images/tux-behind-igloo.svg';
import '../../styles/global.scss';

function Stationary(): JSX.Element {
  return (
    <div>
      <h1 className="lesson-title">Stationary Commands</h1>
      <p className='body'>
        Linux and the POSIX file system might seem confusing at first, but if
        you&#39;ve ever used a Windows or MacOS computer, there are actually
        quite a few similarities!
      </p>
      <img src={tuxBehindIgloo} alt="tux the penguin behind an igloo" />
      
      <h2 className='heading-1'>The <span className='command'>pwd</span> Command</h2>
      <p className='body'>
        For example, just as you can make nested folders on Windows/MacOS and
        double click to navigate into one, Linux lets you interact with the file
        system in a similar way, though these “folders” are 
        called <b>directories</b> in Linux.
      </p>
      <br />
      <p className='body'>
        Let&#39;s say you have a file called <b>CS35L.pdf</b> in a subfolder. Windows
        users might see a file path like C:\Documents\Notes\CS35L.pdf, whereas
        Mac users might see /Users/UserName/Documents/Notes/ CS35L.pdf. To
        navigate to the Notes folder, you&#39;d have to go relative from the
        folder you are currently in.
      </p>
      <br />
      <p className='body'>
        So how do you determine what directory you are in in Linux? 
        The <span className='try-out-command'>pwd</span> command lists the present working directory.
      </p>
      <h2 className='heading-1'>Task 1</h2>
      <p className='body'>
      Try it out in the terminal! Where is Tux?
      </p>

      <h2 className='heading-1'>The <span className='command'>whoami</span> Command</h2>
      <p className='body'>
        We now know how to answer the question of where?, but what about who?
        How do we figure out, say, which account we are logged in as? 
        The  <span className='try-out-command'>whoami</span> command displays the user id.
      </p>
      <h2 className='heading-1'>Task 2</h2>
      <p className='body'>
        Can you figure out Tux&#39; s username?
      </p>

      <h2 className='heading-1'>The <span className='command'>man</span> command</h2>
      <p className='body'>
        We&#39;ve seen two commands so far—pwd and whoami—but there are hundreds
        more. Luckily, you don&#39;t need to memorize what each command does.
        Instead, the  <span className='try-out-command'>man</span>  command, short for “manual”, displays explanations,
        options, and examples for specified commands.
      </p>
      <h2 className='heading-1'>Task 3</h2>
        <p className='body'>
          Try running  <span className='try-out-command'>man pwd</span> or  <span className='try-out-command'>man whoami</span> in the terminal. What is the
          output?
        </p>
    </div>
  );
}

export default Stationary;
