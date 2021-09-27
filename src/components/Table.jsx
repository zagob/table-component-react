import React, { useMemo } from "react";
import { useTable } from "react-table";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({});

export function Table({ column = [], dataBody = [], red, green }) {
  const classes = useStyles();
  const data = useMemo(() => dataBody, [dataBody]);
  const columns = useMemo(() => column, [column]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()} >
        {rows.map((row, index) => {
          const rowAlterColor = index % 2 !== 0;
          prepareRow(row);

          return (
            <tr {...row.getRowProps()} className={rowAlterColor ? `${red}` : `${green}`}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
