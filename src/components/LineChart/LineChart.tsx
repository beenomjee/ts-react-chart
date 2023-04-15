import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./LineChart.module.css";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  ChartData,
  Filler,
  LineElement,
  LinearScale,
  Point,
  PointElement,
  Tooltip,
} from "chart.js";
import { Chart as ChartJS } from "chart.js";
import { _DeepPartialObject } from "chart.js/dist/types/utils";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface IData {
  id: number;
  x: string;
  y: number;
}

const dataDB: IData[] = [
  {
    id: 1,
    x: "Jan",
    y: 27000,
  },
  {
    id: 2,
    x: "Feb",
    y: 21000,
  },
  {
    id: 3,
    x: "Mar",
    y: 26000,
  },
  {
    id: 4,
    x: "April",
    y: 19000,
  },
  {
    id: 5,
    x: "May",
    y: 29000,
  },
  {
    id: 6,
    x: "June",
    y: 25000,
  },
  {
    id: 7,
    x: "July",
    y: 20000,
  },
  {
    id: 8,
    x: "August",
    y: 24000,
  },
];

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#000",
        padding: 30,
        font: {
          family: "Poppins",
          weight: "bold",
        },
      },
    },
    y: {
      min: 10000,
      max: 50000,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#000",
        padding: 10,
        font: {
          family: "Poppins",
          weight: "bold",
        },
        callback: (n: number | string) => {
          if (!((n as number) % 5000 === 0 && (n as number) % 10000 !== 0)) {
            return String(Number(n) / 1000) + "k";
          } else {
            return "";
          }
        },
      },
    },
  },
  plugins: {},
  layout: {},
};

const data: ChartData<"line", (number | Point | null)[], unknown> = {
  labels: dataDB.map((onePoint) => onePoint.x),
  datasets: [
    {
      data: dataDB.map((onePoint) => onePoint.y),
      fill: true,
      borderColor: "#FFC841",
      backgroundColor: "#FDF3D7",
      pointRadius: 10,
      pointBackgroundColor: "#ffc841",
    },
  ],
};

console.log(data);

const LineChart: FC = () => {
  const [aspectRatio, setAspectRatio] = useState<number>(1);
  const containerEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (containerEl.current) {
        if (containerEl.current.querySelector("canvas")) {
          const el = containerEl.current.querySelector("canvas");
          (el as HTMLCanvasElement).style.display = "none";
          const width = containerEl.current.offsetWidth;
          const height = containerEl.current.offsetHeight;
          setAspectRatio((width - 48) / (height - 48));
          (el as HTMLCanvasElement).style.display = "block";
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [containerEl]);
  return (
    <div className={styles.container} ref={containerEl}>
      <Line options={{ ...options, aspectRatio }} data={data} height={"100%"} />
    </div>
  );
};

export default LineChart;
