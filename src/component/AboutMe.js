import React, {Component} from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div id="about-me">
        <div className="about-me-section">
          <div className="profile-header">About Me</div>
          <div className="about-me row">
            <div className="profile-intro">
              I have 3+ years of professional experiences in Information and
              Technology field. My expertise including Product Management, UI
              design, UX research, Front-End Development, and Mobile
              application. I enjoy generating new ideas and devising feasible
              solutions for broadly relevant problems. My colleagues would
              describe me as a resourceful individual, self-motivated, and
              proactive attitude when faced adversity.
            </div>

            <div className="skill-component row  justify-content-center">
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="card skill-card card-body col-sm-4 col-md-4 col-lg-4">
                <div className="icon-skill">
                  <i class="fas fa-magic fa-3x" style={{color: '#f5a524'}}></i>
                </div>
                <div className="card-title-bold">Designer</div>
                <p>
                  I value simple content structure, clean design patterns, and
                  thoughtful interactions.
                </p>

                <div className="card-sub-title-bold">
                  Things I enjoy designing
                </div>
                <p>UI, UX, Web, Mobile, Apps</p>

                <div className="card-sub-title-bold">Design tools</div>
                <li>Balsamiq</li>
                <li>Sketch</li>
                <li>Invision</li>
                <li>MarvelApp</li>
                <li>Pen and Paper</li>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="card skill-card card-body col-sm-4 col-md-4 col-lg-4">
                <div className="icon-skill">
                  <i
                    class="fas fa-laptop-code fa-3x"
                    style={{color: '#f5a524'}}></i>
                </div>
                <div className="card-title-bold">Front End Developer</div>
                <p>
                  like to code things from scratch, and enjoy bringing ideas to
                  life in the browser.
                </p>

                <div className="card-sub-title-bold ">Language I speak</div>
                <p>Javascript, C, C++, Java, HTML, CSS</p>

                <div className="card-sub-title-bold">Dev tools</div>
                <li>Visual Code</li>
                <li>Sublime</li>
                <li>Git</li>
                <li>Codepan</li>
                <li>Bootstrap</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
