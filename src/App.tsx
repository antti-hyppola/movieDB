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
import Footer from './components/layout/Footer'
import NotFound from './components/layout/NotFound'
//Redux stuff
import { Provider } from 'react-redux'
import store from './redux/store'
//Particles
import ParticlesBG from 'particles-bg'

function App() {
  return (
    <Grommet theme={theme}>
      <div className="particles">
        <ParticlesBG type='cobweb' />
      </div>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={SearchPage} />
            <Route path='/titles/:id' component={Title} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </Grommet>
  );
}

export default App;
