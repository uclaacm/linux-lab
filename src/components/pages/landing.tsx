import '../../styles/startButton.scss';
import Snowfall from 'react-snowfall';
import img from '../../assets/landing.svg';

function Landing(): JSX.Element {
  return (
    <div style={{ position: 'relative' }}>
      <img src={img}></img>
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
  );
}

export default Landing;
