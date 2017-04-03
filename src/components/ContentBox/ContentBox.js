import React, { Component } from 'react';
import hexToHsl from 'hex-to-hsl';
import hslToHex from 'hsl-to-hex';

class ContentBox extends Component {
  constructor(props) {
    super(props);
    this.evalTextColor = this.evalTextColor.bind(this);
  }

  evalTextColor() {
    const { calcLuminosity, props: { backgroundColor } } = this;
    const [ , , luminosity ] = hexToHsl(backgroundColor);
    const textLuminosity = luminosity < 75 ? 100 : calcLuminosity(luminosity);
    return hslToHex(0, 0, textLuminosity)
  }

  calcLuminosity(lum) {
    return 100 - 0.75 * lum;
  }

  render() {
    const {
      evalTextColor,
      props: {
        backgroundColor,
        ...otherProps
      }
    } = this;

    const styles = {
      backgroundColor,
      color: evalTextColor(),
    };

    return (
      <div
        {...otherProps}
        style={styles}
      />
    );
  }
}

export default ContentBox;
