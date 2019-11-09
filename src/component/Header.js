import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Resume from '../assets/resume-new.pdf';
import './Header.css';
import * as ROUTES from '../constants/Routes';
import LOGO from '../images/logo.png';
class Header extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  openPDF = () => {
    window.open('../assets/resume.pdf');
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mdl-layout__header-row top-bar fixed-top">
        <div className="container">
          {/* <a className="navbar-brand btn" href="#">
            <img className="logo" src={LOGO} alt="logo" />
          </a> */}
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
                className="pumpsoft mdl-navigation__link header-item"
                to={ROUTES.HOME}
                style={{padding: '20px'}}>
                Homepage
              </Link>
              <a
                className="mdl-navigation__link header-item"
                href="https://riaratnaasari.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{padding: '20px'}}>
                My Thoughts
              </a>

              <a
                className=" mdl-navigation__link header-item"
                href={Resume}
                onClick="openPDF()"
                style={{padding: '20px'}}>
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
