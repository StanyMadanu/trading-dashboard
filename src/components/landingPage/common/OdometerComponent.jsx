import React, { useEffect, useRef, useState } from "react";
import "odometer/themes/odometer-theme-default.css";
import Odometer from "odometer";

const OdometerComponent = ({ value, format }) => {
  const odometerRef = useRef(null);

  const [counterValue, setCounterValue] = useState(0);

  useEffect(() => {
    if (odometerRef.current) {
      const odometer = new Odometer({
        el: odometerRef.current,
        value: 0,
        format: format,
        theme: "default",
        duration: 2000,
      });

      setCounterValue(value);
    }
  }, []);

  useEffect(() => {
    if (odometerRef.current) {
      odometerRef.current.innerHTML = counterValue;
    }
  }, [counterValue]);

  return (
    <div ref={odometerRef} className="odometer">
      0
    </div>
  );
};

export default OdometerComponent;
