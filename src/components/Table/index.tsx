import React from "react";
import styled from "styled-components";
import TableRow from "./TableRow";
import { useFabric } from "../../providers/Fabric";
import { colors } from "../../common/constants";

/* ToDo */
type Props = {
  colors: any;
};

const SCTableWrapper = styled.div`
  margin-left: 20px;
  h4 {
    margin: 0;
  }
`;

const SCTable = styled.table<Props>`
  width: 200px;
  height: 800px;
  border-collapse: collapse;}

  td {
    border: 1px solid ${({ colors }) => colors.grey};
    padding: 4px;
  }

  .selected {
    background-color: ${({ colors }) => colors.green};
  }

  .unselected {
    background-color: ${({ colors }) => colors.white};
  }
`;

const Table: React.FC = () => {
  const { findings } = useFabric();

  return (
    <SCTableWrapper>
      <h4>Findings</h4>
      <SCTable colors={colors}>
        <tbody>
          {findings?.map((finding: any) => (
            <TableRow key={finding.id} finding={finding} />
          ))}
        </tbody>
      </SCTable>
    </SCTableWrapper>
  );
};

export default Table;
