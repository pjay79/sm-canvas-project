import React from "react";
import styled from "styled-components";
import TableRow from "./TableRow";

const SCTableWrapper = styled.div`
  margin-left: 20px;
  color: #FFFFFF;
`;

const SCTable = styled.table`
  width: 200px;
  height: 800px;
  border-collapse: collapse;    

  td {
    border: 1px solid #ddd;
    padding: 4px;
  }

  .selected {
    background-color: green;
  }

  .unselected {
    background-color: white;
  }
`;

const Table: React.FC<{ findings: Array<any> }> = ({ findings }) => {
  return (
    <SCTableWrapper>
      <h2>Findings</h2>
      <SCTable>
        <tbody>
          {findings.map((finding: any) => (
            <TableRow key={finding.id} finding={finding} />
          ))}
        </tbody>
      </SCTable>
    </SCTableWrapper>
  )
}

export default Table;