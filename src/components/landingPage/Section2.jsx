import React from "react";

const Section2 = () => {
  const innerPagesData = [
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/buy-sell.png",
      title: "buy & sell",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/recurring-buy.png",
      title: "recurring buy",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/deposit-fiat.png",
      title: "deposit fiat",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/withdraw-fiat.png",
      title: "withdraw fiat",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/sell-crypto.png",
      title: "sell crypto",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/sell-crypto-details.png",
      title: "sell crypto details",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/swap.png",
      title: "swap",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/market-overview.png",
      title: "market overview",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/trading-ranking.png",
      title: "trading ranking",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/trading-usd.png",
      title: "trading USD",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/trading-option.png",
      title: "trading option",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/earn-overview.png",
      title: "earn overview",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/earn-simple.png",
      title: "earn simple",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/earn-high.png",
      title: "earn high yield",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/earn-auto-invest.png",
      title: "auto invest",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/blog-grid.png",
      title: "blog grid",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/blog-list.png",
      title: "blog list",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/blog-details.png",
      title: "blog details",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/event.png",
      title: "event",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/pricing.png",
      title: "pricing plan",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/faq.png",
      title: "faq",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/contact.png",
      title: "contact",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/terms.png",
      title: "terms & conditions",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/profile.png",
      title: "user profile",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/history.png",
      title: "exchange history",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/loyalty.png",
      title: "user loyalty",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/withdrawals.png",
      title: "payouts",
      pathUrl: "#",
    },
    {
      imgUrl:
        "https://softivuslab.com/html/critox/assets/images/change-password.png",
      title: "change password",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/register.png",
      title: "register",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/login.png",
      title: "login",
      pathUrl: "#",
    },
    {
      imgUrl: "https://softivuslab.com/html/critox/assets/images/404.png",
      title: "404",
      pathUrl: "#",
    },
  ];

  return (
    <div className="section section2 text-center my-5 py-7" id="section1">
      <div className="container">
        <div className="d-flex flex-column gap-4 mb-5 text-white">
          <h3 className="green-color fw-lighter ls-1 text-capitalize">
            choose your layout
          </h3>
          <h2 className="fw-bold fs-60 text-uppercase mb-5">inner pages</h2>
        </div>

        <div className="row justify-content-center gap-4 row-gap-5">
          {innerPagesData.map((innerPage, index) => (
            <div
              key={index}
              className="col-xl-5 col-lg-5 col-md-5 col-sm-9 col-8"
            >
              <div className="d-flex flex-column justify-content-center align-items-center gap-5 mb-4">
                <div className="demo-card-wrapper">
                  <div className="demo-card">
                    <img
                      className="img-fluid"
                      src={innerPage.imgUrl}
                      alt="home-ss"
                    />
                    <h6 className="view-demo text-capitalize text-white ls-1 fs-18">
                      view demo
                    </h6>
                  </div>
                </div>

                <h5 className="text-capitalize fw-bold">{innerPage.title}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="d-flex flex-column justify-content-center align-items-center gap-5">
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
        </div> */}
      </div>
    </div>
  );
};

export default Section2;
