import React from "react";
import "../UI/Chart.css";
import ChartBar from "./ChartBar";

interface ChartProps {
  dataPoints: { label: string; value: number }[];
}

const Chart: React.FC<ChartProps> = ({ dataPoints }) => {
  const totalMax = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
