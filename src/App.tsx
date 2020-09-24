import React from 'react';
import { Grommet } from 'grommet'
//Components
import Navbar from './components/layout/Navbar'

const theme = {
  global: {
    textInput: {
      width: '200px'
    }
  }
}

function App() {
  return (
    <Grommet plain>
      <Navbar />
      Hello world
    </Grommet>
  );
}

export default App;
