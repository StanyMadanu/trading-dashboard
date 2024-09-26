import React, { useEffect } from "react";
import RadialGauge from "./common/RadialGauge";
import HorizontalBarGauge from "./common/HorizontalBarGauge";
import AreaChart from "./common/AreaChart";
import Table from "./common/Table";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row mb-1">
        <div className="col-xl- col-lg-2 col-md-22 col-lg-2 col-md-2 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">OS Server name</p>
            </div>
            <div className="card-body no-chart px-3">
              <div className="red-box"></div>
            </div>
          </div>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-1 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">OS vendor</p>
            </div>
            <div className="card-body no-chart">
              <h6>n/a</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-1 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">OS version</p>
            </div>
            <div className="card-body no-chart">
              <h6>n/a</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">CPU: Utilization</p>
            </div>

            <div className="card-body">
              <RadialGauge />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">CPU: load</p>
            </div>
            <div className="card-body">
              <AreaChart />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">CPU: I/O-wait</p>
            </div>
            <div className="card-body no-chart">
              <h6>n/a</h6>
              <p className="fs-9">Thu 18:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-1 col-lg-1 col-md-1 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">Datasource status</p>
            </div>
            <div className="card-body no-chart">
              <div className="green-box d-flex justify-content-center align-items-center">
                <h2>OK</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-1 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="text-capitalize">no, CPU cores</p>
            </div>
            <div className="card-body no-chart">
              <h6>n/a</h6>
            </div>
          </div>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-1 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="text-capitalize">no. interfaces</p>
            </div>
            <div className="card-body no-chart">
              <h5>6</h5>
            </div>
          </div>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-1 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="text-capitalize">installed RAM</p>
            </div>
            <div className="card-body no-chart flex-row align-items-center gap-1 justify-content-center">
              <h4>31.25</h4>
              <span className="fs-10">GiB</span>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="text-capitalize">memory: utilization</p>
            </div>

            <div className="card-body no-chart">
              <RadialGauge />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="">Memory: Free swap space</p>
            </div>
            <div className="card-body">
              <AreaChart />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p className="text-capitalize">memory: filesystem writeback</p>
            </div>
            <div className="card-body">
              <h6>n/a</h6>
              <p className="fs-9">Thu 18:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-4 col-lg-4 col-md-4 d-flex">
          <div className="card flex-fill">
            <div className="card-heading">
              <p>File systems</p>
            </div>
            <div className="card-body">
              <div
                className="table-responsive overflowY-auto filesystem-table-wrapper"
                style={{ maxHeight: "390px" }}
              >
                <table className="table table-dark table-striped">
                  <thead className="position-sticky top-0">
                    <tr>
                      <th className="text-capitalize">state</th>
                      <th className="text-capitalize">service</th>
                      <th className="text-capitalize">Perf-O-Meter</th>
                      <th className="text-capitalize">size</th>
                      <th className="text-capitalize">used space</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 9 }).map((_, index) => (
                      <tr key={index}>
                        <td>
                          <span className="ok">ok</span>
                        </td>
                        <td>Filesystem /home/ma</td>
                        <td>
                          <HorizontalBarGauge
                            fillValue="80.26%"
                            fillColor="#76c7c0"
                          />
                        </td>
                        <td>300.00 GiB</td>
                        <td>232.06 GiB</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-8 col-lg-8 col-md-8">
          <div className="row">
            <div className="col-xl-4 col-lg-2 col-md-2 d-flex">
              <div className="card flex-fill">
                <div className="card-heading">
                  <p>Disk IO: Utilization</p>
                </div>
                <div className="card-body no-chart">
                  <RadialGauge />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-heading">
                  <p>Disk IO: Average end to end wait time</p>
                </div>
                <div className="card-body">
                  <AreaChart />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-heading">
                  <p>Disk IO: Average disk latency</p>
                </div>
                <div className="card-body">
                  <AreaChart />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-heading">
                  <p>Disk IO: Utilization</p>
                </div>
                <div className="card-body no-chart">
                  <RadialGauge />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-heading">
                  <p>Disk IO: Average end to end wait time</p>
                </div>
                <div className="card-body">
                  <AreaChart />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-heading">
                  <p>Disk IO: Average disk latency</p>
                </div>
                <div className="card-body">
                  <AreaChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="card">
            <div className="card-heading">
              <p className="text-capitalize fs-13">positions</p>
            </div>
            <div className="card-body">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
