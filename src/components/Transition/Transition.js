import React, { Component } from 'react';
import hexToHsl from 'hex-to-hsl';
import hslToHex from 'hsl-to-hex';

class Transition extends Component {
  constructor(props) {
    super(props);
    this.handleBg = this.handleBg.bind(this);
    this.determineBg = this.determineBg.bind(this);

    // color
    const color= this.props.color;
    const hslColor = hexToHsl(color);
    this.hue = hslColor[0];
    this.saturation = hslColor[1];
    this.luminocity = hslColor[2];

    // end values
    if (this.props.reversed) {
      this.initialColor = '#ffffff';
      this.endColor = color;
    } else {
      this.initialColor = color;
      this.endColor = '#ffffff';
    }
  }

  componentDidMount() {
    this.handleBg();
    window.addEventListener('resize', () => this.handleBg());
    window.addEventListener('scroll', () => this.handleBg());
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
    window.removeEventListener('scroll');
  }

  handleBg() {
    // window height and offset position of the elements
    const vh = window.innerHeight / 2;
    const beginPos = this.begin.getBoundingClientRect().bottom;
    const endPos = this.end.getBoundingClientRect().bottom;

    // props and fns
    const { eventKey, handleTransition } = this.props;
    const { calcProgress, determineBg, initialColor, endColor } = this;

    // send back the bg color
    if (vh < beginPos) handleTransition(eventKey, initialColor, 'pre');
    else if (vh > endPos) handleTransition(eventKey, endColor, 'post');
    else handleTransition(
      eventKey,
      determineBg(calcProgress(beginPos, endPos, vh)),
      'current'
    )
  }

  calcProgress(begin, end, current) {
    return (current - begin) / (end - begin);
  }

  determineBg(progress) {
    const { hue, saturation, luminocity } = this;
    const isReversed = this.props.reversed;

    const nextLuminosity = isReversed
      ? 100 - (100 - luminocity) * progress
      : luminocity + progress * (100 - luminocity);

    return hslToHex(hue, saturation, nextLuminosity);
  }

  render() {
    const { height } = this.props;

    return (
      <div>
        <div ref={node => this.begin = node} />
        <div ref={node => this.end = node} style={{ height }} />
      </div>
    );
  }
}

export default Transition;
