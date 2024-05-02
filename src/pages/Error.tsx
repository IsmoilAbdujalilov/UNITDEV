import { ErrorBackground } from "assets/images/jpg";
import { Link } from "react-router-dom";

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

      <div className="container">
        <div className="error__content">
          <h2 className="error__content-status-code">404</h2>
          <h3 className="error__content-title">Oops! Page not found</h3>
          <p className="error__content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            congue pretium faucibus leo nisl nulla pharetra nullam.
          </p>
          <Link to="/" className="error__content-btn" role="button">
            Go to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
