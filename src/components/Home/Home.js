import React from 'react';
import { Element } from 'react-scroll';

import './Home.css';

const Home = () => (
  <Element name="home" className="pagetop">
    <section id="home">
      <h1>Hi,</h1>
      <h1>My name is Maxim Karabashev</h1>
      <h2>I'm an aspiring full stack developer</h2>
    </section>
  </Element>
);

export default Home;
