// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Creation from './pages/creation';
import Game from './pages/game';
import Intro from './pages/intro';
import Moving from './pages/moving';
import Permissions from './pages/permissions';
import Piping from './pages/piping';
import Searching from './pages/searching';
import Stationary from './pages/stationary';

function App(): JSX.Element {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/intro">About</Link>
            </li>
            <li>
              <Link to="/stationary">Stationary</Link>
            </li>
            <li>
              <Link to="/moving">Moving</Link>
            </li>
            <li>
              <Link to="/creation">Creation</Link>
            </li>
            <li>
              <Link to="/piping">Piping</Link>
            </li>
            <li>
              <Link to="/searching">Searching</Link>
            </li>
            <li>
              <Link to="/permissions">Permissions</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
          </ul>

          <hr />

          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/stationary" element={<Stationary />} />
            <Route path="/moving" element={<Moving />} />
            <Route path="/creation" element={<Creation />} />
            <Route path="/piping" element={<Piping />} />
            <Route path="/searching" element={<Searching />} />
            <Route path="/permissions" element={<Permissions />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
