function Moving(): JSX.Element {
    return (
        <div>
            <div style={styles.banner}>
                <h1 style={styles.bannerTitle}>Title of Page</h1>
            </div>
            <div>
                <h1 style={styles.lessonTitle}>Moving Around the File System</h1>
                <p style={styles.text}>Ok, we can now figure out information about ourselves, from where to who we are. But what if we want to learn about our surroundings?</p>
                <h2 style={styles.text}>Command</h2>
                <p style={styles.text}>The ls command lists the contents of a directory.
                    <ul>
                        <li>
                            You can provide over 40 options/flags to ls to customize exactly how information is displayed. Two particularly important options are -a and -l, which can be used separately or combined into -al or -la.
                            <ul>
                                <li>
                                    `ls -a` lists normal AND hidden files, or directory entries whose names begin with a dot that are not displayed with the bare ls command alone.
                                </li>
                                <li>
                                    `ls -l` lists files in the long format. Rather than just listing file name, the following information is provided: file mode, number of links, owner name, group name, number of bytes in the file, abbreviated month, day-of-month file was last modified, hour file last modified, minute file last modified, and the pathname.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <p style={styles.text}>The cd command lets you change into a directory. Think of this as double clicking on a folder to open it on a Windows/MacOS computer.
                    <ul>
                        <li>
                            For example, if there is a Notes subdirectory in my current directory, `cd Notes` lets me move into Notes, making Notes my new current directory.
                            <ul>
                                <li>
                                    TASK: Try running `pwd` before and after cd-ing into a directory. What do you notice?
                                </li>
                            </ul>
                        </li>
                    </ul>
                </p>

            </div>
            <div style={styles.gridContainer1}>
                <div>
                    <p style={styles.text}>Syntax</p>
                    <div style={styles.rectangle1}></div>
                </div>
                <div>
                    <p style={styles.text}>Output</p>
                    <div style={styles.rectangle1}></div>
                </div>
            </div>
            <div>
                <p style={styles.text}>
                    <ol>
                        <li>
                            Something seems amiss in this cave. Is there a secret hiding in plain sight?
                        </li>
                        <ul>
                            <li>
                                `ls -a` to get the hidden file name
                            </li>
                        </ul>
                    </ol>
                </p>
            </div>
            <div style={styles.gridContainer2}>
                <div>
                    <div style={styles.rectangle2}>
                        <p style={styles.label}>Terminal</p>
                    </div>
                        <button type="button">submit</button>
                </div>
                <div>
                    <div style={styles.rectangle3}>
                        <p style={styles.label}>File Map</p>
                    </div>
                </div>
            </div>
            <div>
                <p style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <footer>
                <button type="button" style={styles.button2}>back</button>
                <button type="button" style={styles.button3}>next</button>
            </footer>
        </div>
    );
}

const styles = {

    bar: {
        width: '35px',
        height: '5px',
        backgroundColor: 'white',
        margin: '6px 0',
    },

    banner: {
        background: 'black',
    },

    bannerTitle: {
        color: 'white',
    },

    lessonTitle: {
        textAlign: 'left',
        marginTop: '67px',
        marginLeft: '67px',
    },

    text: {
        textAlign: 'left',
        marginLeft: '67px',
        marginRight: '67px',
    },

    gridContainer1: {
        display: 'grid',
        gap: '50px',
        gridTemplateColumns: '50% 50%',
        marginLeft: '67px',
        marginRight: '67x',
    },

    rectangle1: {
        marginLeft: '67px',
        width: '350px',
        height: '75px',
        backgroundColor: 'gray',
    },

    gridContainer2: {
        display: 'grid',
        gap: '50px',
        gridTemplateColumns: '50% 50%',
    },

    rectangle2: {
        width: '550px',
        height: '375px',
        backgroundColor: 'gray',
        marginLeft: '67px',
    },

    rectangle3: {
        width: '550px',
        height: '625px',
        backgroundColor: 'gray',
        marginRight: '67px',
    },

    label: {
        color: 'black',
        padding: '20px',
    },

    button2: {
        float: 'left',
        marginLeft: '67px',
    },

    button3: {
        float: 'right',
        marginRight: '67px',
    }
}

export default Moving;
