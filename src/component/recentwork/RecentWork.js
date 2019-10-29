import React, {Component} from 'react';
import './RecentWork.css';
import foodbank from '../../images/foodbank.png';
import bookio from '../../images/bookio.png';
import shopistry from '../../images/shopistry.png';
import harvesthaven from '../../images/harvesthavent.png';
import laundrybooking from '../../images/laundrybooking.png';
import profile from '../../images/profile.png';
import {Link, BrowserRouter, Router} from 'react-router-dom';
import ProjectDetail from '../projectdetail/ProjectDetail';
class RecentWork extends Component {
  render() {
    return (
      <div className="container ">
        <div className="recentwork-title">My recent work</div>
        <div className="recentwork-summary">
          Here are a few recent design projects. Want to see more?{' '}
          <a href="#">Email me!</a>
        </div>

        <div className="recent-work-card row">
          <div className="card card-work">
            <img src={foodbank} class="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title title-work">FoodSharer</h2>
              <p className="card-text">
                Foodsharer is a propose solution platform to enable the
                connectness between food bank staff with charity organization in
                Sweden to reduce food waste.
              </p>
              <div className="space"></div>
              <Link
                to="/project/foodsharer"
                class="btn btn-outline-primary btn-radius">
                Visit Work
              </Link>
            </div>
          </div>
          <div className="card card-work">
            <img src={bookio} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title title-work">Bookio</h5>
              <p className="card-text">
                Bookio is a sharing book platform to allow the customer to get,
                lend, borrow, or give book to someone else in order to maintain
                sustainability while increasing the literacy.
              </p>
              <div className="space"></div>
              <a href="#" class="btn btn-outline-primary btn-radius">
                Visit Work
              </a>
            </div>
          </div>
          <div className="card card-work">
            <img src={shopistry} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title title-work">Shopistry</h5>
              <p className="card-text">
                Shopistry is a mobile platform to help mystery shoppers to
                perform the tasks onsite without suspicious.
              </p>
              <div className="space"></div>
              <a href="#" class="btn btn-outline-primary btn-radius">
                Visit Work
              </a>
            </div>
          </div>
          <div className="card card-work">
            <img src={harvesthaven} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title title-work">Harvest Haven</h5>
              <div className="space"></div>
              <p className="card-text">
                Harvest Haven is an agri-tourism platform that enable urban
                citizen to have farming experiences while traveling.
              </p>
              <div className="space"></div>
              <a href="#" class="btn btn-outline-primary btn-radius">
                Visit Work
              </a>
            </div>
          </div>
        </div>
        <div className="space"></div>
        <a
          href="https://dribbble.com/rrsari"
          class="btn btn-outline-primary btn-radius">
          <i class="fab fa-dribbble space-right" aria-hidden="true"></i>
          See More on Dribble
        </a>
      </div>
    );
  }
}

export default RecentWork;
