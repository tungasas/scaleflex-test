import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const defaultData = [1, 9, 3, 5, 8, 1, 7, 12];

function Chart({ mode, data = defaultData, color, height }) {
  return (
    <div>
      {mode === "bar" && (
        <div className="bar-chart">
          <h3 className="chart-title">Bar Chart</h3>
          <BarChart data={data.map((d) => d)} color={color} height={height} />
        </div>
      )}
      {mode === "line" && (
        <div className="line-chart">
          <h3 className="chart-title">Line Chart</h3>
          <LineChart data={data.map((d) => d)} color={color} height={height} />
        </div>
      )}
    </div>
  );
}

export default Chart;
