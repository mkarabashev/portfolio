import React from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Description from 'material-ui/svg-icons/action/description';
import TechChip from '../TechChip';

import './ProjectCard.css';

const ProjectCard = () => (
  <article className="card">
    <CardMedia overlayContainerStyle={{background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"}} overlay={<CardTitle title="REST API microservices" subtitle="node, express, react, redux, jwt"/>}>
      <img style={{width: "100%"}} src="http://blog.jewilson.com/wp-content/uploads/2013/11/New-Website-Snapshot-1024x655.jpg" />
    </CardMedia>
    <CardActions>
      <FlatButton label={<i className ="devicon-github-plain" />} style={{color: "white"}}/>
      <FlatButton label="LINK" style={{color: "white"}}/>
    </CardActions>
    <CardText style={{color: "white"}}>
      <List style={{color: "white"}}>
        <ListItem style={{color: "white"}} leftIcon={<Description color="white" />}>A website where aspiring coders write about themselves</ListItem>
      </List>
    </CardText>
  </article>
);

export default ProjectCard;
