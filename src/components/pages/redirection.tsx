function Redirection(): JSX.Element {
  return (
    <div>
      <h1 className="lesson-title">Redirection</h1>
      <p className="body">
        There are many ways to redirect the three data streams, but{' '}
        <span className="try-out-command">{'>'}</span> and{' '}
        <span className="try-out-command">|</span> are two of the most popular
        commands.
      </p>

      <h1 className="lesson-title">
        The <span className="try-out-command">{'>'}</span> Command
      </h1>
      <p className="body">
        <span className="try-out-command">{'>'}</span> is used to redirect
        output into an existing or newly-created file.
      </p>
      <footer>
        <a href="permissions">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="#">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Redirection;
