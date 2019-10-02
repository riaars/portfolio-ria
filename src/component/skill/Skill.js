import React, {Component} from 'react';
import './Skill.css';
class Skill extends Component {
  render() {
    return (
      <div className="skill-component row">
        <div className="card skill-card card-body">
          <div className="card-title-bold">Designer</div>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <div className="space"></div>
          <div className="card-sub-title-bold">Things I enjoy designing</div>
          <p>UI, UX, Web, Mobile, Apps</p>
          <div className="space"></div>
          <div className="card-sub-title-bold">Design tools</div>
          <li>Balsamiq</li>
          <li>Sketch</li>
          <li>Invision</li>
          <li>MarvelApp</li>
          <li>Pen and Ppper</li>
        </div>

        <div className="card skill-card card-body">
          <div className="card-title-bold">Front End Developer</div>
          <p>
            like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <div className="space"></div>
          <div className="card-sub-title-bold">Language I speak</div>
          <p>Javascript, C, C++, Java, HTML, CSS</p>
          <div className="space"></div>
          <div className="card-sub-title-bold">Dev tools</div>
          <li>Visual Code</li>
          <li>Sublime</li>
          <li>Git</li>
          <li>Codepan</li>
          <li>Bootstrap</li>
        </div>
      </div>
    );
  }
}

export default Skill;
