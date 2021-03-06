import React from 'react';
import './App.css';
import './scss/style.css';
import Skill from './component/Skill';
import RecentWork from './component/RecentWork';
import SocialMedia from './component/SocialMedia';
import Profile from './component/Profile';
import AboutMe from './component/AboutMe';

function App() {
  return (
    <div className="App" id="#home">
      <Profile />
      <AboutMe />
      <RecentWork />
      <Skill />
    </div>
  );
}

export default App;
