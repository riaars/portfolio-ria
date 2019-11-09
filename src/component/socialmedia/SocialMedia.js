import React, {Component} from 'react';
import './SocialMedia.css';
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
            <button className="btn-social-media">
              <a href="https://www.facebook.com/rrsari25">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media">
              <a href="https://twitter.com/riaa_rs">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media">
              <a href="https://github.com/riaars">
                <i class="fab fa-github" aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media">
              <a href="https://www.facebook.com/rrsari25">
                <i class="fab fa-facebook" aria-hidden="true"></i>
              </a>
            </button>
            <button className="btn-social-media">
              <a href="https://dribbble.com/rrsari">
                <i class="fab fa-dribbble" aria-hidden="true"></i>
              </a>
            </button>
          </p>
        </div>
      </footer>
    );
  }
}

export default SocialMedia;
