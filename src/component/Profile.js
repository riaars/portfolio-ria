import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF);
class Profile extends Component {
  render() {
    return (
      <div>
        <div className="top-profile row">
          <img
            className="foto-profile"
            src={require('../images/ria.svg')}
            alt="foto-me"
          />
          <div className="profile">
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="profile-title">
              RIA RATNA SARI
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="profile-summary">
              passionate designer and developer
            </div>

            <div className="social-media-class">
              <p>
                <button
                  data-aos="fade-up-right"
                  data-aos-delay="1000"
                  data-aos-duration="800"
                  className="btn-social-media">
                  <a href="https://github.com/riaars">
                    <i
                      className="fab fa-github"
                      style={{color: '#ffffff'}}
                      aria-hidden="true"></i>
                  </a>
                </button>
                <button
                  data-aos="fade-up-right"
                  data-aos-delay="1300"
                  data-aos-duration="800"
                  className="btn-social-media">
                  <a href="https://www.facebook.com/rrsari25">
                    <i
                      className="fab fa-facebook"
                      style={{color: '#ffffff'}}
                      aria-hidden="true"></i>
                  </a>
                </button>
                <button
                  data-aos="fade-up-right"
                  data-aos-delay="1600"
                  data-aos-duration="800"
                  className="btn-social-media">
                  <a href="https://dribbble.com/rrsari">
                    <i
                      className="fab fa-dribbble"
                      style={{color: '#ffffff'}}
                      aria-hidden="true"></i>
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
