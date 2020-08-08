import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF);

class SocialMedia extends Component {
  render() {
    return (
      <footer className="contact-me">
        <div className="contact-me-header">
          Living, learning, and leveling up
          <div></div>
          one day at a time.
        </div>

        <div className="social-media-class">
          <p>
            <button className="btn-social-media-white">
              <a href="https://www.facebook.com/rrsari25">
                <i
                  className="fab fa-linkedin icon-color"
                  aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media-white">
              <a href="https://twitter.com/riaa_rs">
                <i className="fab fa-twitter icon-color" aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media-white">
              <a href="https://github.com/riaars">
                <i className="fab fa-github icon-color" aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media-white">
              <a href="https://www.facebook.com/rrsari25">
                <i
                  className="fab fa-facebook icon-color"
                  aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media-white">
              <a href="https://dribbble.com/rrsari">
                <i
                  className="fab fa-dribbble icon-color"
                  aria-hidden="true"></i>
              </a>
            </button>
          </p>
        </div>
      </footer>
    );
  }
}

export default SocialMedia;
