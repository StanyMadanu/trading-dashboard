import React, { useEffect, useRef } from "react";
import { AgCharts } from "ag-charts-enterprise";

const HorizontalBarGauge = () => {
  const BarGauge = useRef(null);

  useEffect(() => {
    if (BarGauge.current) {
      const options = {
        type: "linear-gauge",
        direction: "horizontal",
        container: BarGauge.current,
        value: 80,
        scale: {
          min: 0,
          max: 100,
          fill: "#f5f6fa",
        },

        bar: {
          fill: "#62E2C5",
        },
      };
      AgCharts.createGauge(options);
    }
  }, []);

  return (
    <>
      <div ref={BarGauge} className="bar-gauge-wrapper"></div>
    </>
  );
};

export default HorizontalBarGauge;
