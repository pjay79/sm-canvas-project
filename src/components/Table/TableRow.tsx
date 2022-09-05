import React from "react";
import styled from "styled-components";
import { useFabric } from "../../providers/Fabric";

const SCTableRow = styled.tr`
  text-align: center;
  color: #000000;
`;

const TableRow: React.FC<{ finding: any }> = ({ finding }) => {
  const { selected, setSelected, canvas } = useFabric();
  console.log(canvas._objects[0])

  const handleMouseEnter = () => {
    console.log('here')
    setSelected(finding.id);
    canvas._objects[0].item(0)?.set("fill", "#2FAD66");
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