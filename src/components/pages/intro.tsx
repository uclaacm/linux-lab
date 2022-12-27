import '../../styles/global.scss';
import '../../styles/intro.scss';
import tux from '../../assets/images/intro-tux.png';
import posixFileSystem from '../../assets/images/posix-file-system.png';

function Intro(): JSX.Element {
  return (
    <div className="intro-container">
      <h1 className="lesson-title">INTRO TO LINUX</h1>
      <p className="body">
        Like Windows and iOS, Linux is an <b>operating system (OS)</b>—a piece
        of software that manages a computer&apos;s basic functions, from
        figuring out which key a user presses to storing data. By taking care of
        these &quot;mundane&quot; tasks, the OS simplifies life for
        <b> applications</b>, which can focus instead on performing specialized
        tasks on top of the OS.
      </p>
      <p className="body">
        Linux is one of the most widely-used operating systems today partly
        because it is
        <b> free and open-source software (FOSS)</b>. Anyone can obtain a copy
        of the Linux kernel and build their own Linux operating system for free.
        Whether you want to hack (ethically) into a computer or send someone to
        the moon, Linux can be used to build different applications and perform
        a variety of tasks.
      </p>
      <p className="body">
        In this learning lab, you will learn how to speak the language of Linux
        by learning basic commands that are often used on a
        <b> command-line interface (CLI)</b>. These commands will not only teach
        you how to move around the Linux file system but also how to command the
        computer to do anything you want!
      </p>

      <h2 className="heading-1">THE POSIX FILE SYSTEM</h2>
      <p className="body">
        <b>POSIX (Portable Operating System Interface) </b>
        is a family of standards that allows applications to run, even when
        moved across different UNIX-based operating systems, such as Linux.
      </p>

      <p className="body">
        The POSIX file system is organized in a tree-like format, branching out
        from the root directory and into descendent directories containing files
        and other subdirectories. If you&apos;ve ever used Windows or iOS, you
        can think of directories as folders and files as the documents within
        them. To interact with these files and directories, there exist numerous
        operations, such as open, close, read, and write.
      </p>

      <img
        className="posix-image"
        src={posixFileSystem}
        alt="POSIX file system"
      />
      <h2 className="heading-1">ALL ABOUT TUX!</h2>
      <div className="row">
        <div className="left-column">
          <p className="body">
            Tux is the official brand character of Linux. The creator of Linux,
            Linus Torvalds, wanted a penguin as mascot after he was rumored to
            have contracted &quot;penguinitis&quot; after being bitten by a
            penguin! The name Tux is meant to stand for &quot;(T)orvalds
            (U)ni(X)&quot;, or tuxedo, which a penguin resembles.
          </p>
          <p className="body">
            Tux will also be our guide for the day, so go ahead and click{' '}
            <em>next</em> when you&apos;re ready to begin!
          </p>
        </div>
        <div className="right-column">
          <img className="tux-image" src={tux} alt="Tux the penguin" />
        </div>
      </div>
      <footer>
        <a href="/">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="stationary">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Intro;
