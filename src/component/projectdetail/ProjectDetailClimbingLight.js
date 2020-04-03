import React, {Component} from 'react';
import Paper from '../../assets/climbing-light-paper.pdf';

class ProjectDetailClimbingLight extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="project-info col-lg-3 col-sm-12">
              <div>
                <b>Client: </b>
                Physical Interaction Design
                <div className="space"></div>
                <b>Role: </b>
                User Researcher
                <div className="space"></div>
                <b>Technology: </b>
                RGB LEDs, Flex Sensor, Arduino Uno
                <div className="space"></div>
                <div>
                  <a href={Paper} target="_blank" rel="noopener noreferrer">
                    Download Paper
                  </a>
                </div>
                <div className="space"></div>
                <b>Video</b>
                <iframe
                  className="video-climbing-net"
                  src="https://player.vimeo.com/video/368869269"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen></iframe>
              </div>
            </div>
            <div className="project-description col-lg-9 col-sm-12">
              <p>
                Climbing with light is an interactive climbing nets combining
                light and sound to support dark winter playground in Sweden
                <div className="space"></div>
                <div className="detail-header">
                  Sweden, with its location in the north, is well known for its
                  dark winter which usually lasted for more than five months
                  from around November/December to March/February every year.
                </div>
                <p className="detail-content">
                  After school, children do not have many options to play
                  outdoors. With this condition, most children will stay at home
                  preferred to play with the computer. This condition makes them
                  rarely exercise. This research will try to find the
                  opportunities and challenges in designing the playground that
                  is suitable for the dark-winter condition while considering
                  playfulness to support social interaction among children. The
                  object study in designing winter playground is focused on the
                  climbing-nets.
                </p>
                <div className="space"></div>
                <div className="detail-header">Design Concepts</div>
                <p className="detail-content">
                  We created three models of interaction. The first was the idle
                  mode when no interaction happened. Idle mode aims to inform
                  potential players that the climbing-nets offers an uncommon
                  thing to attract children to try it. The second is the
                  single-player mode. When the interaction happened, LEDs will
                  light up and certain music according to the location will be
                  played. These two will stop when the interaction is over. The
                  last is the multi-player interaction when more than one
                  interaction happened at the same time and producing mixed
                  music
                </p>
                <div>
                  <img
                    className="cover"
                    src={require('../../images/climbing-net-design.svg')}
                    alt="climbing-net-design"
                  />
                </div>
                <div className="space"></div>
                <div className="detail-header">Design Challenges</div>
                <div className="detail-content">
                  We identified two main challenges in designing interactive
                  climbing-nets. The first challenge is avoiding the cacophony
                  for multi-player model and producing nice music combination.
                  The second challenge is finding suitable materials that will
                  work in cold winter (expectedto work below -20C).
                </div>
                <div className="space"></div>
                <div className="detail-header">Development Phase</div>
                <div>
                  <div className="detail-header">1. Small Prototype</div>
                  <div className="detail-content">
                    At the beginning of development, we created a small
                    prototype to visualize how the final climbing-net will look
                    in a small dimension and to see whether the design concept
                    is possible. We created a half-sphere shape structure to put
                    climbing-nets from a piece of wood with 26 cm diameter base
                    and 9 cm diameter top. The nets consist of 4 rows and eight
                    columns created from the fishing string.
                  </div>
                  <div className="project-image">
                    <img
                      className="cover"
                      src={require('../../images/small-prototype.svg')}
                      alt="small prototype "
                    />
                    <p> Small Prototype</p>
                  </div>

                  <div className="detail-header">2. Final Prototype</div>
                  <div className="detail-content">
                    We chose the transparent tube with 10mm diameters as the
                    packaging to protect electronic components from the extreme
                    weather conditions. With its flexibility characteristics,
                    the tube will not limit the user movement while emitting the
                    light from the LEDs. We decided to change the capacitive
                    sensors since it will not be working in winter due to sensor
                    affordance. During winter, most people playing in the
                    playground will use the gloves. The gloves from fabric
                    materials cannot trigger the capacitive sensor. We explored
                    three alternatives of replacement capacitive sensors: flex
                    sensor; pressure resistor; button. We conducted the
                    performance test on them and inserted them to our chosen
                    tubes. The force sensor is not working well inside the nets
                    while the button required high force to push them.
                    Therefore, we decided to use the flex sensors. Flex sensor
                    supports the bending but not very sensitive on small
                    movement. Also, with its small width dimension, flex sensors
                    can be inserted into the tube easily. At a later step, we
                    inserted RGB LED strips (WS2812b) to the tube. We programmed
                    LED strips differently on each row with different colour set
                    up. We connected the LED strips and sensors output with
                    wires and connected them to Arduino Uno pins. We programmed
                    the controller to read the bending sensor that will trigger
                    the music and light up the LEDs. When more than one rows are
                    bending together, the LEDs for those rows will light up and
                    the music coming from each row will be mixed. We also
                    programmed 16 random running individual LEDs to light up
                    when there is no interaction occurs. These random LEDs will
                    stop when the user starts interacting with the nets.
                  </div>
                  <div className="project-image">
                    <img
                      className="cover"
                      src={require('../../images/final-prototype.svg')}
                      alt="final prototype "
                    />
                    <p> Final Prototype testing in the playground</p>
                  </div>

                  <div className="space"></div>
                  <div className="detail-header">Evaluation</div>
                  <div className="detail-content">
                    We brought our product to do user testing in a real outdoor
                    playground. However, since winter still in a few months, we
                    could not test our product with a real winter environment.
                    Alternatively, we decided to go in a dark situation and
                    tested it after sunset. Before testing, we have surveyed
                    nearby playground that has the climbing-nets in Ekoparken
                    Lekplats and measure the dimension as our product size
                    references. We built two pieces of the human-scale
                    prototypes that resembled the actual of climbing-nets that
                    can be tied into the traditional climbing-nets. We observed
                    that at the beginning, the children did not understand what
                    happened when they climbed up the nets. After they stepped
                    their foot on the nets, the music started playing, and the
                    LED lights up. At the second attempt, they tried to jump on
                    the rope tried to step on different rows to see whether the
                    music or the light colour would be different. Our fragile
                    installation did not support their enthusiasm to play with
                    our nets. After several times, the tube did not go back to
                    the initial position. Therefore the music and LEDs kept
                    going on. We figured it out that putting flexible tubes
                    which tend to bend to the rope was not a right decision. For
                    future work, we plan to change it to more flexible
                    materials.
                  </div>
                  <div className="project-image">
                    <img
                      className="cover"
                      src={require('../../images/climbingnet-testing.svg')}
                      alt="evaluation prototype "
                    />
                    <p> Physical Interaction Exhibition</p>
                  </div>
                  <div className="space"></div>
                  <div className="detail-header">Lesson Learned</div>
                  <div className="detail-content ml-4">
                    <ol>
                      <li>
                        Material exploration is essential. Material exploration
                        should be done earlier since it will affect the whole
                        development process.
                      </li>
                      <li>
                        The idle mode plays a significant role, inviting people
                        to play. Without implementing this idle mode, our
                        climbing-nets would be just an ordinary darknet that was
                        not attractive enough.
                      </li>
                      <li>
                        The importance of music integrated with climbingnets to
                        support the interactivity. People kept coming to our
                        exhibition booth when they overheard the music produced
                        by someone else is playing with our climbing-nets. The
                        users were also interested in the mix music produced
                        when playing alone or together.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="space"></div>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectDetailClimbingLight;
