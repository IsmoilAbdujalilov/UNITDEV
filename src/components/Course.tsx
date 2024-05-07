import { Link } from "react-router-dom";
import { UnitDevFooterIntro } from "assets/images/svg";
import {
  CourseImage1,
  CourseImage2,
  CourseImage3,
  CourseImage4,
} from "assets/images/png";

const Course = () => {
  return (
    <section className="course" id="courses">
      <div className="bg-dark">
        <div className="course__container container">
          <h2 className="course-title">Kurslar</h2>
          <ul className="course-boxes">
            <li
              className="course-box"
              style={{
                backgroundImage: `url(${CourseImage1})`,
              }}
            >
              <div className="course-box__content">
                <span className="course-box__content-format">
                  WEB-DLRip 1080p
                </span>
                <div className="course-box__padding">
                  <h3 className="course-box__content-title">Programming</h3>
                  <h3 className="course-box__content-regular-title">
                    Dasturlash haqida
                  </h3>
                  <p className="course-box__content-text">
                    Java Script, Phyton, Lorovel va boshqa darsturlash tillari
                    haqida dastlabki tushunchalar
                  </p>
                </div>

                <footer className="course-box__footer">
                  <div className="course-box__padding">
                    <a href="index.html">
                      <img
                        height="36"
                        width="135"
                        alt="UNITDEV"
                        src={UnitDevFooterIntro}
                        title="UNITDEV logo"
                        className="course-box__footer-logo"
                      />
                    </a>
                  </div>

                  <Link
                    role="button"
                    to="/pages/information/1"
                    className="course-box__footer-information"
                  >
                    Ma’lumot
                  </Link>
                </footer>
              </div>
            </li>
            <li
              className="course-box"
              style={{ backgroundImage: `url(${CourseImage2})` }}
            >
              <div className="course-box__content">
                <span className="course-box__content-format"> 4K FULL-HD </span>

                <div className="course-box-small-padding">
                  <h3 className="course-box__content-title">grafik dizayn</h3>
                </div>

                <footer className="course-box__footer">
                  <div className="course-box-small-padding">
                    <a href="index.html">
                      <img
                        width="75"
                        height="20"
                        alt="UNITDEV"
                        title="UNITDEV logo"
                        src={UnitDevFooterIntro}
                        className="course-box__footer-logo"
                      />
                    </a>
                  </div>
                  <Link
                    role="button"
                    to="/pages/information/2"
                    className="course-box__footer-information"
                  >
                    Ma’lumot
                  </Link>
                </footer>
              </div>
            </li>

            <li
              className="course-box"
              style={{ backgroundImage: `url(${CourseImage3})` }}
            >
              <div className="course-box__content">
                <span className="course-box__content-format"> 4K FULL-HD </span>
                <div className="course-box-small-padding">
                  <h3 className="course-box__content-title">Web dizayn</h3>
                </div>

                <footer className="course-box__footer">
                  <div className="course-box-small-padding">
                    <a href="index.html">
                      <img
                        width="75"
                        height="20"
                        alt="UNITDEV"
                        title="UNITDEV logo"
                        src={UnitDevFooterIntro}
                        className="course-box__footer-logo"
                      />
                    </a>
                  </div>

                  <Link
                    role="button"
                    to="/pages/information/3"
                    className="course-box__footer-information"
                  >
                    Ma’lumot
                  </Link>
                </footer>
              </div>
            </li>
            <li
              className="course-box"
              style={{ backgroundImage: `url(${CourseImage4})` }}
            >
              <div className="course-box__content">
                <div className="course-box__padding">
                  <h3 className="course-box__content-title">marketing</h3>
                </div>

                <footer className="course-box__footer">
                  <div className="course-box__padding">
                    <a href="index.html">
                      <img
                        height="36"
                        width="135"
                        alt="UNITDEV"
                        title="UNITDEV logo"
                        src={UnitDevFooterIntro}
                        className="course-box__footer-logo"
                      />
                    </a>
                  </div>

                  <Link
                    role="button"
                    to="/pages/information/4"
                    className="course-box__footer-information"
                  >
                    Ma’lumot
                  </Link>
                </footer>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Course;
