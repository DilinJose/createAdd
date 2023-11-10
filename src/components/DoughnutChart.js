import react from "react";
import { PieChart } from "react-minimal-pie-chart";
import Legends from "./Legends";
const DoughnutChart = ({matrixes}) => {

  const [zero,one,two] = matrixes

  const data = [
    { title: "Males", value: zero, color: "#FFA500" },
    { title: "Females", value: one, color: "#3F63B5" },
    { title: "Unknown", value: two, color: "#1c1c1c" },
  ];
  return (
    <div className="d-flex" style={{ borderTop: "1px solid grey" }}>
      <div
        style={{
          width: "300px",
          marginLeft: "5%",
          flex: 1,
        }}
      >
        <PieChart radius="40" paddingAngle="2" lineWidth={35} data={data} />
      </div>
      <div style={{ flex: 1 }}>
        <Legends />
      </div>
    </div>
  );
};
export default DoughnutChart;
