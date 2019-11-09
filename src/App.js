import React from 'react';
import './App.css';
import Skill from './component/skill/Skill';
import RecentWork from './component/recentwork/RecentWork';
import SocialMedia from './component/socialmedia/SocialMedia';
import Profile from './component/profile/Profile';

function App() {
  return (
    <div className="App" id="#home">
      <Profile />
      <Skill />
      <RecentWork />
      <SocialMedia />
    </div>
  );
}

export default App;
