import React, { Component } from "react";
import {
  drawChromeBoiAtCoords,
  toggleCycling,
  resize
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
  handleMouseMove = event => {
    drawChromeBoiAtCoords(event.clientX, event.clientY);
  };

  handleClickEvent = event => {
    toggleCycling();
  };

  handleKeyPress = event => {
    const sign = { a: "+", s: "-" };
    if (!!sign[event.key]) resize(sign[event.key]);
  };

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClickEvent}
        onKeyPress={this.handleKeyPress}
        width="900"
        height="600"
        tabIndex="0"
      ></canvas>
    );
  }
}
