import React, { useState } from "react";
import DataTables from "./DataTables";
import { cammpaignData, campaignColumn, groupColummn, groupData } from "./data";
import DoughnutChart from "./DoughnutChart";

const campaignDatas = cammpaignData;
const campaignColumns = campaignColumn;
const groupDatas = groupData;
const groupColummns = groupColummn;

const Dashboard = () => {
  const [togle, setTogle] = useState(false);
  let title = "Ad Insights";
  return (
    <div className="d-flex mt-2">
      <div className="img-field">
        <DataTables
          data={campaignDatas}
          columns={campaignColumns}
          title={title}
        />
      </div>

      <div className="img-field">
        {togle ? (
          <DataTables data={groupDatas} columns={groupColummns} title={title} />
        ) : (
          <DoughnutChart />
        )}

        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setTogle(!togle)}
          >
            chart
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setTogle(!togle)}
          >
            table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
