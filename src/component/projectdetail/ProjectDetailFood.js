import React, {Component} from './node_modules/react';

class ProjectDetailFood extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="project-info col-lg-3 col-sm-12">
              <div>
                <b>Client: </b>
                Methodology and Interaction Design Final Project
                <div className="space"></div>
                <b>Role: </b>
                User Researcher
                <div className="space"></div>
                <b>Technology: </b>
                Sketch, Invision
                <div className="space"></div>
                <b>Website: </b>
              </div>
            </div>
            <div className="project-description col-lg-9 col-sm-12">
              <p>
                Foodsharer is a propose solution platform to enable the
                connectness between food bank staff with charity organization in
                Sweden to reduce food waste.
                <div className="space"></div>
                <b>Design Vision</b>
                <p className="design-vision">
                  The initial idea of this project is how could create the
                  sustainability environment. The theme of project was given in
                  the course. After having short of discussion in group of 4, we
                  decided to take about the waste management issue. We discussed
                  the waste type that we could explore more, until we visited
                  the groceries. We want to create an online platform that
                  accomodate the best user experience that could minimize the
                  food waste.
                </p>
                <div className="space"></div>
                <b>Ethnographic Observation</b>
                <p className="ethnographic-observation">
                  Groceries store was one of the largest source of food waste.
                  They have the product that will be expired anytime. By
                  visiting 3 different large groceries in Stockholm, ICA, Lidl,
                  and Willys we understood that Stockholm has a great and
                  running-well food collector, named Matbanken that will
                  received the food which was almost expired.
                </p>
                <div className="space"></div>
                <b>Interview</b>
                <p className="interview">
                  We visited groceries and Matbanken to dig down the further
                  information. During the interview we found that there is other
                  party, charity organization that also receive the food from
                  the Matbanken. Based on the interview, we got this
                  relationship between these three parties.
                </p>
                <div className="space"></div>
                <b>Understanding Design Dillemas</b>
                <p className="design-dillemas">
                  There were a lot of problems in the current system. The
                  Matbanken was not only the receiver of food from groceries but
                  also as the temporary food before it was thrown to the food
                  waste. The current platform did not allow the charity
                  organization or the food bank customer to get to know the
                  information of food that will be expired soon. The charity
                  organization would get notification by phone after the
                  Matbanken received the food grom groceries. However, they did
                  not truly know what was existed in the Matbanken. They have
                  they system but not all integrated. Some procedure like
                  deciding time to pick, choose the food to take still using
                  manual by phone call.
                </p>
                <div className="space"></div>
                <b>Lo-Fi Design</b>
                <div>
                  <img
                    className="cover"
                    src={require('../../images/lofi-foodbank.png')}
                    alt="cover-food-bank"
                  />
                </div>
                <p className="lofi-design">
                  We created the low fidelity designs using papers after
                  understanding the features and functions that we might need in
                  the platform. Everyone was coming up with each of design
                  ideas, that later on we tested by ourselves until we found the
                  best usability design. After agreeing with the design, we
                  created another paper prototype to test it with another people
                  outside the team.
                </p>
                <div className="space"></div>
                <b>Hi-Fi Design</b>
                <div>
                  <img
                    className="cover"
                    src={require('../../images/hifi-foodbank.png')}
                    alt="cover-food-bank"
                  />
                </div>
                <div className="space"></div>
                <b>Usability Testing</b>
                <p className="usability-testing">
                  After finishing the high-fidelity prototype, we tested it with
                  the user which has similar persona with our target users.
                </p>
                <div>
                  <img
                    className="cover"
                    src={require('../../images/testing-foodbank.png')}
                    alt="cover-food-bank"
                  />
                </div>
                <div className="space"></div>
                <b>Design Challenge</b>
                <p className="design-challenge">
                  At the beginning, we wanted to solve all the issues with one
                  single platform. However, it did not work well. We figured it
                  out that to solve the problem, we need to focus on one
                  problem. In this design solution, we created the platform,
                  e-commerce a like, that will be used by charity organization
                  and the Matbanken customers to make an order . The charity
                  organization did not need any phone call to check the food
                  availability and set the appointment to pick up the food.
                  Meanwhile, the customer did not need to wait for hours on
                  quueu to bring back the cheap food home. Therefore, it could
                  solve one of the issue in Matbanken, reducing the food
                  quantities that become the food waste. We also suggested the
                  imporvement of the current website of Matbanken. They had the
                  platform to record the incoming products, however the existing
                  dashboard did not have the product tracking by expiry dates.
                  By having the expiry date column and also created the “will
                  expire today food” we can help them to manage the storage
                  easily. Another challenge we had was the difficulty to test to
                  the Matbanken staff, that we then found a way by testing to
                  the people which have similar daily jobs, like factory staff
                  and student which has experience before.
                </p>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectDetailFood;
