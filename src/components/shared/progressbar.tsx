import './style.css';

function Bar(): JSX.Element {
  return (
    <div>
      <div id="progress">
        <div id="progress-bar"></div>
        <ul id="progress-num">
          <li className="step active">1</li>
          <li className="step">2</li>
          <li className="step">3</li>
          <li className="step">4</li>
        </ul>
      </div>
    </div>
  );
}

export default Bar;
