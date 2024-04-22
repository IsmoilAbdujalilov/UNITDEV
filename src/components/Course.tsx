const Course = () => {
  return (
    <section className="course">
      <div className="bg-dark">
        <div className="course__container container">
          <h2 className="course-title">Kurslar</h2>
          <ul className="course-boxes">
            <li className="course-box">
              <div className="course-box__content">
                <span className="course-box__content-format">
                  WEB-DLRip 1080p
                </span>
                <h3 className="course-box__content-title">Programming</h3>
                <h3 className="course-box__content-regular-title">
                  Dasturlash haqida
                </h3>
                <p className="course-box__content-text">
                  Java Script, Phyton, Lorovel va boshqa darsturlash tillari
                  haqida dastlabki tushunchalar
                </p>
                <footer className="course-box__footer">
                  <a href="index.html">
                    <img
                      src="1"
                      height="36"
                      width="135"
                      alt="UNITDEV"
                      title="UNITDEV logo"
                      className="course-box__footer-logo"
                    />
                  </a>
                  <a
                    href="#"
                    role="button"
                    className="course-box__footer-information"
                  >
                    Ma’lumot
                  </a>
                </footer>
              </div>
            </li>
            <li className="course-box">
              <div className="course-box__content">
                <span className="course-box__content-format"> 4K FULL-HD </span>
                <h3 className="course-box__content-title">grafik dizayn</h3>
                {/* <h3 className="course-box__content-regular-title">
                      Dasturlash haqida
                    </h3> 
                <p className="course-box__content-text">
                      Java Script, Phyton, Lorovel va boshqa darsturlash tillari
                      haqida dastlabki tushunchalar
              </p>  */}
                <footer className="course-box__footer">
                  <a href="index.html">
                    <img
                      src="1"
                      height="36"
                      width="135"
                      alt="UNITDEV"
                      title="UNITDEV logo"
                      className="course-box__footer-logo"
                    />
                  </a>
                  <a
                    href="#"
                    role="button"
                    className="course-box__footer-information"
                  >
                    Ma’lumot
                  </a>
                </footer>
              </div>
            </li>
            <li className="course-box">
              <div className="course-box__content">
                <span className="course-box__content-format"> 4K FULL-HD </span>
                <h3 className="course-box__content-title">Web dizayn</h3>
                {/* <h3 className="course-box__content-regular-title">
                      Dasturlash haqida
                    </h3>
                    <p className="course-box__content-text">
                      Java Script, Phyton, Lorovel va boshqa darsturlash tillari
                      haqida dastlabki tushunchalar
                    </p>  */}
                <footer className="course-box__footer">
                  <a href="index.html">
                    <img
                      src="1"
                      height="36"
                      width="135"
                      alt="UNITDEV"
                      title="UNITDEV logo"
                      className="course-box__footer-logo"
                    />
                  </a>
                  <a
                    href="#"
                    role="button"
                    className="course-box__footer-information"
                  >
                    Ma’lumot
                  </a>
                </footer>
              </div>
            </li>
            <li className="course-box">
              <div className="course-box__content">
                {/* <span className="course-box__content-format">
                      WEB-DLRip 1080p
                    </span>
              <h3 className="course-box__content-title">marketing</h3>
              <h3 className="course-box__content-regular-title">
                      Dasturlash haqida
                    </h3>
                    <p className="course-box__content-text">
                      Java Script, Phyton, Lorovel va boshqa darsturlash tillari
                      haqida dastlabki tushunchalar
                    </p>
              */}
                <footer className="course-box__footer">
                  <a href="index.html">
                    <img
                      src="1"
                      height="36"
                      width="135"
                      alt="UNITDEV"
                      title="UNITDEV logo"
                      className="course-box__footer-logo"
                    />
                  </a>
                  <a
                    href="#"
                    role="button"
                    className="course-box__footer-information"
                  >
                    Ma’lumot
                  </a>
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
