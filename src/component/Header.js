import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Resume from '../assets/resume1.pdf';
import './Header.css';
import * as ROUTES from '../constants/Routes';
class Header extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mdl-layout__header-row top-bar fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mdl-navigation header-list">
              <Link
                className=" mdl-navigation__link header-item"
                to={ROUTES.HOME}>
                Homepage
              </Link>

              <a
                href="#portfolio"
                className=" mdl-navigation__link header-item">
                Portfolio
              </a>

              <a href="#about-me" className=" mdl-navigation__link header-item">
                About Me
              </a>

              <a
                className="mdl-navigation__link header-item"
                href="https://riaratnaasari.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer">
                Personal Blog
              </a>

              <a
                className="mdl-navigation__link header-item"
                href={Resume}
                target="_blank"
                rel="noopener noreferrer">
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
