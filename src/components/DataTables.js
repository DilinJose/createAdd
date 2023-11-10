import DataTable from "react-data-table-component";

const DataTables = ({ title, data, columns }) => {

  const columnTotals = columns.map((column) => {
    if (column.selector) {
      const total = data.reduce(
        (acc, row) => acc + parseFloat(column.selector(row)) || 0,
        0
      );
      return { name: column.name, total };
    }
    return null;
  });

  return (
    <div className="">
      <h6 className="bold-headings">{title}</h6>
      <DataTable className="table-top" columns={columns} data={data} />
      <div className="column-totals d-flex ">
        {columnTotals.map((columnTotal) => (
          <p  className="total-size mx-5" key={columnTotal.name}>
            {/* {columnTotal.name}: {columnTotal.total} */}
            {columnTotal.total}
          </p>
        ))}
      </div>
    </div>
  );
};
export default DataTables;
