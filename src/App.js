import React from 'react';
import './App.css';
import Header from './component/Header';
import Skill from './component/skill/Skill';
import RecentWork from './component/recentwork/RecentWork';
import SocialMedia from './component/socialmedia/SocialMedia';
import Profile from './component/profile/Profile';

function App() {
  return (
    <div className="App">
      <Header />

      <Profile />
      <Skill />
      <RecentWork />
      <SocialMedia />
    </div>
  );
}

export default App;
