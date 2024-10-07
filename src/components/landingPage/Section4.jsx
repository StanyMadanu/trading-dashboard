import React from "react";

const Section4 = () => {
  return (
    <section className="section section4 py-7" id="section2">
      <div className="container">
        <div className="d-flex flex-column gap-4 mb-5 text-white text-center">
          <h3 className="green-color fw-lighter ls-1 text-capitalize">
            find answers to all your questions
          </h3>
          <h2 className="fw-bold fs-50 text-uppercase">got a problem?</h2>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="features-card d-flex gap-4 p-4 flex-column flex-sm-row text-center text-sm-start">
              <div className="feature-img">
                <img
                  src="https://softivuslab.com/html/critox/assets/images/support/01.png"
                  alt="feature-img"
                />
              </div>
              <div className="feature-summery">
                <h5 className="text-capitalize mb-3">detailed document</h5>
                <p>
                  Our documentation is as thorough as possible. Each themes
                  option is detailed and easy to follow
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="features-card d-flex gap-4 p-4 flex-column flex-sm-row text-center text-sm-start">
              <div className="feature-img">
                <img
                  src="https://softivuslab.com/html/critox/assets/images/support/02.png"
                  alt="feature-img"
                />
              </div>
              <div className="feature-summery">
                <h5 className="text-capitalize mb-3">premium support</h5>
                <p>
                  We offer a dedicated & friendly support, We will try to reply
                  as fast as we can. Will be in touch. good luck
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <div className="features-card d-flex gap-4 p-4 flex-column flex-sm-row text-center text-sm-start">
              <div className="feature-img">
                <img
                  src="https://softivuslab.com/html/critox/assets/images/support/03.png"
                  alt="feature-img"
                />
              </div>
              <div className="feature-summery">
                <h5 className="text-capitalize mb-3">video tutorials</h5>
                <p>
                  Watch our video tutorials, step by step instructions to set up
                  the Template.We have separated with video tutorials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
