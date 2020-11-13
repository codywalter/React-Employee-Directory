import React from "react";
import employees from "./employees.json";
import "./result.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Result extends React.Component {
  render() {
    return (
      <div>
        <BootstrapTable
          ref="table"
          data={employees}
          multiColumnSort={2}
          search={true}
        >
          <TableHeaderColumn
            dataField="first_name"
            isKey={true}
            dataSort={true}
          >
            First Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField="last_name" dataSort={true}>
            Last Name
          </TableHeaderColumn>

          <TableHeaderColumn dataField="job_title" dataSort={true}>
            Job Title
          </TableHeaderColumn>

          <TableHeaderColumn dataField="email" dataSort={true}>
            Email
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Result;
