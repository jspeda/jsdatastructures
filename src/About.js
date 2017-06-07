import React, { Component } from 'react';
import Header from './Header';
import './About.css';

const About = () => (
  <div>
    <Header />
    <div className="about-container">
      <div className="about-head">ABOUT</div>
      <div className="about-description">
        JavaScript computer science is a project documenting
        computer science concepts, data structures, and algorithms from the perspective
        of a career changer with no background in the field.
      </div>
      <div className="about-description">
        The goal of this project is to document my progress and provide a resource
        to those who are looking to learn about some of these concepts in a less
        intimidating manner than one might find in a textbook or course lecture.
      </div>
    </div>
  </div>
);

export default About;
