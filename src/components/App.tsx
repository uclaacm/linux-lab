// import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Header from './shared/AppWrapper/Header';

import { PageMapping } from './shared/globalTypes';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        {Array.from(PageMapping.keys()).map((path) => {
          const component = PageMapping.get(path)?.component();
          return (
            <Route
              key={path}
              path={path}
              element={
                path === '/' ? (
                  component
                ) : (
                  <>
                    <Header />
                    {component}
                  </>
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
