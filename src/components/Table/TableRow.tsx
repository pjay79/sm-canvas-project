import React from "react";
import styled from "styled-components";
import { useFindings } from "../../providers/Findings";

const SCTableRow = styled.tr`
  text-align: center;
  color: #000000;
`;

const TableRow: React.FC<{ finding: any }> = ({ finding }) => {
  const { selected, setSelected } = useFindings();

  const handleMouseEnter = () => {
    setSelected(finding.id);
  };

  const handleMouseLeave = () => {
    setSelected("");
  };

  return (
    <SCTableRow
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={finding.id === selected ? "selected" :  "unselected"}
    >
      <td>{finding.type}</td>
      <td>{finding.label}</td>
    </SCTableRow>
  )
}

export default TableRow;