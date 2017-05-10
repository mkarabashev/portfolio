import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';

import { makeTile } from '../../HOC'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.calcGrid = this.calcGrid.bind(this);

    this.initialSettings = {
      gridList: Projects.styles.gridListSm,
      gridCol: 1
    };

    this.state = this.initialSettings;
  }

  componentWillMount() {
    this.calcGrid(Projects.initialWidth);
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.calcGrid());
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  calcGrid(width = window.innerWidth) {
    if (width <= 600) return this.setState({
      ...this.initialSettings
    });

    if (width > 900) return this.setState({
      gridList: Projects.styles.gridListMax,
      gridCol: 3
    });

    return this.setState({
      ...this.initialSettings,
      gridCol: 2
    })
  }

  render() {
    const tiles = Projects.tilesData.map(makeTile);

    return (
      <div style={Projects.styles.root}>
        <h1 style={Projects.styles.title}>Projects and NPM Modules</h1>
        <GridList
          cols={this.state.gridCol}
          cellHeight={180}
          padding={4}
          style={this.state.gridList}
          children={tiles}
        />
      </div>
    );
  }

  static tilesData = [
    {
      img: require('../../../public/img/00-52-29-429_640.jpg'),
      title: 'Breakfast',
      author: 'jill111',
      subtitle: 'node, express, react, redux, jwt',
      featured: true
    },
    {
      img: require('../../../public/img/burger-827309_640.jpg'),
      title: 'Tasty burger',
      subtitle: 'node, express, react, redux, jwt',
      author: 'pashminu',
    },
    {
      img: require('../../../public/img/camera-813814_640.jpg'),
      title: 'Camera',
      subtitle: 'node, express, react, redux, jwt',
      author: 'Danson67',
    },
    {
      img: require('../../../public/img/morning-819362_640.jpg'),
      title: 'Morning',
      subtitle: 'node, express, react, redux, jwt',
      author: 'fancycrave1',
    },
    {
      img: require('../../../public/img/hats-829509_640.jpg'),
      title: 'Hats',
      subtitle: 'node, express, react, redux, jwt',
      author: 'Hans',
    }
  ];

  static styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'white',
      fontFamily: `'Ubuntu', sans-serif`,
    },
    gridListMax: {
      height: 400,
      width: 900,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      overflow: 'hidden',
    },
    gridListSm: {
      width: '90%',
      overflow: 'hidden',
    },
    title: {
      padding: '50px 5%',
      textAlign: 'center'
    }
  };

  static initialWidth = window.innerWidth;
}
export default Projects;
