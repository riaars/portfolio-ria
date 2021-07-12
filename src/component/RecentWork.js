import React, {Component} from 'react';

import foodbank from '../images/foodbank.png';
import bookio from '../images/bookio.png';
import shopistry from '../images/shopistry.png';
import harvesthaven from '../images/harvesthavent.png';
import climbingnets from '../images/climbing-nets-cover.svg';
import findrecipe from '../images/find-recipe.png';
import weatherforecast from '../images/weather-forecast.png';
import tapmusic from '../images/tapmusic.png';
import lyricfinder from '../images/lyric-finder.png';
import {Link} from 'react-router-dom';

class RecentWork extends Component {
  state = {
    currentType: 'All',
    works: [
      {
        id: 1,
        title: 'BookIO',
        cover: bookio,
        descrption:
          'Bookio is a sharing book platform to allow the customer to get, lend, borrow, or give book to someone else in order to maintain sustainability while increasing the literacy.',
        project_link: '/bookio',
        project_web: 'https://bookio-5c798.firebaseapp.com/',
        type: ['All', 'Web Development'],
      },

      {
        id: 5,
        title: 'Climbing with Light',
        cover: climbingnets,
        descrption:
          ' An interactive climbing nets with light and sound for dark winter playground in Sweden.',
        project_link: '/climbing-light',
        project_web: 'https://vimeo.com/368869269',
        type: ['All', 'Physical Interaction'],
      },
      {
        id: 2,
        title: 'Food Sharer',
        cover: foodbank,
        descrption:
          'Foodsharer is a propose solution platform to enable the connectness between food bank staff with charity organization in Sweden to reduce food waste.',
        project_link: '/foodsharer',
        project_web: '#',
        type: ['All', 'Design'],
      },

      {
        id: 3,
        title: 'Shopistry',
        cover: shopistry,
        descrption:
          'Shopistry is a mobile platform to help mystery shoppers to perform the tasks onsite without suspicious.',
        project_link: '/shopistry',
        project_web: '#',
        type: ['All', 'Design'],
      },

      {
        id: 4,
        title: 'Harvest Haven',
        cover: harvesthaven,
        descrption:
          'Harvest Haven is an agri-tourism platform that enable urban citizen to have farming experiences while traveling.',
        project_link: '/harvest',
        project_web: '#',
        type: ['All', 'Web Development'],
      },

      {
        id: 6,
        title: 'Find Lyrics',
        cover: lyricfinder,
        descrption:
          'React web application to find the song title based on lyrics and vice versa',
        project_link: '',
        project_web: 'https://singsong.netlify.com/',
        type: ['All', 'Web Development'],
      },

      {
        id: 7,
        title: 'Tap Music',
        cover: tapmusic,
        descrption:
          'Create a music by typing and selecting the color. Developed by using Vanilla Javascript',
        project_link: '',
        project_web: 'https://tapmenow.netlify.com/',
        type: ['All', 'Web Development'],
      },

      {
        id: 8,
        title: 'Weather Forecast',
        cover: weatherforecast,
        descrption: 'A weather prediction developed using Vanilla Javascript',
        project_link: '',
        project_web: 'https://weatheri.netlify.com/',
        type: ['All', 'Web Development'],
      },

      {
        id: 9,
        title: 'Find Recipe',
        cover: findrecipe,
        descrption: 'What to cook today? Find the recipe here',
        project_link: '',
        project_web: 'https://deliciousy.netlify.com/',
        type: ['All', 'Web Development'],
      },
    ],
  };

  renderItemWork = (item) => {
    return (
      <div
        data-aos="zoom-in-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="card card-work col-lg-3 col-md-3 col-sm-12">
        <img src={item.cover} className="card-img-top" alt="..." />

        <div className="card-body d-flex flex-column">
          <h2 className="card-title title-work">{item.title}</h2>
          <p className="card-text">{item.descrption}</p>
          <div className="space"></div>

          <div class="row mt-auto ml-auto mr-auto">
            <a
              href={item.project_web}
              target="_blank"
              className="btn btn-action btn-radius m-1 ">
              Visit Website
            </a>

            <Link
              to={item.project_link}
              className="btn btn-action btn-radius m-1">
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  };

  filterItem = (type) => {
    console.log(type);
    this.setState({currentType: type});
    let itemList = this.state.works.filter((result) => result.type === type);
    console.log(itemList);
  };

  selectedMenu = (menu) => {
    if (this.state.currentType === menu) {
      return 'btn selected-menu';
    } else return 'btn not-selected-menu';
  };
  render() {
    console.log(this.state);
    return (
      <div id="portfolio">
        <div className="recentwork-title">My Portfolio</div>
        <div className="recentwork-summary">
          Here are a few recent design projects. Want to see more? Email me!{' '}
          <a href="#" className="email">
            riaratnasari@outlook.com
          </a>
        </div>
        <div className="menu">
          <div className="row center-items">
            <button
              class={this.selectedMenu('All')}
              name="All"
              onClick={this.filterItem.bind(this, 'All')}>
              All
            </button>
            <button
              className={this.selectedMenu('Design')}
              onClick={this.filterItem.bind(this, 'Design')}>
              Design
            </button>

            <button
              className={this.selectedMenu('Web Development')}
              onClick={this.filterItem.bind(this, 'Web Development')}>
              Software Development
            </button>

            <button
              className={this.selectedMenu('Physical Interaction')}
              onClick={this.filterItem.bind(this, 'Physical Interaction')}>
              Physical Interaction
            </button>
          </div>
        </div>
        <div className="recent-work-card">
          <div className="row center-items">
            {this.state.works
              .filter((result) => result.type.includes(this.state.currentType))
              .map((item) => this.renderItemWork(item))}
          </div>
        </div>
        <div className="space"></div>

        <div
          data-aos="fade-up-right"
          data-aos-delay="50"
          data-aos-duration="2000"
          className="github">
          <a
            href="https://github.com/riaars"
            className="btn btn-action-fill btn-radius">
            <i
              className="fab fa-github space-right"
              aria-hidden="true"
              style={{marginRight: '10px'}}></i>
            See more on Github
          </a>
        </div>
      </div>
    );
  }
}

export default RecentWork;
