import React from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage'
import Home from './pages/Home'
import Title from './pages/Title'
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
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/search'>
              <SearchPage />
            </Route>
            <Route path='/titles/:id'>
              <Title />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </Grommet>
  );
}

export default App;
