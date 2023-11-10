import { VictoryLegend } from 'victory';

const Legends = () => {
  return (
    <div>
      <VictoryLegend
        x={100}
        y={150}
        
        centerTitle
        orientation="vertical"
        gutter={40}
        style={{ fontSize: "50px" }}
        data={[
          { name: "Male", symbol: { fill: "#FFA500", } },
          { name: "Female", symbol: { fill: "#3F63B5" } },
          { name: "Unknown", symbol: { fill: "#1c1c1c" } },
        ]}
      />
     </div>
  );
};

export default Legends;
