import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  table: {
    border: "1px solid #000",
    width: "100%",
    borderSpacing: "0",

    "& th, td": {
      border: "1px solid #000",
      padding: "2px",
    },

    "& thead": {
      background: "#ccc",
    },
    "& tbody": {
      background: "#fca311",
    },
    "& tfoot": {
      background: "#333",
      color: "#fff",
    },
  },
});

export function NormalTable({
  mappedTableHeader = [[]],
  mappedTableBody = [[]],
  mappedTableFooter = [],
  rowFooter = false,
  ...rest
}) {
  const classNameStyle = useStyles();
 const [sortable, setSortable] = useState(0);
 
  return (
    <table className={classNameStyle.table} {...rest}>
      <thead>
        {mappedTableHeader.map((item1) => {
          return (
            <>
              <tr>
                {item1.map((item2) => {
                  return (
                    <>
                      <th
                        colSpan={item2.colspan}
                        rowSpan={item2.rowspan}
                      >
                        {item2.col}
                      </th>
                    </>
                  );
                })}
              </tr>
            </>
          );
        })}
      </thead>
      <tbody>
        {mappedTableBody.map((rowItem) => {
          return (
            <>
              <tr>
                {rowItem.map((value) => {
                  return (
                    <>
                      <td>{value}</td>
                    </>
                  );
                })}
              </tr>
            </>
          );
        })}
      </tbody>
      {rowFooter && (
        <tfoot>
          <tr>
            {mappedTableFooter.map((mappedFoot) => {
              return <td>{mappedFoot}</td>;
            })}
          </tr>
        </tfoot>
      )}
    </table>
  );
}
