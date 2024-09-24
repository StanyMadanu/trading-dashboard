import React from "react";
import RadialGauge from "./common/RadialGauge";
import HorizontalBarGauge from "./common/HorizontalBarGauge";
import { IoReorderThreeSharp } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row mb-1">
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

      <div className="row mb-1">
        <div className="col-xl-4">
          <div className="card">
            <div className="card-heading">
              <p>File systems</p>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th className="text-capitalize">state</th>
                      <th className="text-capitalize">service</th>
                      <th className="text-capitalize">Perf-O-Meter</th>
                      <th className="text-capitalize">size</th>
                      <th className="text-capitalize">used space</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 6 }).map((_, index) => (
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
        <div className="col-xl-2">
          <div className="card">
            <div className="card-heading">
              <p>Disk IO: Utilization</p>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="card">
            <div className="card-heading">
              <p>Disk IO: Average end to end wait time</p>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="card">
            <div className="card-heading">
              <p>Disk IO: Average disk latency</p>
            </div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-heading">
              <p>CRIT</p>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th className="text-capitalize">state</th>
                      <th className="text-capitalize">last OK</th>
                      <th className="text-capitalize">service</th>
                      <th className="text-capitalize">icons</th>
                      <th className="text-capitalize">summary</th>
                      <th className="text-capitalize">check int.</th>
                      <th className="text-capitalize">retry</th>
                      <th className="text-capitalize">att.</th>
                      <th className="text-capitalize">latency</th>
                      <th className="text-capitalize">next check</th>
                      <th className="text-capitalize">contacts</th>
                      <th className="text-capitalize">service labels</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <tr key={index}>
                        <td>
                          <span className="crit">crit</span>
                        </td>
                        <td>1970-01-01</td>
                        <td>Aggr Host 09283982384</td>
                        <td>
                          <IoReorderThreeSharp />
                        </td>
                        <td>
                          Aggregation state: Critical{" "}
                          <span className="crit">crit</span>, In downtime: no,
                          Acknowledged: no
                        </td>
                        <td>60 s</td>
                        <td>60 s</td>
                        <td>3/3</td>
                        <td>0.00 s</td>
                        <td>-</td>
                        <td></td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
