// import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
                PageMapping.get(path)?.hideHeader ? (
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
