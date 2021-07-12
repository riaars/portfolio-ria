import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Resume from '../assets/resume1.pdf';
import './Header.css';
import * as ROUTES from '../constants/Routes';
class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <Link className="ria-brand" to={ROUTES.HOME}>
          <h1> Ria Ratna Sari</h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#about-me" className="mdl-navigation__link ">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a href="#portfolio" className=" mdl-navigation__link">
                Portfolio
              </a>
            </li>

            <li class="nav-item">
              <a
                className="mdl-navigation__link "
                href="https://riaratnaasari.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer">
                Personal Blog
              </a>
            </li>

            <li class="nav-item">
              <a
                className="mdl-navigation__link "
                href={Resume}
                target="_blank"
                rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
