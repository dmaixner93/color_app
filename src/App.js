import React, { Component } from 'react';
import Palette from './Palette.js';
import seedColors from './seedColors';
import { generatePalettes } from './colorHelpers.js'

class App extends Component {
  render() {
    return (
      <Palette palette={generatePalettes(seedColors[4])}/>
    )
  }
}

export default App;