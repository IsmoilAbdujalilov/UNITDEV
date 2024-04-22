const Step = () => {
  return (
    <section className="step">
      <div className="step__container container">
        <img
          src="1"
          width="525"
          height="529"
          alt="UNITDEV step image"
          title="UNITDEV step image"
        />
        <div className="step__content">
          <h2 className="step__content-top-title">
            Biz bilan oldinga yana bir qadam
          </h2>
          <h3 className="step__content-center-title">
            <span>UnitDev</span> - zamonaviy kasblar biz bilan
          </h3>
          <ul className="step-texts">
            <li className="step-texts__item">
              <p className="step-texts__item-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </li>
            <li className="step-texts__item">
              <p className="step-texts__item-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Step;
