import React, { useState, useCallback } from "react";
import Chart from "./components/Chart";
import Configuration from "./components/Configuration";

const defautConfig = {
  mode: "bar",
  size: 10,
  data: new Array(10).fill(0),
  color: "#0693E3",
};

function App() {
  const [config, setConfig] = useState(defautConfig);

  const onConfigChange = useCallback((newConfig) => {
    setConfig(newConfig);
  }, []);

  return (
    <div className="app">
      <div className="title">
        <h2>Scaleflex Test</h2>
      </div>
      <div className="config-wrapper">
        <Configuration onChange={onConfigChange} />
      </div>
      <div className="chart-wrapper">
        <Chart {...config} height={100} />
      </div>
    </div>
  );
}

export default App;
