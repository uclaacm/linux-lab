// import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './shared/AppWrapper/Header';
import { PageMapping } from './shared/globalTypes';

function App(): JSX.Element {
  return (
    <Router>
      <Header />
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
      </Routes>
    </Router>
  );
}

export default App;
