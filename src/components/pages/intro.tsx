import '../../styles/intro.scss';
import posixFileSystem from '../../assets/images/posix-file-system.png';
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <img
        className="image-box"
        src={posixFileSystem}
        alt="posix file system"
        width="60%"
      />
      <div className="heading-1">TUX</div>
      <p className="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
}

export default Intro;
