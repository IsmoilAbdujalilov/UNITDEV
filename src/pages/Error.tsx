import { ErrorBackground } from "assets/images/jpg";

const Error = () => {
  return (
    <section className="error">
      <div
        className="error__background"
        style={{ backgroundImage: `url(${ErrorBackground})` }}
      >
        <div className="container">
          <h1 className="error-title">404 Page Not Found</h1>
        </div>
      </div>
    </section>
  );
};

export default Error;
