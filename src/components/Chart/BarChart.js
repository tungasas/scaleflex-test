import React from "react";

const Bar = ({ x, y, width, height, color }) => (
  <rect x={x} y={y} width={width} height={height} fill={color} />
);

const highestValue = (values) => Math.max(...values, 0);

function BarChart({ data, color, height: defaultHeight }) {
  const padding = 20;
  const barWidth = 20;
  const barMargin = 5;
  const width = data.length * (barWidth + barMargin) + padding * 2;
  const height = (defaultHeight || highestValue(data)) + padding * 2;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      {data.map((d, index) => (
        <Bar
          key={index}
          x={index * (barWidth + barMargin) + padding}
          y={height - d - padding}
          width={barWidth}
          height={d}
          color={color}
        />
      ))}
    </svg>
  );
}

export default BarChart;
