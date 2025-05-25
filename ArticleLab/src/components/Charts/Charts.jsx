/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = ({ data, realData }) => {
  const gcvValues = data.map((item) => parseFloat(item.gcv));
  const moistureValues = data.map((item) => parseFloat(item.moisture));
  const delayValues = data.map((item) => parseInt(item.delay_minutes, 10));
  const realGcv = realData.map((item) => parseFloat(item.gcv_range));

  const labels = data.map((item) => item.vehicle_no);

  const gcvData = {
    labels,
    datasets: [
      {
        label: "GCV",
        data: gcvValues,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "GCV Range",
        data: realGcv,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const moistureData = {
    labels,
    datasets: [
      {
        label: "Moisture",
        data: moistureValues,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const delayData = {
    labels,
    datasets: [
      {
        label: "Delay (Minutes)",
        data: delayValues,
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-3 text-center font-semibold text-xl">
      <h2>GCV Chart</h2>
      <Line data={gcvData} className="bg-white rounded-xl mb-8" />

      <h2>Moisture Chart</h2>
      <Line data={moistureData} className="bg-white rounded-xl mb-8" />

      <h2>Delay Minutes Chart</h2>
      <Line data={delayData} className="bg-white rounded-xl mb-8" />
    </div>
  );
};

export default Charts;
