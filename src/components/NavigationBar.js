import React from 'react';
import logoPic from '../assets/images/yout-logo-pic.jpg'
import logoLong from '../assets/images/your-logo-here-long.png'
import logoSquare from '../assets/images/your-logo-here-square.png'
import { Nav } from 'react-bootstrap';

export const NavigationBar = () => (
  <div>
    <div className="toolbar" role="banner">
      <img className="#lab-logo"
        src={logoPic}
        width="60"
        alt="logoPic"
      />
      <Nav.Item><Nav.Link href="/">Generic Application - FrontEnd React Example</Nav.Link></Nav.Item>
      <span></span>
      <div className="spacer"></div>
      <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
      <a aria-label="LongLogo" target="_blank" rel="noreferrer" href="http://www.google.com.br/" title="LongLogo">
        <img
          src={logoLong}
          width="280"
          alt="logoLong"
        />
      </a>
      <a aria-label="logoSquare" target="_blank" rel="noreferrer" href="https://localhost:3000/" title="logoSquare">
        <img
          src={logoSquare}
          width="40"
          alt="logoSquare"
        />
      </a>
    </div>
  </div>

)