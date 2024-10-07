import React from "react";

const Section1 = () => {
  return (
    <div className="section section1 text-center my-5 py-7" id="section0">
      <div className="container">
        <div className="d-flex flex-column gap-4 mb-5 text-white">
          <h3 className="green-color fw-lighter ls-1 text-capitalize">
            choose your layout
          </h3>
          <h2 className="fw-bold fs-60 text-uppercase">stunning demo</h2>
          <p className="fs-20 ls-1 lh-2">
            A great collection of beautiful website templates for you need.
            Choose the best <br /> suitable template and start customizing it.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-9 col-8">
            <div className="d-flex flex-column justify-content-center align-items-center gap-5">
              <div className="demo-card-wrapper">
                <div className="demo-card">
                  <img
                    className="img-fluid"
                    src="https://softivuslab.com/html/critox/assets/images/home/home.png"
                    alt="home-ss"
                  />
                  <h6 className="view-demo text-capitalize text-white ls-1 fs-18">
                    view demo
                  </h6>
                </div>
              </div>

              <h3 className="text-capitalize fw-bold">home page</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
