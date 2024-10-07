import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import logo from "../../assets/images/logo.png";

const LandingHeader = ({ scrolled }) => {
  const [active, setActive] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerLinks = ["view demos", "features", "support"];

  return (
    <header
      className={`d-flex justify-content-between align-items-center p-3 ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="logo">
        <img src={logo} alt="logo-brand" style={{ width: "200px" }} />
      </div>

      <div className="trading-links gap-5 d-none d-lg-flex">
        {headerLinks.map((link, i) => (
          <div className="trading-link" key={i}>
            <a
              href={`#section${i}`}
              className={`text-uppercase fw-semibold fs-15 ${
                active === i ? "active" : ""
              }`}
              onClick={() => setActive(i)}
            >
              {link}
            </a>
          </div>
        ))}
      </div>

      <div className="purchase-btn d-none d-lg-block">
        <button className="text-uppercase fs-14 fw-semibold d-flex align-items-center justify-content-center">
          purchase now
          <span className="ps-2">
            <BsArrowRight />
          </span>
        </button>
      </div>

      {/* Toggle for Mobile */}
      <input
        type="checkbox"
        id="checkbox"
        onChange={() => setIsMenuOpen(!isMenuOpen)}
        checked={isMenuOpen}
      />
      <label htmlFor="checkbox" className="toggle d-flex d-lg-none">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>

      {/* Dropdown Menu */}
      <div
        className={`trading-dropdown-menu py-3 ${isMenuOpen ? "d-block" : ""}`}
      >
        {headerLinks.map((link, i) => (
          <div className="trading-link text-center mb-1" key={i}>
            <a
              href={`#section${i}`}
              className={`text-uppercase fw-semibold fs-15 ${
                active === i ? "active" : ""
              }`}
              onClick={() => setActive(i)}
            >
              {link}
            </a>
          </div>
        ))}

        <div className="trading-link text-center">
          <a href="#" className="text-uppercase fw-semibold fs-18">
            purchase
          </a>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
