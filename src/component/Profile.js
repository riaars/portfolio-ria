import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="row top-profile">
          <div className="col-sm-12 col-lg-5">
            <img
              className="foto-profile"
              src={require('../images/myphoto.svg')}
              alt="foto-me"
            />
          </div>
          <div className="profile col-sm-12 col-lg-5">
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
              Passionate Software Engineer
            </div>

            <div className="social-media-class">
              <p>
                <button
                  data-aos="fade-up-right"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  className="btn-social-media">
                  <a
                    href="https://www.linkedin.com/in/riaratnasari/"
                    target="blank">
                    <i
                      className="fab fa-linkedin"
                      style={{color: '#ffffff'}}
                      aria-hidden="true"></i>
                  </a>
                </button>
                <button
                  data-aos="fade-up-right"
                  data-aos-delay="400"
                  data-aos-duration="800"
                  className="btn-social-media">
                  <a href="https://github.com/riaars" target="blank">
                    <i
                      className="fab fa-github"
                      style={{color: '#ffffff'}}
                      aria-hidden="true"></i>
                  </a>
                </button>

                <button
                  data-aos="fade-up-right"
                  data-aos-delay="600"
                  data-aos-duration="800"
                  className="btn-social-media">
                  <a href="https://dribbble.com/rrsari" target="blank">
                    <i
                      className="fab fa-dribbble"
                      style={{color: '#ffffff'}}
                      aria-hidden="true"></i>
                  </a>
                </button>
                <button
                  data-aos="fade-up-right"
                  data-aos-delay="800"
                  data-aos-duration="800"
                  className="btn-social-media">
                  <a href="https://www.facebook.com/rrsari25" target="blank">
                    <i
                      className="fab fa-facebook"
                      style={{color: '#ffffff'}}
                      aria-hidden="true"></i>
                  </a>
                </button>

                <button
                  data-aos="fade-up-right"
                  data-aos-delay="1000"
                  data-aos-duration="800"
                  className="btn-social-media">
                  <a href="https://twitter.com/riaa_rs" target="blank">
                    <i
                      className="fab fa-twitter"
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
