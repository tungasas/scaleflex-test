import React from "react";

function LineChart({ data, color, height: defaultHeight }) {
  const padding = 20;
  const pointMargin = 25;
  const width = pointMargin * (data.length - 1) + padding * 2;
  const height = (defaultHeight || Math.max(...data)) + padding * 2;
  const points = data
    .map(
      (d, index) => `${index * pointMargin + padding},${height - d - padding}`
    )
    .join(" ");

  const Axis = ({ points }) => (
    <polyline fill="none" stroke="#ccc" strokeWidth="1" points={points} />
  );

  const XAxis = () => (
    <Axis
      points={`${padding},${height - padding} ${width - padding},${
        height - padding
      }`}
    />
  );

  const Area = () => {
    const startPoint = `M${padding} ${height - padding}`;
    const linePoints = data
      .map(
        (d, index) =>
          `L${index * pointMargin + padding} ${height - d - padding}`
      )
      .join(" ");
    const endPoint = `L${width - padding} ${height - padding} Z`;
    return (
      <path
        d={`${startPoint}${linePoints}${endPoint}`}
        fill={color}
        fillOpacity="0.3"
      />
    );
  };

  const YAxis = () => (
    <Axis points={`${padding},${height - padding} ${padding},${padding}`} />
  );

  const Line = () => (
    <polyline fill="none" stroke={color} strokeWidth="2" points={points} />
  );

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      <Area />
      <Line />
      <XAxis />
      <YAxis />
    </svg>
  );
}

export default LineChart;
