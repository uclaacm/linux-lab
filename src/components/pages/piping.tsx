import "../../styles/piping.scss"

function Piping(): JSX.Element {
  return (
    <div className="lesson-container">
        <div className="lesson-title">Lesson Title</div>
        <div className="section">
            <p className="lesson-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="content-container">
                <div className="content-box">
                    <div className="content-header">standard input</div>
                    <p className="lesson-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="content-box">
                    <div className="content-header">standard output</div>
                    <p className="lesson-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="content-box">
                    <div className="content-header">standard error</div>
                    <p className="lesson-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="lesson-subheading">Command</div>
            <p className="lesson-text">
                Lorem <span className="command-highlight">ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="command-container">
                <div className="trial-container">
                    <div className="command-box">
                        Syntax
                        <div className="content-box com-box"></div>
                    </div>
                    <div className="command-box">
                        Output
                        <div className="content-box com-box"></div>
                    </div>
                </div>
                <div className="trial-container">
                    <div className="command-box">
                        Example
                        <div className="content-box com-box" id="example-box"></div>
                    </div>
                </div>
            </div>
            <p className="lesson-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
        </div>
        <div className="section">
            <div className="sub-subheading">Try Out <span className="command-highlight">Command</span></div>
            <p className="lesson-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="try-out-container">
                <div className="content-box" id="try-out-box"></div>
            </div>
        </div>
    </div>
  );
}

export default Piping;
