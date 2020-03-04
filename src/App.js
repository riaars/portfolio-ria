import React from 'react';
import './App.css';
import './scss/style.css';
import Skill from './component/Skill';
import RecentWork from './component/RecentWork';
import SocialMedia from './component/SocialMedia';
import Profile from './component/Profile';

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
