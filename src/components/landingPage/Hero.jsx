import React from "react";
import { TiArrowRightThick } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="container">
      <section className="hero-section text-uppercase text-center my-5 py-5">
        <div className="d-flex flex-column gap-4 mb-5 text-white">
          <h3 className="green-color fw-lighter ls-1">
            easy way to build perfect websites
          </h3>
          <h2 className="fw-bold fs-60">
            <span className="d-block">built sites with</span>
            the soul of inspiration
          </h2>
        </div>

        <div className="counter-items d-flex justify-content-center align-items-center gap-5 my-5 py-2">
          <div className="counter-item text-start">
            <h2 className="fw-bold fs-60 green-color mb-2">01</h2>
            <h4 className="fw-lighter">home pages</h4>
          </div>
          <div className="counter-item text-start">
            <h2 className="fw-bold fs-60 green-color mb-2">30+</h2>
            <h4 className="fw-lighter">inner pages</h4>
          </div>
          <div className="counter-item text-start">
            <h2 className="fw-bold fs-60 green-color mb-2">80+</h2>
            <h4 className="fw-lighter">components</h4>
          </div>
        </div>

        <div className="buynow-btn d-flex justify-content-center">
          <button className="text-uppercase fs-20">
            <span className="">buy now</span>
            <span className="ps-2 lh-1">
              <TiArrowRightThick />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
