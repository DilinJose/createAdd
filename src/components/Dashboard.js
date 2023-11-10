import React, { useEffect, useState } from "react";
import DataTables from "./DataTables";
import { cammpaignData, campaignColumn, groupColummn, groupData } from "./data";
import DoughnutChart from "./DoughnutChart";
import ToggleButtons from "./ToggleButtons";

const campaignDatas = cammpaignData;
const campaignColumns = campaignColumn;
const groupDatas = groupData;
const groupColummns = groupColummn;

const Dashboard = () => {
  const [togle, setTogle] = useState(false);
  const [matrixes, setMatrixes] = useState([]);
  let title = "Ad Insights";


useEffect(()=>{
  const keysOnly = groupDatas.map((item) => item["click"]);
  setMatrixes(keysOnly)
},[])

  const handleSelect = (event) => {
    console.log(event.target.value);
    const keysOnly = groupDatas.map((item) => item[event.target.value]);
    setMatrixes(keysOnly)
  };
  return (
    <div className="d-flex mt-2">
      <div className="img-field campaign">
        <DataTables
          data={campaignDatas}
          columns={campaignColumns}
          title={title}
        />
      </div>

      <div className="img-field campaign">
        {togle ? (
          <div style={{ borderBottom: "1px solid grey" }}>
            <DataTables
              data={groupDatas}
              columns={groupColummns}
              title={title}
            />
          </div>
        ) : (
          <div className=" ">
            <div className="d-flex justify-content-between">
              <h6 className="bold-headings">{title}</h6>
              <div className="d-flex justify-content-center align-items-center me-2">
                <select onChange={handleSelect} style={{ height: "30px",fontSize:"15px",color:"rgb(158, 158, 158)", borderColor:"rgb(177, 177, 177)" }}>
                  <option value={"click"}>Click</option>
                  <option value={"cost"}>Cost</option>
                  <option value={"conversion"}>Conversion</option>
                  <option value={"revenue"}>Revenue</option>
                </select>
              </div>
            </div>

            <DoughnutChart matrixes={matrixes} />
          </div>
        )}

        <div className="d-flex justify-content-end align-items-end">
          <ToggleButtons togle={togle} setTogle={setTogle} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
