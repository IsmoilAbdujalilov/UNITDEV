import {
  HeroBackgroundImage,
  HeroImage1,
  HeroImage2,
  HeroImage3,
} from "assets/images/jpg";
import { memo } from "react";

const Hero = memo(() => {
  return (
    <section className="hero">
      <h1 className="visually-hidden">UNITDEV</h1>
      <div className="hero__container">
        <div className="hero__content">
          <div className="container">
            <h2 className="hero__content-title">
              Kelajagingizni <span>UnitDev</span> bilan yarating!
            </h2>
          </div>
        </div>
        <div className="hero-galeries">
          <div
            className="hero-galeries-image"
            style={{ backgroundImage: `url(${HeroBackgroundImage})` }}
          >
            <div className="container">
              <ul className="hero-galeries__list">
                <li className="hero-galeries__item">
                  <img
                    width="198"
                    height="198"
                    src={HeroImage1}
                    alt="UNITDEV galery image"
                    title="UNITDEV galery image"
                    className="hero-galeries__item-img"
                  />
                </li>
                <li className="hero-galeries__item">
                  <img
                    width="198"
                    height="198"
                    src={HeroImage2}
                    alt="UNITDEV galery image"
                    title="UNITDEV galery image"
                    className="hero-galeries__item-img"
                  />
                </li>
                <li className="hero-galeries__item">
                  <img
                    width="198"
                    height="198"
                    src={HeroImage3}
                    alt="UNITDEV galery image"
                    title="UNITDEV galery image"
                    className="hero-galeries__item-img"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
