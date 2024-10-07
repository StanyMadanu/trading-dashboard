import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import logo from "../../assets/images/logo.png";

const LandingHeader = ({ scrolled }) => {
  const [active, setActive] = useState(null);

  const headerLinks = ["view demos", "features", "support"];

  return (
    <header
      className={`d-flex justify-content-between align-items-center px-3 py-4 ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="logo">
        <img src={logo} alt="logo-brand" style={{ width: "250px" }} />
      </div>
      <div className="trading-links d-flex gap-5">
        {headerLinks.map((link, i) => (
          <div className="trading-link" key={i}>
            <a
              href={`#section${i}`}
              className={`text-uppercase fw-semibold fs-18 ${
                active === i ? "active" : ""
              }`}
              onClick={() => setActive(i)}
            >
              {link}
            </a>
          </div>
        ))}
        {/* <div className="trading-link">
          <a
            href="#section2"
            className={`text-uppercase fw-semibold fs-18 ${
              active ? "active" : ""
            }`}
            onClick={handleActive}
          >
            features
          </a>
        </div>
        <div className="trading-link">
          <a
            href="#section3"
            className={`text-uppercase fw-semibold fs-18 ${
              active ? "active" : ""
            }`}
            onClick={handleActive}
          >
            support
          </a>
        </div> */}
      </div>
      <div className="purchase-btn">
        <button className="text-uppercase fs-20 fw-semibold d-flex align-items-center justify-content-center">
          purchase now
          <span className="ps-2">
            <BsArrowRight />
          </span>
        </button>
      </div>
    </header>
  );
};

export default LandingHeader;
