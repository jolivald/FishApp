import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dropdown = useRef(null);
  const handleClick = event => {
    dropdown.current.classList.toggle('is-active');
  };
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-3">
          <img src="http://127.0.0.1:8000/images/logo.png" />&nbsp;FishApp
        </Link>

        <a role="button" onClick={handleClick}
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div ref={dropdown} id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Galerie
          </Link>
          <Link to="/add-post" className="navbar-item">
            Poster
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;