import DataTable from "react-data-table-component";

// const columns = [
//   {
//     name: "Title",
//     selector: (row) => row.title,
//     sortable: true,
//   },
//   {
//     name: "Year",
//     selector: (row) => row.year,
//     sortable: true,
//   },
// ];

// const data = [
//   {
//     id: 1,
//     title: "Beetlejuice",
//     year: "1988",
//   },
//   {
//     id: 2,
//     title: "Ghostbusters",
//     year: "1984",
//   },
// ];

const DataTables = ({ title, data, columns }) => {
const a= columns.map(data=>data.selector)
console.log(a);

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
    <div className="campaign">
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
