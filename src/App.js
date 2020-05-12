import React, { Component } from 'react';
import Palette from './Palette.js';
import seedColors from './seedColors';
import { generatePalettes } from './colorHelpers.js'

class App extends Component {
  render() {
    console.log(generatePalettes(seedColors[4]));
    return (
      <Palette {...seedColors[4]}/>
    )
  }
}

export default App;