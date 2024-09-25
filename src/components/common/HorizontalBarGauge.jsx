import React, { useEffect, useState } from "react";

const HorizontalBarGauge = ({
  fillValue,
  fillColor = "#76c7c0",
  bgColor = "#e0e0e0",
  textFill = "#000",
}) => {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    setFill(fillValue);
  }, []);

  return (
    <>
      <div className="gauge-container text-center">
        <svg width="120" height="35">
          <rect
            className="gauge-bg"
            x="0"
            y="15"
            width="100%"
            height="20"
            fill={bgColor}
          />
          <rect
            className="gauge-fill"
            x="0"
            y="15"
            width={fill}
            height="20"
            fill={fillColor}
          />
          <text
            className="gauge-text fw-bold text-center"
            x="50%"
            y="30"
            text-anchor="middle"
            fill={textFill}
          >
            {fill}
          </text>
        </svg>
      </div>
    </>
  );
};

export default HorizontalBarGauge;
