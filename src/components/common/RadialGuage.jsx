import React, { useEffect, useRef } from "react";
import { AgCharts } from "ag-charts-enterprise";

const RadialGauge = ({
  value,
  min = 0,
  max = 100,
  status,
  statusColor = "#00cc66",
}) => {
  const gaugeRef = useRef(null);

  useEffect(() => {
    const options = {
      type: "radial-gauge",
      container: gaugeRef.current,
      value: value,
      scale: {
        min: min,
        max: max,
        ticks: [min, max],
        fill: "#262F38",
        label: {
          enabled: false, // Hide other labels except min and max
        },
      },
      bar: {
        fill: "#f5f6fa",
      },

      label: {
        formatter({ value }) {
          return `${value.toFixed(2)}%`;
        },
        color: "#fff",
        fontSize: 20,
      },
      background: {
        fill: "transparent", // This makes the gauge's background transparent
      },

      // secondaryLabel: {
      //   text: `Service ${status}`,
      //   backgroundColor: "#00cc66",
      //   borderRadius: "5px",
      // },
    };

    const gauge = AgCharts.createGauge(options);

    return () => {
      gauge.destroy();
    };
  }, [value, min, max, status]);

  return (
    <div>
      <div ref={gaugeRef} style={{ width: "100%", height: "120px" }} />
      <div
        className="fs-12 w-auto fw-semibold text-center"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "2px 25px",
          backgroundColor: statusColor,
          color: "#000",
          borderRadius: "5px",
        }}
      >
        Service: {status}
      </div>
    </div>
  );
};

export default RadialGauge;
