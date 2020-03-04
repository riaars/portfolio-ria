import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF);
class Profile extends Component {
  render() {
    return (
      <div style={{marginTop: 100}}>
        <div className="profile-title">Designer and Front-End Developer</div>
        <div className="profile-summary">I design and code beautifully</div>
        <img
          className="foto-profile"
          src={require('../images/profile-ria.jpeg')}
          alt="foto-me"
        />

        <div className="social-media-class">
          <p>
            <button className="btn-social-media">
              <a href="https://www.facebook.com/rrsari25">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media">
              <a href="https://twitter.com/riaa_rs">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media">
              <a href="https://github.com/riaars">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media">
              <a href="https://www.facebook.com/rrsari25">
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media">
              <a href="https://dribbble.com/rrsari">
                <i className="fab fa-dribbble" aria-hidden="true"></i>
              </a>
            </button>
          </p>
        </div>
        <div className="about-me-section">
          <div className="profile-header">
            Hi, I'm Ria. Thank you for visiting.
          </div>
          <div className="profile-intro">
            I have 3+ years of professional experiences in Information and
            Technology field. My expertise including Product Management, UI
            design, UX research, Front-End Development, and Mobile application.
            I enjoy generating new ideas and devising feasible solutions for
            broadly relevant problems. My colleagues would describe me as a
            resourceful individual, self-motivated, and proactive attitude when
            faced adversity.
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
