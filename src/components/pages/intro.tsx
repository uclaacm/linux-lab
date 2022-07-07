import './../../styles/intro.scss';

function Intro(): JSX.Element {
  return (
    <div>
      Intro
      <footer>
        <a href="#">
          <button type="button" className="back-button">
            back
          </button>
        </a>
        <a href="stationary">
          <button type="button" className="next-button">
            next
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Intro;
