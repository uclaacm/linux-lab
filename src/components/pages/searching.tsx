import './../../styles/searching.scss';

function Searching(): JSX.Element {
  return (
    <div>
      Searching
      <footer>
        <a href="piping">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="permissions">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Searching;
