import { Link } from "react-router";
import "./Error404.scss";
import { House } from "lucide-react";

const Error404 = () => {
  return (
    <div className="error-page">
      <div className="error-card">
        <span className="brand">explore_off</span>
        <span className="code">ERROR 404</span>

        <h1>A path less travelled.</h1>

        <p>
          The resource you are looking for has moved or no longer exists. While
          this link may be broken, our commitment to global change remains
          unshakable.
        </p>

        <div className="actions">
          <Link to="/">
            <button className="primary-btn">
              <House /> Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
