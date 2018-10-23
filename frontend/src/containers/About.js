import React from 'react';
import {
  Link
} from 'react-router-dom';
import image1 from '../assets/about-campaignmanager.jpg';
import image2 from '../assets/about-mapper.jpg';

const About = props => (
  <div className="About">
    <header className="header--internal ">
      <div className="row">
        <h1 className="header--xlarge">About</h1>
      </div>
    </header>
    <section className="text-body section-first--sm">
      <div className="row">
        <p className="text-body--large">{'Scoreboard is a site that provides insight into the ' + props.projectName + ' ecosystem, making the users not only more informed but more efficient.'}</p>
        <div className="clearfix about--block">
          <p style={{float: "left"}} className="text-body--med width--sm">For campaign managers, Scoreboard provides an overview of what’s happening on the system, and also a way to get detailed information on individual mappers or campaigns. Discover all active <Link to="/campaigns">campaigns.</Link></p>
          <Link to="/campaigns"><img className="img-about1" style={{float: "right"}} src={image1} alt="Individual project page screenshots" /></Link>
        </div>
        <div className="clearfix about--block">
          <Link to="/users"><img className="img-about2" style={{float: "left"}} src={image2} alt="Screenshot for an individual mappers page" /></Link>
          <p style={{float: "left"}} className="text-body--med width--sm">For mappers, scoreboard provides motivation. Through their profile page, Scoreboard keeps track of users edits, awarding them badges as they progress. Find your profile or those of other mappers <Link to="/users">here.</Link></p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
