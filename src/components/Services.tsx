import { services1, services2, services3, services4 } from "assets/images/svg";
import { services5, services6, services7, services8, services9 } from "assets/images/svg/services";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__content">
          <h2 className="services__content-title">
            Bizning <span>UnitDev</span> jamoamiz xizmatlari
          </h2>
          <p className="services__content-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <ul className="services__list">
          <li className="services__item">
            <span className="services__square">
              <img
                width={40}
                height={40}
                alt="web site"
                src={services1}
                className="services__square-icon"
              />
            </span>
            <h3 className="services__item-title">
              Web saytlarni ishlab chiqish
            </h3>
            <p className="services__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </li>
          <li className="services__item">
            <span className="services__square">
              <img
                width={40}
                height={40}
                alt="web site"
                src={services2}
                className="services__square-icon"
              />
            </span>
            <h3 className="services__item-title">
              Biznes jarayonlar auditi va UX tahlili
            </h3>
            <p className="services__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </li>
          <li className="services__item">
            <span className="services__square">
              <img
                width={40}
                height={40}
                alt="web site"
                src={services3}
                className="services__square-icon"
              />
            </span>
            <h3 className="services__item-title">
              Mobil ilovalar va web interfeyslar dizayni
            </h3>
            <p className="services__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </li>
          <li className="services__item">
            <span className="services__square">
              <img
                width={40}
                height={40}
                alt="web site"
                src={services4}
                className="services__square-icon"
              />
            </span>
            <h3 className="services__item-title">
              Loyihalashtirish va tizimlashtirilgan tahlil
            </h3>
            <p className="services__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </li>
          <li className="services__item">
            <span className="services__square">
              <img
                width={40}
                height={40}
                alt="web site"
                src={services5}
                className="services__square-icon"
              />
            </span>
            <h3 className="services__item-title">
              Biznes jarayonlar avtomatizatsiyasi uchun ERP, CRM tizimlar
            </h3>
            <p className="services__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </li>
          <li className="services__item">
            <span className="services__square">
              <img
                width={40}
                height={40}
                alt="web site"
                src={services6}
                className="services__square-icon"
              />
            </span>
            <h3 className="services__item-title">
              Media platformalar yaratish
            </h3>
            <p className="services__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </li>
          <li className="services__item">
            <span className="services__square">
              <img
                width={40}
                height={40}
                alt="web site"
                src={services7}
                className="services__square-icon"
              />
            </span>
            <h3 className="services__item-title">Mobil ilovalar yaratish</h3>
            <p className="services__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </li>
          <li className="services__item">
            <span className="services__square">
              <img
                width={40}
                height={40}
                alt="web site"
                src={services8}
                className="services__square-icon"
              />
            </span>
            <h3 className="services__item-title">
              Analitika va modernizatsiyalash
            </h3>
            <p className="services__item-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </li>
          <li className="services__item">
            <span className="services__square">
              <img
                width={40}
                height={40}
                alt="web site"
                src={services9}
                className="services__square-icon"
              />
            </span>
            <h3 className="services__item-title">
              Korporativ portallarni ishlab chiqish
            </h3>
            <p className="services__item-text">
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

export default Services;
