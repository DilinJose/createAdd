import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const NewDataTables = ({ columns, data }) => {
    
  const columnTotals = columns.map((column) => ({
    name: column.name,
    total: data.reduce(
      (acc, row) => acc + parseFloat(row[column.field]) || 0,
      0
    ),
  }));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.field}>{row[column.field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Display totals */}
      <div className="column-totals">
        {columnTotals.map((columnTotal) => (
          <p key={columnTotal.name}>
            {columnTotal.name}: {columnTotal.total}
          </p>
        ))}
      </div>
    </TableContainer>
  );
};

export default NewDataTables;
