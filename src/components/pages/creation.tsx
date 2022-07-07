import './../../styles/creation.scss';

function Creation(): JSX.Element {
  return (
    <div>
      Creation
      <footer>
        <a href="moving">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="piping">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Creation;
