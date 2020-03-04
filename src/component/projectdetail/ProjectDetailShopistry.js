import React, {Component} from 'react';

class ProjectDetailShopistry extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="project-info col-lg-3 col-sm-12">
              <div>
                <b>Client: </b>
                Human-Computer Interaction: Principles and Design final project
                <div className="space"></div>
                <b>Role: </b>
                User Researcher and Designer, user testing facilitator and
                observer.
                <div className="space"></div>
                <b>Technology: </b>
                Sketch, Invision
                <div className="space"></div>
                <b>Website: </b>
              </div>
            </div>
            <div className="project-description col-lg-9 col-sm-12">
              <p>
                Shopistry is a mobile platform that help mystery shoppers to
                perform the tasks onsite. The goal of the research is to create
                the app is to complete the task during visit without being
                suspicious.
                <div className="space"></div>
                <b>
                  A mystery shopper is given a bunch of question and have to
                  complete it by remembering the situation in the store.
                </b>
                <p className="design-vision">
                  One of biggest challenge faced by a mysterry shopper is lack
                  of the tool to help them to go through all the task list. They
                  could not directly write or capture the store situation since
                  they need to be incognito and behaving like a regular
                  customer. With the course of principle design, we helped the
                  mystery shopper to make a better work situation. We conducted
                  the interview with Daymaker company, the mystery shopper
                  vendor based in Stockholm. The mystery shopper in Daymaker
                  needs to fill in the form after performing the task. Usually,
                  the mystery shopper complete it after visiting which has the
                  possibility to miss the important point during task
                  submission.
                </p>
                <div className="space"></div>
                <b>
                  Other interviews were conducted to people who have the
                  experience as this mysterious visitor.
                </b>
                <p className="ethnographic-observation">
                  The unique things that we found, most of the mystery shoppers
                  are woman with age around 20-30 and having good knowledge with
                  technology. Having these facts, we assume that designing a
                  mobile application will be simpler for them rather than type
                  it somewhere else and the submit in another form after
                  visiting. We assessed important aspect of their tasks,
                  including answering the questions and reporting the situation
                  in form of pictures.
                </p>
                <div className="space"></div>
                <b>User Interface</b>
                <div>
                  <img
                    className="cover"
                    src={require('../../images/shopistry-1.png')}
                    alt="cover-food-bank"
                  />
                </div>
                <p className="user-interface">
                  Since the main task of the user is answering the question, we
                  provide the question task progress bar to fulfill our
                  visibility design principle. This will help the user to
                  understand of the system status. We also implement error
                  prevention in skipping the question feature. This app allows
                  the user to skip the question and with our design, we make
                  sure that they do not need to answer the question if they skip
                  it.
                </p>
                <div className="row ">
                  <div className="col-lg-6">
                    <img
                      className="cover"
                      src={require('../../images/shopistry-2.png')}
                      alt="cover-food-bank"
                    />
                  </div>
                  <div className="col-lg-6">
                    <p className="interview">
                      You want to complete the question, but the shopkeeper
                      approach you. In order to not be suspicious customer, you
                      want to close the application. In Shopistry, we designed
                      the system that the user can go back to their last step.
                      This feature fulfills the heuristic evaluation on user
                      control and freedom.{' '}
                    </p>
                    <p>
                      We also designed the homepage that help the user to get
                      the notification of their task to be complete as soon as
                      possible. This will help the user to minimize their memory
                      load on recalling the task they have to finished.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <p className="interview col-lg-6">
                    I designed transaction list for four different purposes with
                    the same design. All the key informations are put in the
                    list to make easy for the user to see the transaction
                    history. Transaction status is differentiated by three
                    phases, requesting, completed, and declined. The system
                    allows the owner to decline the request as well if suddenly
                    they are changing their mind.
                  </p>
                  <div className="col-lg-6">
                    <img
                      className="cover"
                      src={require('../../images/shopistry-3.png')}
                      alt="cover-food-bank"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      className="cover"
                      src={require('../../images/shopistry-4.png')}
                      alt="cover-food-bank"
                    />
                  </div>
                  <p className="interview col-lg-6">
                    The mysterious shopper should be notify for every system
                    update. One of the system update is a success message when
                    the they are submitting the task. In this success message,
                    we also provide the user a click to action to open their all
                    task progress in order to see the overall project status and
                    get the overview of other project list.
                  </p>
                </div>
                <div className="row">
                  <p className="interview col-lg-6">
                    One mystery shopper can have more than one inprogress task
                    or project to visit different stores. In this page, we let
                    the user knows their whole project status. We have
                    inprogress, submitted, and completed status.
                    <br />
                    1. Inprogress status is project is taken/started but not yet
                    submitted to the system.
                    <br />
                    2. Submitted status is the whole task has been submitted to
                    the system. <br />
                    3. Completed status is the system has received the task and
                    reviewed it. All the payment is done.
                  </p>
                  <div className="col-lg-6">
                    <img
                      className="cover"
                      src={require('../../images/shopistry-5.png')}
                      alt="cover-food-bank"
                    />
                  </div>
                </div>
                <p className="interview">
                  We mentioned the important information in this section, such
                  as deadline, location, project status, and click to action to
                  go to the task. We set the deadline with counting days rather
                  than the explicit date. This form is more understand for them
                  after we conducted the user testing. Providing the calendar
                  date requires them to think again or estimate the time left
                  which requires a lot memory. The store location is created as
                  link that can be opened in google map. This will help the user
                  to go the place without typing it again in map application. We
                  provide the overview of the questions to be answered by the
                  mystery shopper. They can go to the question directly from
                  this page.
                </p>
                <div className="space"></div>
                <b>User Testing</b>
                <p className="interview">
                  In the test plan, we have determined the user group who will
                  be the subject to participate testing the design. We composed
                  the tasks and subtasks to be evaluated by the observer when
                  the user performed the task
                </p>
                <p className="interview">
                  The user that will be tested on is a mystery shopper. A
                  mystery shopper is a person that is supposed to evaluate
                  stores that have a direct customer meeting. The mystery
                  shopper receives tasks by an organization to perform in the
                  store while acting like a normal customer. A mystery shopper’s
                  knowledge of computers and interfaces is varied, however, the
                  mystery shopper must have access to a computer and a phone to
                  be able to perform their evaluation, therefore a mystery
                  shopper should be familiar with interfaces that are presented
                  in such devices. The tasks focus on the most important steps
                  that the user will have to go through during a visit as a
                  mystery shopper. During the test, the user will only get the
                  task description, however, the user will not get any detailed
                  information about how to solve the task. Here are tasks to be
                  performed:
                  <br />
                  1. Check all the assignment In this state, it is assumed that
                  the user has already logged in to the application. The user
                  will be directed to the home screen when open the application.
                  The user can see all assigned tasks for him/her by clicking
                  “view my assignment” button that appears on the home screen.
                  This task also can be performed by clicking on the burger menu
                  and selecting task progress. <br />
                  2. Choose to start the H&M Kista Galleria visit When logged
                  in, the user is presented with a welcome screen. This welcome
                  screen contains the button “View your assignments”. Click on
                  the “View your assignments” button which redirects the user to
                  their listed assignments. <br />
                  3. Answer the questionnaire This is where the user will get
                  the description of the different tasks. The user will be able
                  to input text into a textbox, answer a question with “Yes” or
                  “No”-buttons, take/upload photos, skip a question and notify
                  the company, go to the next or previous task, get an overview
                  of their progress with a progress bar and then finally be able
                  to submit the questionnaire once all the questions have been
                  answered.
                </p>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectDetailShopistry;
