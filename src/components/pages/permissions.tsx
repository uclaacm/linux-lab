import tuxHoldingEgg from '../../assets/images/tux-egg-flippers-raised.svg';
import Header from '../shared/AppWrapper/Header';

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
