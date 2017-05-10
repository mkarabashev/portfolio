import React from 'react';
import { Element } from 'react-scroll';
import FlatButton from 'material-ui/FlatButton';

import ProjectCard from '../ProjectCard';
import TechChip from '../TechChip';
import './Projects.css';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Code from 'material-ui/svg-icons/action/code';
import Link from 'material-ui/svg-icons/content/link';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '50px'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'white',
    textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
  },
};

const tilesData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRC7vi76oeE7H1vUdjIFXjvkxk7zRErTmYGEQbpJdqMKsyJKp',
    title: 'Breakfast',
    subtitle: 'node, express, react, redux, jwt',
    author: 'jill111',
  },
  {
    img: 'http://averita.com/static/images/masthead-home.jpg',
    title: 'Tasty burger',
    subtitle: 'node, express, react, redux, jwt',
    author: 'pashminu',
  },
  {
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFD4WvExTvIJkF4S_ERKIA2Hk0QwW_xN_6-1GcTxxJEFqAZIKy3w',
    title: 'Camera',
    subtitle: 'node, express, react, redux, jwt',
    author: 'Danson67',
  }
];

const Projects = () => (
  <Element name="projects" id="projects" className="pagetop">
    <h2 style={{margin: "50px 0", color: "white"}}>Full Stack Projects and NPM Modules</h2>
    <div style={styles.root}>
      <GridList style={styles.gridList} padding={100}>
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            actionIcon={<div><IconButton><Link color="#AEEA00" /></IconButton><IconButton><Code color="#AEEA00" /></IconButton></div>}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            subtitle={tile.subtitle}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
    <div style={styles.root}>
      <GridList style={styles.gridList} padding={100}>
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            actionIcon={<div><IconButton><Link color="#AEEA00" /></IconButton><IconButton><Code color="#AEEA00" /></IconButton></div>}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            subtitle={tile.subtitle}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
  </Element>
);

export default Projects;
