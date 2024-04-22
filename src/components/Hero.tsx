const Hero = () => {
  return (
    <section className="hero">
      <h1 className="visually-hidden">UNITDEV</h1>
      <div className="hero__container container">
        <h2 className="hero-title">Kelajagingizni UnitDev bilan yarating!</h2>
        <div className="hero-galeries">
          <img
            src="1"
            height="449"
            alt="UNITDEV galery image"
            className="hero-galeries-image"
            title="UNITDEV galery image"
          />
          <ul className="hero-galeries__list">
            <li className="hero-galeries__item">
              <img
                src="1"
                width="198"
                height="198"
                alt="UNITDEV galery image"
                title="UNITDEV galery image"
              />
            </li>
            <li className="hero-galeries__item">
              <img
                src="1"
                width="198"
                height="198"
                alt="UNITDEV galery image"
                title="UNITDEV galery image"
              />
            </li>
            <li className="hero-galeries__item">
              <img
                src="1"
                width="198"
                height="198"
                alt="UNITDEV galery image"
                title="UNITDEV galery image"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
