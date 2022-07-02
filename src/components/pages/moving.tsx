function Moving(): JSX.Element {
    return (
        <div>
            <h1 style={styles.lessonTitle}>Moving Around the File System</h1>
            <p style={styles.text}>Ok, we can now figure out information about ourselves,
                from where to who we are But what if we want to learn about our surroundings?</p>
            <h2 style={styles.text}>Command</h2>
            <p style={styles.text}>The ls command lists the contents of a directory.
                <ul>
                    <li>
                        You can provide over 40 options/flags to ls to customize exactly
                        customize exactly how information is displayed.
                        Two particularly important options are -a and -l,
                        which can be used separately or combined into -al or -la.
                        <ul>
                            <li>
                                `ls -a` lists normal AND hidden files, or directory entries
                                whose names begin with a dot that are not displayed with the
                                bare ls command alone.
                            </li>
                            <li>
                                `ls -l` lists files in the long format. Rather than just listing
                                file name, the following information is provided: file mode, number
                                of links, owner name, group name, number of bytes in the file,
                                abbreviated month, day-of-month file was last modified, hour file
                                last modified, minute file last modified, and the pathname.
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p style={styles.text}>The cd command lets you change into a directory.
                Think of this as double clicking on a folder to open it on a
                Windows/MacOS computer.
                <ul>
                    <li>
                        For example, if there is a Notes subdirectory in my current
                        directory, `cd Notes` lets me move into Notes, making Notes
                        my new current directory.
                        <ul>
                            <li>
                                TASK: Try running `pwd` before and after cd-ing
                                into a directory. What do you notice?
                            </li>
                        </ul>
                    </li>
                </ul>
            </p>
            <p style={styles.text}>
                Something seems amiss in this cave. Is there a secret hiding in plain sight?
                <ul>
                    <li>
                        `ls -a` to get the hidden file name
                    </li>
                </ul>
            </p>
        </div>
    );
}

//CSS styling
const styles = {

    lessonTitle: {
        textAlign: 'left',
        marginTop: '70px',
        marginLeft: '70px',
    },

    text: {
        textAlign: 'left',
        marginLeft: '70px',
        marginRight: '70px',
    },
}

export default Moving;
