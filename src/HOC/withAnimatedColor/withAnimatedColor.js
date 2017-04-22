import React from 'react';

export default function withAnimatedColor (Component, id) {
  return class EnchancedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.handleColor = this.handleColor.bind(this);
      this.state = {
        color: 'transparent'
      };
    }

    componentDidMount() {
      this.element = document.getElementById(id).children[0]
      window.addEventListener('scroll', this.handleColor)
      window.addEventListener('resize', this.handleColor)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll');
      window.removeEventListener('resize');
    }

    handleColor() {
      this.setState({
        color: this.element.style['background-color']
      });
    }

    render() {
      const { color } = this.state;

      return (
          <Component color={color} />
      );
    }
  }
}
