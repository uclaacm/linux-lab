function Permissions(): JSX.Element {
  return (
    <div>
      Permissions
      <footer>
        <a href="searching">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="game">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Permissions;
