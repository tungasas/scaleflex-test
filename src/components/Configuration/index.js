import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";

const generateNewData = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 101));
};

function Configuration({ defautConfig, onChange }) {
  const [mode, setMode] = useState("bar");
  const [data, setData] = useState([]);
  const [size, setSize] = useState(10);
  const [color, setColor] = useState(defautConfig?.color || "#0693E3");

  useEffect(() => {
    setData(generateNewData(size));
  }, [size]);

  useEffect(() => {
    onChange({ mode, data, size, color });
  }, [data, color, size, mode, onChange]);

  const changeMode = (e) => {
    setMode(e.target.value);
  };

  const ChangeData = () => {
    setData(generateNewData(size));
  };

  const changeDataSize = (e) => {
    setSize(+e.target.value);
  };

  const handleChangeColor = (color) => {
    setColor(color.hex);
  };

  return (
    <div className="chart-config">
      <h3>Settings</h3>
      <div className="config-group">
        <div className="config-group__left">
          <div className="config-item">
            <label className="config-item__name" htmlFor="mode">
              Mode:{" "}
            </label>
            <select name="mode" id="mode" onChange={changeMode}>
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
            </select>
          </div>
          <div className="config-item">
            <label className="config-item__name" htmlFor="size">
              Data size:{" "}
            </label>
            <select name="size" id="size" onChange={changeDataSize}>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="config-item data">
            <button className="config-item__name" onClick={ChangeData}>
              Random New Data
            </button>
            <div>{`[ ${data.join(", ")} ]`}</div>
          </div>
        </div>
        <div className="config-group__right">
          <div className="config-item color-picker">
            <div className="config-item__name">Color: </div>
            <ChromePicker color={color} onChange={handleChangeColor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configuration;
