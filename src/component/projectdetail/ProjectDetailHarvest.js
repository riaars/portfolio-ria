import React, {Component} from './node_modules/react';

class ProjectDetailHarvest extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="project-info col-lg-3 col-sm-12">
              <div>
                <b>Client: </b>
                Business Development Lab of Entrepreneurship Engineers
                <div className="space"></div>
                <b>Role: </b>
                User Researcher and Designer, and Front-End Developer
                <div className="space"></div>
                <b>Technology: </b>
                Sketch, Invision
                <div className="space"></div>
                <b>Website: </b>
              </div>
            </div>
            <div className="project-description col-lg-9 col-sm-12">
              <p>
                Harvest Haven is agri-tourism platform that allows the farmers
                to advertise their farming experiences to farming tourist
                enthusiasts.
                <div className="space"></div>
                <b>
                  City life is exhausting and people want to do take a break to
                  relax. Visiting the famous cities is no longer fun if most
                  people will do the same.
                </b>
                <b>Design Vision</b>
                <p className="design-vision">
                  Harvest Haven has vision to create a new style of traveling
                  while improving the agriculture knowledge of the urban citizen
                  which is decreasing from time to time. Meanwhile helping the
                  tourism, we also create the impact to the farmers by
                  generating additional income.
                </p>
                <div className="space"></div>
                <b>Interview</b>
                <p className="ethnographic-observation">
                  By conducting the interview to relevant target user, 78% would
                  like to have different traveling experiences. They would like
                  to pay the service that offers agritourism experience.
                </p>
                <div className="space"></div>
                <b>Understanding Design Dillemas</b>
                <p className="interview">
                  In order to have the farming experiences, not limited to fruit
                  picking or harvesting, there is a design problem that farmers
                  need to estimate the duration of the process. We would not let
                  the farmer and tourist feel dissapointed with the
                  unpredicatble duration. Therefore, we set the timeline when
                  the certain event is available. In one farmland, there will be
                  more than one farming step that can book by the tourist.
                  Another design dillema is the language barrier. We gave the
                  solution by offering two platforms, farmer and tourist.
                  However, the farmer living in non-english speaker country
                  might have a language barrier on understanding the platform
                  and all the procedure in it. By providing the language
                  translator, it will be easier for both parties to communicate.
                </p>
                <b>High Fidelity Prototype</b>
                <b>Tourist Application</b>
                <div>
                  <img
                    className="cover"
                    src={require('../../images/harvest-1.png')}
                    alt="cover-food-bank"
                  />
                </div>
                <b>Farmer Application</b>
                <div>
                  <img
                    className="cover"
                    src={require('../../images/harvest-2.png')}
                    alt="cover-food-bank"
                  />
                </div>
                <b>Usability Testing</b>
                <p className="interview">
                  We conducted the usability testing to our target users. One of
                  the challenge is testing to the farmer. Most of them are
                  around 40-50 and not used to mobile application. They even
                  thought that the application was a live application instead of
                  demo prototype.
                </p>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectDetailHarvest;
