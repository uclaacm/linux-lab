import '../../styles/intro.scss';
import posixFileSystem from '../../assets/images/posix-file-system.png';
import tux from '../..assets/images/Tux.png';
// import "../../styles/global.scss"
function Intro(): JSX.Element {
  return (
    <div className="intro-container">
      <div className="lesson-title">INTRO TO LINUX</div>
      <p className="body">
        Linux is a family of operating systems. An operating system is a piece
        of software that acts as an interface between the user and the
        computer&apos;s resources by providing resources for applications to
        build off of.
      </p>
      <p className="body">
        Linux is one of the most widely used operating systems today in part
        because it is a FOSS or free or open source software. Anyone can obtain
        a copy of the Linux kernel and build their own Linux operating system!
        Understanding Linux is helpful to know because it helps build and run
        many different kinds of applications today. Whether it&apos;s hacking
        into a computer or helping to put someone on the moon, Linux can help
        perform all of these various tasks!
      </p>
      <p className="body">
        In this learning lab, you will be learning how to speak the language of
        Linux or learning basic commands that often apply through a command-line
        interface (CLI). These commands will not only teach you how to move
        about the Linux file system but also teach you how to command the
        computer to do what you want!
      </p>

      <div className="heading-1">THE POSIX FILE SYSTEM</div>
      <p className="body">
        POSIX (Portable Operating System Interface) standard is one of the
        primary standards adopted by Linux. It was created as part of a set of
        standards to allow applications to run across different UNIX based
        operating systems, such as Linux.
      </p>

      <p className="body">
        The POSIX file system is organized in a tree-like format, branching out
        from the root directory and into descendent directories containing files
        and other subdirectories. The POSIX file system also defines a set of
        operations that can be performed on files and directories, such as open,
        close, read, and write.
      </p>

      <img
        className="image-box"
        src={posixFileSystem}
        alt="posix file system"
        width="60%"
      />
      <div className="heading-1">TUX</div>
      <p className="body">
        Tux the penguin is the official brand character of Linux. The creator of
        Linux, Linus Torvalds, wanted their branch character to be a penguin as
        he was rumored to have contracted &ldquo;penguinitis&rdquo; after being
        bitten by a penguin! Tux&apos;s was designed by Larry Ewing and named by
        James Hughes. His name is meant to stand for &ldquo;(T)orvalds
        (U)ni(X)&rdquo;, or tuxedo, which a penguin resembles.
      </p>
      <img
        className="image-box"
        src={tux}
        alt="Image of Tux"
      />
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
