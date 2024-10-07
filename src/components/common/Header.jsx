import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header d-flex px-3 position-sticky top-0">
      <div>
        <Link to="/" className="text-capitalize fs-12 fw-semibold p-2">
          dashboard
        </Link>
      </div>
      <div>
        <Link to="/" className="text-capitalize fs-12 fw-semibold p-2">
          add
        </Link>
      </div>
      <div>
        <Link to="/" className="text-capitalize fs-12 fw-semibold p-2">
          display
        </Link>
      </div>
      <div>
        <Link to="/" className="text-capitalize fs-12 fw-semibold p-2">
          help
        </Link>
      </div>
      <div>
        <Link
          to="/landing-page"
          className="text-capitalize fs-12 fw-semibold p-2"
        >
          Landing Page
        </Link>
      </div>
      <div className="ms-auto">
        <Link
          to="/login"
          className="text-capitalize fs-12 fw-semibold p-2 ms-auto"
        >
          login
        </Link>
      </div>
    </div>
  );
};

export default Header;
