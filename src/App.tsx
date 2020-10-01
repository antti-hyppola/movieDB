import React from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage'
//Components
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Grommet plain>
        <Navbar />
      Hello world
    <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
        </Switch>
      </Grommet>
    </Router>
  );
}

export default App;
