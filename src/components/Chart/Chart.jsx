import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const datapointValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...datapointValues);
  return (
    <div className='chart'>
      {props.dataPoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            label={datapoint.label}
            maxValue={totalMaximum}
            value={datapoint.value}
          />
        );
      })}
    </div>
  );
};

export default Chart;