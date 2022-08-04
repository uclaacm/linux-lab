import Header from '../shared/AppWrapper/Header';
import tuxHoldingEgg from '../../assets/images/tux-egg-flippers-raised.svg';

function Permissions(): JSX.Element {
  return (
    <div>
      <Header />
      Permissions
      <img
        src={tuxHoldingEgg}
        alt="tux raising his flippers while holding an egg"
      />
    </div>
  );
}

export default Permissions;
