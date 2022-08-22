import tuxHoldingEgg from '../../assets/images/tux-egg-flippers-raised.svg';

function Permissions(): JSX.Element {
  return (
    <div>
      Permissions
      <img
        src={tuxHoldingEgg}
        alt="tux raising his flippers while holding an egg"
      />
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
