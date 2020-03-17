import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => drawChromeBoiAtCoords(event.screenX, event.screenY)
  
  
  handleKeyPress = (event) => {
    if (event.key === "a") {
      return resize("+")
    } else if (event.key === "s") {
      return resize("-")
    }
  }

  render() {
    return (
      <canvas 
        onClick={toggleCycling}
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.handleKeyPress}

        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
