import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
      <div className="header">
        <div className="title">
          <Link to="/">javascript computer science</Link>
        </div>
        <div className="data-structures">
          <Link to="/data-structures">data structures</Link>
        </div>
        <div className="algorithms">
          <Link to="/algorithms">algorithms</Link>
        </div>
        <div className="about">
          <Link to="about">about</Link>
        </div>
      </div>
)

export default Header;
