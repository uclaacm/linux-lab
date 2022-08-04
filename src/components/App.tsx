// import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';

import { PageMapping } from './shared/globalTypes';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        {Array.from(PageMapping.keys()).map((path) => {
          return (
            <Route
              key={path}
              path={path}
              element={PageMapping.get(path)?.component()}
            />
          );
        })}
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
