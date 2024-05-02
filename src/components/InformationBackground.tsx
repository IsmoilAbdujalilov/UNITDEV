import { HakkerBackgroundImage } from "assets/images/jpg/hero";
import { Link } from "react-router-dom";

const InformationBackground = () => {
  return (
    <section
      className="information-hero"
      style={{ backgroundImage: `url(${HakkerBackgroundImage})` }}
    >
      <div className="container">
        <div className="information-hero__content">
          <h1 className="information-hero__content-heading">Dasturlash</h1>
          <p className="information-hero__content-text">
            Java Script, Phyton, Lorovel va boshqa darsturlash tillari haqida
            dastlabki tushunchalar
          </p>
        </div>

        <ul className="information-hero__list">
          <li className="information-hero__item">
            <h2 className="information-hero__item-key">pg:</h2>
            <h3 className="information-hero__item-value">12+</h3>
          </li>
          <li className="information-hero__item">
            <h2 className="information-hero__item-key">Darslari soni:</h2>
            <h3 className="information-hero__item-value">28</h3>
          </li>
        </ul>

        <Link to="/" className="information-hero-link">
          Kursga yozilish
        </Link>
      </div>
    </section>
  );
};

export default InformationBackground;
