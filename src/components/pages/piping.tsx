import './../../styles/piping.scss';

function Piping(): JSX.Element {
  return (
    <div>
      Piping
      <footer>
        <a href="creation">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="searching">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Piping;
