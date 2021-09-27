import React, { useEffect, useState } from "react";
import { NormalTable } from "./components/NormalTable";

import { DataTable } from "./utils/mockedTableData";

export function NormalTableBody() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DataTable);
  }, []);

  const dataTableHeader = [
    [
        {
            col: 'Title Column 1',
            colspan: 2,
        },
        {
            col: "Column3",
            rowspan: 2,
        },
    ],
    [
      {
        col: "Column1",
      },
      {
        col: "Column2",
      },
      {
        col: "Column4",
      },
    ],
  ];

  const dataTableBody = data.map((mapped) => [
    <span>{mapped.value1}</span>,
    <span>{mapped.value2}</span>,
    <span>{mapped.value3}</span>,
    <span>{mapped.value4}</span>,
  ]);
  return (
    <NormalTable
      mappedTableHeader={dataTableHeader}
      mappedTableBody={dataTableBody}
    />
  );
}
