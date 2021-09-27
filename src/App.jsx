import { Table } from "./components/Table";

import { makeStyles } from "@material-ui/core";
import { NormalTable } from "./components/NormalTable";
import { NormalTableBody } from "./NormalTableBody";

const useStyles = makeStyles({
  content: {
    width: "100%",
    height: "200px",
    overflowY: "scroll",
  },
  table1: {
    // width: '500px',
    height: "100%",
    width: "100%",
    overflowY: "hidden",
    paddingBottom: "21px",

    margin: "10px 0",
    "& table": {
      border: "1px solid #000",
      borderSpacing: "0",
      width: "100%",

      position: "relative",
      height: "100%",

      "& th": {
        position: "sticky",
        top: "0",
        left: "0",
        color: "#fff",
        background: "green",
      },

      "& thead": {
        background: "green",
      },

      "& th, td": {
        padding: "2px",
        border: "1px solid #000",
      },

      "& tbody": {
        border: "10px solid red",
      },
    },
  },

  red: {
    background: "#ccc",
  },
  green: {
    background: "#c2c2a9",
  },

  table2: {
    "& table": {
      border: "1px solid red",
    },
  },

  normalTable: {
    '& table': {
      border: '5px solid green',
      '& thead': {
        background: 'red'
      }
    }
  },
});

function App() {
  const classes = useStyles();

  const head = [
    {
      Header: "Title Column1",
      columns: [
        {
          Header: "Column 1",
          accessor: "col1",
        },
        {
          Header: "Column 1",
          accessor: "col2",
        },
      ],
    },
    {
      Header: "Title Column2",
      columns: [
        {
          Header: "Column2",
          accessor: "col3",
        },
      ],
    },
    {
      Header: "Column 2",
      accessor: "col4",
    },
    {
      Header: "Tilte column 3",
      columns: [
        {
          Header: "Column 3",
          accessor: "col5",
        },
        {
          Header: "Column 3",
          accessor: "col6",
        },
        {
          Header: "Column 3",
          accessor: "col7",
        },
      ],
    },
  ];

  const data = [
    {
      col1: "Hello",
      col2: "World",
      col3: 0,
      col4: "item4",
      col5: "item5",
      col6: "item6",
      col7: "item7",
    },

    {
      col1: "react-table",
      col2: "rocks",
      col3: 0,
      col4: "item4",
      col5: "item5",
      col6: "item6",
      col7: "item7",
    },

    {
      col1: "whatever",
      col2: "you want",
      col3: 1,
      col4: "item4",
      col5: "item5",
      col6: "item6",
      col7: "item7",
    },
    {
      col1: "whatever",
      col2: "you want",
      col3: 1,
      col4: "item4",
      col5: "item5",
      col6: "item6",
      col7: "item7",
    },
    {
      col1: "whatever",
      col2: "you want",
      col3: 1,
      col4: "item4",
      col5: "item5",
      col6: "item6",
      col7: "item7",
    },
    {
      col1: "whatever",
      col2: "you want",
      col3: 1,
      col4: "item4",
      col5: "item5",
      col6: "item6",
      col7: "item7",
    },
    {
      col1: "whatever",
      col2: "you want",
      col3: 1,
      col4: "item4",
      col5: "item5",
      col6: "item6",
      col7: "item7",
    },
    {
      col1: "whatever",
      col2: "you want",
      col3: 1,
      col4: "item4",
      col5: "item5",
      col6: "item6",
      col7: "item7",
    },
    {
      col1: "whatever",
      col2: "you want",
      col3: 1,
      col4: "item4",
      col5: "item5",
      col6: "item6",
      col7: "item7",
    },
  ];

  return (
    <div>
      <h1>React Table</h1>

      <div className={classes.table1}>
        <div className={classes.content}>
          <Table
            column={head}
            dataBody={data}
            red={classes.red}
            green={classes.green}
          />
        </div>
      </div>

      <div>
        <h1>Table Normal - Style Standard </h1>
        <NormalTableBody />
      </div>

      <div className={classes.normalTable}>
        <h1>Table Normal - Custom Style</h1>
        <NormalTable />
      </div>
    </div>
  );
}

export default App;
