import React, { useEffect } from "react";
import styled from "styled-components";
import { useFabric } from "../../providers/Fabric";
import { colors } from "../../common/constants";

/* ToDo */
type Props = {
  colors: any;
};

const SCCanvasWrapper = styled.div`
  h4 {
    margin: 0;
  }
`;

const SCCanvas = styled.div<Props>`
  background-color: ${({ colors }) => colors.red};
  border-radius: 8px;
  width: 800px;
  height: 800px;
`;

const Canvas: React.FC = () => {
  const { canvas, setSelected, canvasRef } = useFabric();

  /*   ToDo: refactor */
  useEffect(() => {
    canvas?.on("mouse:over", (options: any) => {
      setSelected(options.target?.data?.id);
      options.target?.item(0)?.set("fill", colors.green);
      canvas.renderAll();
    });

    canvas?.on("mouse:out", (options: any) => {
      setSelected("");
      options.target?.item(0)?.set("fill", colors.yellow);
      canvas.renderAll();
    });
  }, [canvas, setSelected]);

  return (
    <SCCanvasWrapper>
      <h4>Canvas</h4>
      <SCCanvas colors={colors}>
        <canvas width="800" height="800" ref={canvasRef} />
      </SCCanvas>
    </SCCanvasWrapper>
  );
};

export default Canvas;
