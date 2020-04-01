import React, {Component} from 'react';

import foodbank from '../images/foodbank.png';
import bookio from '../images/bookio.png';
import shopistry from '../images/shopistry.png';
import harvesthaven from '../images/harvesthavent.png';
import climbingnets from '../images/climbing-nets.png';
import findrecipe from '../images/find-recipe.png';
import weatherforecast from '../images/weather-forecast.png';
import tapmusic from '../images/tapmusic.png';
import lyricfinder from '../images/lyric-finder.png';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/Routes';

class RecentWork extends Component {
  render() {
    return (
      <div id="portfolio">
        <div className="recentwork-title">Portfolio</div>
        <div className="recentwork-summary">
          Here are a few recent design projects. Want to see more? Email me!{' '}
          <a href="#">riaratnasari@outlook.com</a>
        </div>
        <div className="recent-work-card ">
          <div className="row justify-content-center">
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="card card-work col-lg-3 col-md-3 col-sm-12">
              <img src={foodbank} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h2 className="card-title title-work">FoodSharer</h2>
                <p className="card-text">
                  Foodsharer is a propose solution platform to enable the
                  connectness between food bank staff with charity organization
                  in Sweden to reduce food waste.
                </p>
                <div className="space"></div>
                <Link
                  to={ROUTES.PROJECT_DETAIL_FOODSHARER}
                  className="btn btn-outline-warning btn-radius mt-auto">
                  Read More
                </Link>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={bookio} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Bookio</h5>
                <p className="card-text">
                  Bookio is a sharing book platform to allow the customer to
                  get, lend, borrow, or give book to someone else in order to
                  maintain sustainability while increasing the literacy.
                </p>
                <div className="space"></div>

                <Link
                  to={ROUTES.PROJECT_DETAIL_BOOKIO}
                  className="btn btn-outline-warning btn-radius mt-auto ">
                  Read More
                </Link>
                {/* <a
                  href="https://vimeo.com/368869269"
                  className="btn btn-outline-warning btn-radius mt-auto"
                  target="_blank"
                  rel="noopener noreferrer">
                  Visit Website
                </a> */}
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="card card-work col-lg-3 col-md-3 col-sm-12 ">
              <img src={shopistry} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Shopistry</h5>
                <p className="card-text">
                  Shopistry is a mobile platform to help mystery shoppers to
                  perform the tasks onsite without suspicious.
                </p>
                <div className="space"></div>
                <Link
                  to={ROUTES.PROJECT_DETAIL_SHOPISTRY}
                  className="btn btn-outline-warning btn-radius mt-auto">
                  Read More
                </Link>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={harvesthaven} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Harvest Haven</h5>

                <p className="card-text">
                  Harvest Haven is an agri-tourism platform that enable urban
                  citizen to have farming experiences while traveling.
                </p>
                <div className="space"></div>

                <Link
                  to={ROUTES.PROJECT_DETAIL_HARVEST}
                  className="btn btn-outline-warning btn-radius mt-auto">
                  Read More
                </Link>
                {/* <a
                  href="https://vimeo.com/368869269"
                  className="btn btn-outline-warning btn-radius mt-auto "
                  target="_blank"
                  rel="noopener noreferrer">
                  Visit Website
                </a> */}
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={climbingnets} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Climbing with Light</h5>

                <p className="card-text">
                  An interactive climbing nets with light and sound for dark
                  winter playground in Sweden
                </p>
                <div className="space"></div>

                <Link
                  to={ROUTES.PROJECT_DETAIL_CLIMBING}
                  className="btn btn-outline-warning btn-radius mt-auto ">
                  Read More
                </Link>
                {/* <a
                  href="https://vimeo.com/368869269"
                  className="btn btn-outline-warning btn-radius mt-auto"
                  target="_blank"
                  rel="noopener noreferrer">
                  Watch Video
                </a> */}
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={findrecipe} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Find the Recipes</h5>

                <p className="card-text">
                  A Website to find the awesome recipes
                </p>
                <div className="space"></div>
                <a
                  href="https://deliciousy.netlify.com//"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning btn-radius mt-auto">
                  Read More
                </a>
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={lyricfinder} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Song Lyrics</h5>

                <p className="card-text">
                  React web application to find the song title based on lyrics
                  and vice versa
                </p>
                <div className="space"></div>
                <a
                  href="https://singsong.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning btn-radius mt-auto">
                  Read More
                </a>
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={tapmusic} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Colorful Music</h5>

                <p className="card-text">
                  Create a music by typing and selecting the color. Developed by
                  using Vanilla Javascript
                </p>
                <div className="space"></div>
                <a
                  href="https://tapmenow.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning btn-radius mt-auto">
                  Read More
                </a>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={weatherforecast} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Weather Forecast</h5>

                <p className="card-text">
                  A weather prediction developed using Vanilla Javascript
                </p>
                <div className="space"></div>
                <a
                  href="https://weatheri.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning btn-radius mt-auto">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="space"></div>
          {/* <div className="dribble">
            <a
              href="https://dribbble.com/rrsari"
              className="btn btn-outline-primary btn-radius">
              <i
                className="fab fa-dribbble space-right"
                aria-hidden="true"
                style={{marginRight: '10px'}}></i>
              See More on Dribbble
            </a>
          </div> */}

          <div
            data-aos="fade-up-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            className="github">
            <a
              href="https://github.com/riaars"
              className="btn btn-outline-warning btn-radius">
              <i
                className="fab fa-github space-right"
                aria-hidden="true"
                style={{marginRight: '10px'}}></i>
              See More on Github
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentWork;
