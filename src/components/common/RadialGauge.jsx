import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const RadialGauge = () => {
  const radialGauge = useRef(null);

  useEffect(() => {
    if (radialGauge.current) {
      const myChart = echarts.init(radialGauge.current);

      const option = {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            center: ["50%", "75%"],
            radius: "90%",
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"],
                ],
              },
            },
            pointer: {
              icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
              length: "12%",
              width: 10,
              offsetCenter: [0, "-50%"],
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              length: 5,
              lineStyle: {
                color: "auto",
                width: 2,
              },
            },
            splitLine: {
              length: 10,
              lineStyle: {
                color: "auto",
                width: 5,
              },
            },
            axisLabel: {
              show: true,
              color: "gray",
              fontSize: 10,
              distance: -50,
              rotate: "tangential",
              formatter: function (value) {
                if (value === 0.875) {
                  return "Grade A";
                } else if (value === 0.625) {
                  return "Grade B";
                } else if (value === 0.375) {
                  return "Grade C";
                } else if (value === 0.125) {
                  return "Grade D";
                }
                return "";
              },
            },
            title: {
              offsetCenter: [0, "20%"],
              fontSize: 13,
              color: "#000",
              fontWeight: "bold",
              backgroundColor: "green",
              padding: [2, 15],
              borderRadius: 5,
            },
            detail: {
              fontSize: 25,
              offsetCenter: [0, "-20%"],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) + "%";
              },
              color: "inherit",
            },
            data: [
              {
                value: 0.8,
                name: "Service OK",
              },
            ],
          },
        ],
      };

      myChart.setOption(option);
      return () => {
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div ref={radialGauge} style={{ width: "100%", height: "180px" }}></div>
  );
};

export default RadialGauge;
