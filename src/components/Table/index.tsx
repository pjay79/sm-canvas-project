import React from "react";
import styled from "styled-components";

const SCTableWrapper = styled.div`
`;

const SCTable = styled.table`
  width: 100%;
  border-collapse: collapse;    

  td {
    border: 1px solid #ddd;
    padding: 4px;
  }
`;

const Table: React.FC<{ findings: Array<any> }> = ({ findings }) => {
  return (
    <SCTableWrapper>
      <h2>Findings</h2>
      <SCTable>
        <tbody>
          {findings.map((finding: any) => (
            <tr>
              <td>{finding.type}</td>
              <td>{finding.label}</td>
            </tr>
          ))}
        </tbody>
      </SCTable>
    </SCTableWrapper>
  )
}

export default Table;