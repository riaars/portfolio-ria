import React, {Component} from 'react';

class ProjectDetailBookio extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="project-info col-lg-3 col-sm-12">
              <div>
                <b>Client: </b>
                Interaction Programming and the Dynamic Web Final Project KTH
                Royal Institute of Technology
                <div className="space"></div>
                <b>Role: </b>
                User Research, prototyping, UI Design, and Front End engineer.
                <div className="space"></div>
                <b>Technology: </b>
                Sketch, Invision
                <div className="space"></div>
                <b>Website: </b>
              </div>
            </div>
            <div className="project-description col-lg-9 col-sm-12">
              <p>
                BOOKIO is a leading book sharing platform that connects the
                people who want to give or lend their books away to the people
                who want to read a book without buying it. The app goal is to
                contribute to a sustainable environment while improving the
                world's literacy.
                <div className="space"></div>
                <b>
                  Some people want to get a free book while others want to find
                  a way to donate a book when its too many book need to relocate
                </b>
                <p className="design-vision">
                  BOOKIO project is started by gathering the user needs of
                  having a book. Some of people prefer to use a digital book,
                  but most of them still prefer an actual book. After reading a
                  book, the owner just kept the book in the shelf. A little
                  percentage of them will re-read the same book again.
                  Meanwhile, the other people who want to read the same book
                  have to go to library or even purchase. Most of them would be
                  happy if they can borrow or get the book from others.
                </p>
                <div className="space"></div>
                <b>
                  BOOKIO allows the user to get the book for free, borrow the
                  book, give the book or lend the book to other.
                </b>
                <p className="ethnographic-observation">
                  To redefine the architecture of the app, we asked our users to
                  define what are some of the most important questions that come
                  to mind about their 1. Which book category that they prefer to
                  read, digital of physical book? 2. What are they doing with
                  their physical book after finishing the reading? 3. How did
                  they get the book? Purchasing new book or borrowing or
                  purchasing the second-hand book? From series of user research
                  and timeline estimation, we decided to create the website
                  application that can be run in both desktop and mobile
                  platform. In the future, we will develop mobile application
                  version for both Android and IOS.
                </p>
                <div className="space"></div>
                <b>User Interface</b>
                <p className="interview">
                  Designing interface are done with 3 times of iterations. First
                  and second iteration were evaluated with the people in the
                  project, meanwhile the last iteration was conducted to
                  potential users outside the team.
                </p>
                <div>
                  <img
                    className="cover"
                    src={require('../../images/bookio-1.png')}
                    alt="cover-food-bank"
                  />
                </div>
                <p className="interview">
                  In designing the product, we divided the book into two
                  categories, give away or borrow book. Some people we
                  interviewed want to give the book to other or just lend it
                  until a certain time. In the homepage, the user can see the
                  list of available books and see the rating and distance for
                  each book that will make it easier to find the book.
                </p>
                <div>
                  <img
                    className="cover"
                    src={require('../../images/bookio-2.png')}
                    alt="cover-food-bank"
                  />
                </div>
                <p className="interview">
                  Book detail offers information about the book put by the owner
                  including a glimpse of book synopsis. The user request the
                  book from the owner and waiting for approval. We also put the
                  owner address however it won’t show any detail location until
                  the owner approved the request. The user can be an owner and
                  vice versa. With one account, they also can publish their book
                  to the BOOKIO website by simply fill in the required
                  information. In order to help the user, the title field is
                  auto filling. By putting some keywords, the system will
                  suggest the suitable title. It also happen with the author.
                  Category field is a dropdown menu for give away and to lend
                  category. We also let the owner to put the location by typing
                  the address or simply click the pin point on Google map.
                </p>
                <div>
                  <img
                    className="cover"
                    src={require('../../images/bookio-3.png')}
                    alt="cover-food-bank"
                  />
                </div>
                <p className="interview">
                  I designed transaction list for four different purposes with
                  the same design. All the key informations are put in the list
                  to make easy for the user to see the transaction history.
                  Transaction status is differentiated by three phases,
                  requesting, completed, and declined. The system allows the
                  owner to decline the request as well if suddenly they are
                  changing their mind.
                </p>
                <div>
                  <img
                    className="cover"
                    src={require('../../images/bookio-4.png')}
                    alt="cover-food-bank"
                  />
                </div>
                <p className="interview">
                  Before starting to use the website, we provide a landing page
                  that will describe about the product and how to use the
                  website. We want to let the user understand the company goals,
                  product benefit, and how the system works.
                </p>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectDetailBookio;
