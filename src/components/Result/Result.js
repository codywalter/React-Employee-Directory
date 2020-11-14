import React from "react";
import employees from "./employees.json";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "./result.css";
const { SearchBar } = Search;
let columns = [
  {
    dataField: "first_name",
    text: "First Name",
    sort: true,
  },
  {
    dataField: "last_name",
    text: "Last Name",
    sort: true,
  },
  {
    dataField: "job_title",
    text: "Job Title",
    sort: true,
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
  },
];

class Result extends React.Component {
  render() {
    return (
      <ToolkitProvider keyField="id" data={employees} columns={columns} search>
        {(props) => (
          <div>
            <SearchBar {...props.searchProps} />
            <BootstrapTable
              {...props.baseProps}
              data={employees}
              multiColumnSort={2}
              keyField="id"
              isSearch={true}
              columns={columns}
            ></BootstrapTable>
          </div>
        )}
      </ToolkitProvider>
    );
  }
}

export default Result;
