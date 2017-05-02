import React from 'react';
import { Element } from 'react-scroll';

import './Home.css';

const Home = () => (
  <Element name="home" id="home" className="pagetop table">
    <div className="table-cell table-cell--right">
      <div className="cell-child title-box">
        <h1>Maxim Karabashev</h1>
        <h4><i>Hi, I'm a full stack developer emphasizing clean design and a secure user experience</i></h4>
        <div className="action-box clearfix">
          <h5 className="action-box__btn">Come check my work</h5>
        </div>
      </div>
    </div>
  </Element>
);

export default Home;
