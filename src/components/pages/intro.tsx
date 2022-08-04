import tuxSittingImage from '../../assets/images/tux-sitting.svg';
import Header from '../shared/AppWrapper/Header';

function Intro(): JSX.Element {
  return (
    <div>
      <Header />
      intro
      <img src={tuxSittingImage} alt="tux the penguin sitting" />
    </div>
  );
}

export default Intro;
