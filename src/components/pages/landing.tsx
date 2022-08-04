import '../../styles/startButton.scss';
import img from '../../assets/landing.svg';

function Landing(): JSX.Element {
  return (
    <div>
      <img style={{ width: '100vw' }} src={img}></img>
      <a href="intro">
        <button className="startbutton">START</button>
      </a>
    </div>
  );
}

export default Landing;
