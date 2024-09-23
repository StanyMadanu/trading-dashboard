import React from "react";
import RadialGauge from "./common/RadialGuage";
// import AreaChart from "./common/AreaChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="col-xl-2 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">OS Server name</p>
            </div>
            <div className="card-body no-chart">
              <div className="red-box"></div>
            </div>
          </div>
        </div>
        <div className="col-xl-1 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">OS Server name</p>
            </div>
            <div className="card-body no-chart">
              <h6>n/a</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-1 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">OS Server name</p>
            </div>
            <div className="card-body no-chart">
              <h6>n/a</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-2 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">OS Server name</p>
            </div>

            <div className="card-body">
              <RadialGauge value={80.68} status="OK" statusColor="#00cc69" />
            </div>
          </div>
        </div>
        <div className="col-xl-3 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">OS Server name</p>
            </div>
            <div className="card-body no-chart">{/* <AreaChart /> */}</div>
          </div>
        </div>
        <div className="col-xl-3 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">OS Server name</p>
            </div>
            <div className="card-body no-chart">
              <h6>n/a</h6>
              <p className="fs-9">Thu 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
