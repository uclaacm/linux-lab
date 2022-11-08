import '../../styles/startButton.scss';
import '../../styles/intro.scss';
import Snowfall from 'react-snowfall';
import igloo from '../../assets/images/landing-igloo.svg';
import leftIceberg from '../../assets/images/landing-left-iceberg.svg';
import tux from '../../assets/images/landing-tux.svg';
import waterShading from '../../assets/images/landing-water-shading.svg';

function Landing(): JSX.Element {
  return (
    <div className="landing">
      <div className="landing-background">
        <img className="igloo" src={igloo}></img>
        <img className="left-iceberg" src={leftIceberg}></img>
        <img className="tux" src={tux}></img>
        <img className="water-shading" src={waterShading}></img>
        <p className="title">TUX&apos;S GREAT ADVENTURE</p>
        <p className="iceberg-text">
          Join Tux on an adventure
          <br />
          through Antarctica and
          <br />
          learn the basics of Linux!
        </p>
        <a href="intro">
          <button className="startbutton">START</button>
        </a>
        <Snowfall
          color="white"
          snowflakeCount={200}
          radius={[1.0, 6.0]}
          speed={[1.0, 5.0]}
          wind={[-0.5, 2.5]}
        />
      </div>
    </div>
  );
}

export default Landing;
