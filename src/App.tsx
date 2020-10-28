import React from 'react';
//Grommet stuff
import { Grommet } from 'grommet';
import { theme } from './theme'
//React Router stuff
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Pages
import SearchPage from './pages/SearchPage'
import Home from './pages/Home'
import Title from './pages/Title'
//Components
import Navbar from './components/layout/Navbar'
//Redux stuff
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Grommet theme={theme}>
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
