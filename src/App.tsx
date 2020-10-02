import React from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage'
import { Provider } from 'react-redux'
import store from './redux/store'
//Components
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Grommet plain>
      <Provider store={store}>
        <Router>
          <Navbar />
          Hello world
          <Switch>
            <Route path='/search'>
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </Grommet>
  );
}

export default App;
