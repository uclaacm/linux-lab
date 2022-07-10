import './../../styles/stationary.scss';

function Stationary(): JSX.Element {
  return (
    <div>
      Stationary
      <footer>
        <a href="/">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="moving">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Stationary;
