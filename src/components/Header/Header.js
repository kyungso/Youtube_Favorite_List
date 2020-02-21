import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.scss';

import logo from 'logo.png';

const Header = ({ location: { pathname } }) => {
  const [handleScroll, setHandleScroll] = useState("");
  useEffect(() => {
    window.addEventListener('scroll', () => setHandleScroll(window.scrollY > 50 ? "white" : ""));
  },[]);
  
  return (
    <header className={`header ${handleScroll}` }>
      <div><Link to="/"><img src={logo} alt="logo"/></Link></div>
      <div>
        <Link to="/list" className="nav_link"
              style={{ borderBottom: (pathname === "/list" ? `3px solid #DE3A6C` : `3px solid transparent`)}}
        >나의 목록</Link>
        </div>
    </header>
  );
};

export default withRouter(Header);