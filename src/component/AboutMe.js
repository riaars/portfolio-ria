import React, {Component} from 'react';

class AboutMe extends Component {
  render() {
    return (
      <section id="about-me">
        <div className="about-me-section">
          <div className="profile-header">What I do</div>
          <div className="row">
            <div className="profile-intro">
              I have 4 years of professional experiences in Information and
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
                className=" skill-card card-body col-sm-12 col-md-3 col-lg-3">
                <div className="icon-skill">
                  <i class="fas fa-laptop-code fa-3x icon-color"></i>
                </div>
                <div className="card-title-bold">Software Engineering</div>
                <p className="skill-description">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser. When building the product, I like to
                  see the result immediately. That's why I really passionate
                  with front-end and mobile development.
                </p>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="skill-card card-body col-sm-12 col-md-3 col-lg-3">
                <div className="icon-skill">
                  <i class="fas fa-magic fa-3x icon-color"></i>
                </div>
                <div className="card-title-bold">UI/UX Design</div>
                <p className="skill-description">
                  With a master degree in Human-Computer Interaction and Design,
                  I growth my passion to be a user centric mindset that delivers
                  good user experience products. I value simple content
                  structure, clean design patterns, and thoughtful interactions
                  that will solve the user's problem.
                </p>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="skill-card card-body col-sm-12 col-md-3 col-lg-3">
                <div className="icon-skill">
                  <i class="fas fa-rocket fa-3x icon-color"></i>
                </div>
                <div className="card-title-bold">Product Management</div>
                <p className="skill-description">
                  I have a proven passion for developing innovative solutions
                  that bridge the cutting-edge technology to solve the
                  customer’s problem. Has been working in product management for
                  2 years in large e-commerce with more than 50 million users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
