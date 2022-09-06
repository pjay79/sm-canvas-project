import React from "react";
import styled from "styled-components";
import { useFabric } from "../../providers/Fabric";
import { colors } from "../../common/constants";
import { FindingsData } from "../../types/findings";

/* ToDo */
type Props = {
  colors: any;
};

const SCTableRow = styled.tr<Props>`
  text-align: center;
  color: ${({ colors }) => colors.black};
`;

const TableRow: React.FC<{ finding: FindingsData }> = ({ finding }) => {
  const { selected, setSelected } = useFabric();

  const handleMouseOver = () => {
    setSelected(finding.id);
  };

  const handleMouseLeave = () => {
    setSelected("");
  };

  return (
    <SCTableRow
      colors={colors}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={finding.id === selected ? "selected" : "unselected"}
    >
      <td>{finding.type}</td>
      <td>{finding.label}</td>
    </SCTableRow>
  );
};

export default TableRow;
