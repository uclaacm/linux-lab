import dedent from 'dedent';

interface ManPage {
  [key: string]: string;
}

export const manPages: ManPage = {
  whoami: dedent`
        whoami – display effective user id
          (DESCRIPTION SIMPLIFIED FOR LAB)`,
  pwd: dedent`
        pwd – return working directory name
          (DESCRIPTION SIMPLIFIED FOR LAB)`,
  ls: dedent`
    ls – list directory contents.
      OPTIONS: 
        -a      Include directory entries whose names begin with a dot (‘.’).
        -l      List files in the long format: file mode, number of links, owner name, group name, number of
        bytes in the file, abbreviated month, day-of-month file was last
        modified, hour file last modified, minute file last modified, and the
        pathname.
        (DESCRIPTION SIMPLIFIED FOR LAB)`,
  cd: dedent`
    cd — change the working directory
      (DESCRIPTION SIMPLIFIED FOR LAB)`,
  touch: dedent`
    touch – change file access and modification times
      (DESCRIPTION SIMPLIFIED FOR LAB)`,
  mkdir: dedent`
    mkdir – make directories
      (DESCRIPTION SIMPLIFIED FOR LAB)`,
  rmdir: dedent`
    rmdir – remove directories
      (DESCRIPTION SIMPLIFIED FOR LAB)`,
  cp: dedent`
    cp – copy files
      (DESCRIPTION SIMPLIFIED FOR LAB)`,
  mv: dedent`
    mv – move files
      (DESCRIPTION SIMPLIFIED FOR LAB)`,
  echo: dedent`
    echo – write arguments to the standard output
      (DESCRIPTION SIMPLIFIED FOR LAB)`,
  cat: dedent`
    cat – concatenate and print files
      (DESCRIPTION SIMPLIFIED FOR LAB)`,
  grep: dedent`
    grep - file pattern searcher. The grep utility searches any given input files, selecting lines that
      match one or more patterns.  By default, a pattern matches an input line
      if the regular expression (RE) in the pattern matches the input line
      without its trailing newline.  An empty expression matches every line.
      Each input line that matches at least one of the patterns is written to
      the standard output.
      (DESCRIPTION SIMPLIFIED FOR LAB)`,
  find: dedent`
    find – walk a file hierarchy. The find utility recursively descends the directory tree for each path
      listed, evaluating an expression in terms of each file in the tree.
      (DESCRIPTION SIMPLIFIED FOR LAB)`,
  chmod: dedent`
    chmod – change file modes or Access Control Lists.
    (DESCRIPTION SIMPLIFIED FOR LAB)`,
  clear: dedent`
    clear - clear the terminal screen
    (DESCRIPTION SIMPLIFIED FOR LAB)`,
};
