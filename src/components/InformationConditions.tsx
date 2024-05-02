import { Condition1, Condition2, Condition3 } from "assets/images/svg";

const InformationConditions = () => {
  return (
    <section className="information-conditions">
      <div className="container">
        <div className="information-conditions__content">
          <h2 className="information-conditions__content-title">
            Bizning <span>kurslarimiz</span> sizni kutmoqda!
          </h2>
          <p className="information-conditions__content-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>

        <ul className="information-conditions__list">
          <li className="information-conditions__item">
            <span className="information-conditions__bg">
              <img
                src={Condition1}
                alt="malakali mutahasislar icon"
                className="information-conditions__bg-image"
              />
            </span>
            <h2 className="information-conditions__item-title">
              Ma’lakali mutaxassislar
            </h2>
            <p className="information-conditions__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </li>
          <li className="information-conditions__item">
            <span className="information-conditions__bg">
              <img
                src={Condition2}
                alt="Qulay sharoit icon"
                className="information-conditions__bg-image"
              />
            </span>
            <h2 className="information-conditions__item-title">
              Qulay sharoit
            </h2>
            <p className="information-conditions__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </li>
          <li className="information-conditions__item">
            <span className="information-conditions__bg">
              <img
                src={Condition3}
                alt="Sifatli ta’lim icon"
                className="information-conditions__bg-image"
              />
            </span>
            <h2 className="information-conditions__item-title">
              Sifatli ta’lim
            </h2>
            <p className="information-conditions__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default InformationConditions;
