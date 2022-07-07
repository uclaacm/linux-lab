import './../../styles/game.scss';

function Game(): JSX.Element {
  return (
    <div>
      Game
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

export default Game;
