/* eslint-disable react/style-prop-object */
import "../App.css";
import img1 from "../assets/images/The-Book-Club.gif";
import img2 from "../assets/images/NoteTakerDemo.gif";
import img3 from "../assets/images/RefactoringChallenge.gif";
import img4 from "../assets/images/CodingFactsQuiz.gif";
import img5 from "../assets/images/DayScheduler.gif";
import img6 from "../assets/images/gaminggodspic.png";

export default function Projects() {
  return (
    <div>
      <div className="container">
        <h2 className="projects-header text-center">Projects</h2>
      </div>
      <div className="projects row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 my-auto mx-auto mt-4">
        <div className="col">
          <div className="card">
            <a
              href="https://ajsherrill2.github.io/Project-1-Runtime-Terror/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img1} className="card-img-top" alt="BookClubgif" />
            </a>
            <div className="card-body">
              <h5 className="card-title" id="proj-title">
                Book Club Application
              </h5>
              <p>
                <button
                  className="button btn btn-project"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  More Info!
                </button>
              </p>
              <div className="collapse" id="collapse1">
                <div className="card card-body">
                  This application allows you to look up any book and get the
                  price for that book! The app also gives you a rating review
                  for your book of choice!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a
              href="https://my-note-taker-mharrison.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img2} className="card-img-top" alt="BookClubgif" />
            </a>
            <div className="card-body">
              <h5 className="card-title" id="proj-title">
                Note Taker App
              </h5>
              <p>
                <button
                  className="button btn btn-project"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  More Info!
                </button>
              </p>
              <div className="collapse" id="collapse2">
                <div className="card card-body" id="projectCard-body">
                  This application allows a user to write, save, and delete
                  notes!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a
              href="https://mharrisonutcoding.github.io/Refactoring_Challenge_Week1/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img3} className="card-img-top" alt="BookClubgif" />
            </a>
            <div className="card-body">
              <h5 className="card-title" id="proj-title">
                Refactoring Code Challenge
              </h5>
              <p>
                <button
                  className="button btn btn-project"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  More Info!
                </button>
              </p>
              <div className="collapse" id="collapse3">
                <div className="card card-body">
                  This application is just a showcase of my ability to use CSS
                  to style a webpage according to specific guidelines!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a
              href="https://mharrisonutcoding.github.io/Coding_Facts_Quiz/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img4} className="card-img-top" alt="BookClubgif" />
            </a>
            <div className="card-body">
              <h5 className="card-title" id="proj-title">
                Coding Facts Quiz
              </h5>
              <p>
                <button
                  className="button btn btn-project"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  More Info!
                </button>
              </p>
              <div className="collapse" id="collapse4">
                <div className="card card-body">
                  Simple quiz application that takes asks a user questions, and
                  returns an alert box with either a correct or incorrect
                  message!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a
              href="https://mharrisonutcoding.github.io/Day-Scheduler-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img5} className="card-img-top" alt="BookClubgif" />
            </a>
            <div className="card-body">
              <h5 className="card-title" id="proj-title">
                Day Scheduler
              </h5>
              <p>
                <button
                  className="button btn btn-project"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  More Info!
                </button>
              </p>
              <div className="collapse" id="collapse5">
                <div className="card card-body">
                  This application allows a user to write notes out for
                  different time slots of a common workday! The time slots
                  respond to the time of day!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a
              href="https://found-404.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img6} className="card-img-top" alt="BookClubgif" />
            </a>
            <div className="card-body">
              <h5 className="card-title" id="proj-title">
                GameGod Website
              </h5>
              <p>
                <button
                  className="button btn btn-project"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6"
                >
                  More Info!
                </button>
              </p>
              <div className="collapse" id="collapse6">
                <div className="card card-body">
                  Our project is a full stack application that allows users to
                  browse video games and add them to their cart. Then users will
                  be able to checkout and purchase the games.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
