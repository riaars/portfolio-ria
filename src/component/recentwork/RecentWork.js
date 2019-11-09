import React, {Component} from 'react';
import './RecentWork.css';
import foodbank from '../../images/foodbank.png';
import bookio from '../../images/bookio.png';
import shopistry from '../../images/shopistry.png';
import harvesthaven from '../../images/harvesthavent.png';
import climbingnets from '../../images/climbing-nets.png';
import findrecipe from '../../images/find-recipe.png';
import weatherforecast from '../../images/weather-forecast.png';
import tapmusic from '../../images/tapmusic.png';
import lyricfinder from '../../images/lyric-finder.png';

import laundrybooking from '../../images/laundrybooking.png';
import profile from '../../images/profile.png';
import {Link, BrowserRouter, Router} from 'react-router-dom';
import ProjectDetail from '../projectdetail/ProjectDetail';
import * as ROUTES from '../../constants/Routes';

class RecentWork extends Component {
  render() {
    return (
      <div>
        <div className="recentwork-title">My recent work</div>
        <div className="recentwork-summary">
          Here are a few recent design projects. Want to see more?Email me!{' '}
          <a href="#">riaratnasari@outlook.com</a>
        </div>
        <div className="recent-work-card">
          <div className="row justify-content-center">
            <div className="card card-work col-lg-3 col-md-3 col-sm-12">
              <img src={foodbank} class="card-img-top" alt="..." />
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
                  class="btn btn-outline-primary btn-radius mt-auto">
                  Visit Work
                </Link>
              </div>
            </div>
            <div className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={bookio} class="card-img-top" alt="..." />
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
                  class="btn btn-outline-primary btn-radius mt-auto">
                  Visit Work
                </Link>
              </div>
            </div>
            <div className="card card-work col-lg-3 col-md-3 col-sm-12 ">
              <img src={shopistry} class="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Shopistry</h5>
                <p className="card-text">
                  Shopistry is a mobile platform to help mystery shoppers to
                  perform the tasks onsite without suspicious.
                </p>
                <div className="space"></div>
                <Link
                  to={ROUTES.PROJECT_DETAIL_SHOPISTRY}
                  class="btn btn-outline-primary btn-radius mt-auto">
                  Visit Work
                </Link>
              </div>
            </div>
            <div className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={harvesthaven} class="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Harvest Haven</h5>
                <div className="space"></div>
                <p className="card-text">
                  Harvest Haven is an agri-tourism platform that enable urban
                  citizen to have farming experiences while traveling.
                </p>
                <div className="space"></div>
                <Link
                  to={ROUTES.PROJECT_DETAIL_HARVEST}
                  class="btn btn-outline-primary btn-radius mt-auto">
                  Visit Work
                </Link>
              </div>
            </div>

            <div className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={climbingnets} class="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Climbing with Light</h5>
                <div className="space"></div>
                <p className="card-text">
                  An interactive climbing nets with light and sound for dark
                  winter playground in Sweden
                </p>
                <div className="space"></div>
                <a
                  href="https://vimeo.com/368869269"
                  class="btn btn-outline-primary btn-radius mt-auto"
                  target="_blank">
                  Visit Work
                </a>
              </div>
            </div>

            <div className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={findrecipe} class="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Find the Recipes</h5>
                <div className="space"></div>
                <p className="card-text">
                  A Website to find the awesome recipes
                </p>
                <div className="space"></div>
                <a
                  href="https://deliciousy.netlify.com//"
                  target="_blank"
                  class="btn btn-outline-primary btn-radius mt-auto">
                  Visit Work
                </a>
              </div>
            </div>

            <div className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={lyricfinder} class="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Song Lyrics</h5>
                <div className="space"></div>
                <p className="card-text">
                  React web application to find the song title based on lyrics
                  and vice versa
                </p>
                <div className="space"></div>
                <a
                  href="https://singsong.netlify.com/"
                  target="_blank"
                  class="btn btn-outline-primary btn-radius mt-auto">
                  Visit Work
                </a>
              </div>
            </div>

            <div className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={tapmusic} class="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Colorful Music</h5>
                <div className="space"></div>
                <p className="card-text">
                  Create a music by typing and selecting the color. Developed by
                  using Vanilla Javascript
                </p>
                <div className="space"></div>
                <a
                  href="https://tapmenow.netlify.com/"
                  target="_blank"
                  class="btn btn-outline-primary btn-radius mt-auto">
                  Visit Work
                </a>
              </div>
            </div>
            <div className="card card-work col-lg-3 col-md-3  col-sm-12">
              <img src={weatherforecast} class="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title title-work">Weather Forecast</h5>
                <div className="space"></div>
                <p className="card-text">
                  A weather prediction developed using Vanilla Javascript
                </p>
                <div className="space"></div>
                <a
                  href="https://weatheri.netlify.com/"
                  target="_blank"
                  class="btn btn-outline-primary btn-radius mt-auto">
                  Visit Work
                </a>
              </div>
            </div>
          </div>

          <div className="space"></div>
          <div className="dribble">
            <a
              href="https://dribbble.com/rrsari"
              class="btn btn-outline-primary btn-radius">
              <i class="fab fa-dribbble space-right" aria-hidden="true"></i>
              See More on Dribble
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentWork;
