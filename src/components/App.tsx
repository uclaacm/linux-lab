// import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Creation from './pages/creation';
import Game from './pages/game';
import Intro from './pages/intro';
import Moving from './pages/moving';
import Permissions from './pages/permissions';
import Piping from './pages/piping';
import Searching from './pages/searching';
import Stationary from './pages/stationary';
import Header from './shared/AppWrapper/Header';

function App(): JSX.Element {
  return (
    <Router>
      <Header />
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
    </Router>
  );
}

export default App;
