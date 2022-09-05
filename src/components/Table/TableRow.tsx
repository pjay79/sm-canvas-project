import React from "react";
import styled from "styled-components";
import { useFabric } from "../../providers/Fabric";

const SCTableRow = styled.tr`
  text-align: center;
  color: #000000;
`;

const TableRow: React.FC<{ finding: any }> = ({ finding }) => {
  const { selected, setSelected } = useFabric();

  const handleMouseOver = () => {
    setSelected(finding.id);
  };

  const handleMouseLeave = () => {
    setSelected("");
  };

  return (
    <SCTableRow
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={finding.id === selected ? "selected" :  "unselected"}
    >
      <td>{finding.type}</td>
      <td>{finding.label}</td>
    </SCTableRow>
  )
}

export default TableRow;