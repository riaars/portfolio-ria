import React, {Component} from 'react';
import './profile.css';

class Profile extends Component {
  render() {
    return (
      <div style={{marginTop: 100}}>
        <div className="profile-title">Designer and Front-End Developer</div>
        <div className="profile-summary">I design and code beautifully</div>
        <img
          className="foto-profile"
          src={require('../../images/foto-me.jpg')}
          alt="foto-me"
        />
        <div className="about-me-section">
          <div className="profile-header">Hi, I'm Ria. Nice to meet you.</div>
          <div className="profile-intro">
            I have 3+ years of professional experiences in Information and
            Technology field. My expertise including Product Management, UI
            design, UX research, Front-End Development, and Mobile application.
            I enjoy generating new ideas and devising feasible solutions for
            broadly relevant problems. My colleagues would describe me as a
            resourceful individual, self-motivated, and proactive attitude when
            faced adversity. Currently, I am seeking opportunities for a master
            thesis or internship position in UI/UX Designer or Front-End
            Development to obtain my degree.
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
