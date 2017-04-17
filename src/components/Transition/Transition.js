import React, { Component } from 'react';
import hexToRgb from 'hex-rgb';
import rgbToHex from 'rgb-hex';

class Transition extends Component {
  constructor(props) {
    super(props);
    this.handleBg = this.handleBg.bind(this);
    this.determineBg = this.determineBg.bind(this);
    this.calcVector = this.calcVector.bind(this);
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
    const vh = window.innerHeight * (this.props.position || 0.5);
    const beginPos = this.begin.getBoundingClientRect().bottom;
    const endPos = this.end.getBoundingClientRect().bottom;

    // props and fns
    const { calcProgress, determineBg, props: { from, to, eventKey, handleTransition } } = this;

    // send back the bg color
    if (vh < beginPos) handleTransition(eventKey, from, 'pre');
    else if (vh > endPos) handleTransition(eventKey, to, 'post');
    else handleTransition(
      eventKey,
      determineBg(calcProgress(beginPos, endPos, vh)),
      'current'
    )
  }

  calcProgress(begin, end, current) {
    return (current - begin) / (end - begin);
  }

  calcRange(start, finish) {
    return finish - start;
  }

  calcVector(start, finish, progress) {
    return start + this.calcRange(start, finish) * progress;
  }

  determineBg(progress) {
    const { calcVector, props: { from, to } } = this;
    const [ sHue, sSaturation, sLuminocity ] = hexToRgb(from, to);
    const [ fHue, fSaturation, fLuminocity ] = hexToRgb(to, from);

    return '#' + rgbToHex(
      calcVector(sHue, fHue, progress),
      calcVector(sSaturation, fSaturation, progress),
      calcVector(sLuminocity, fLuminocity, progress),
    );
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
