import React, { useEffect } from "react";
import styled from "styled-components";
import { useFabric } from "../../providers/Fabric";

const SCCanvasWrapper = styled.div`
`;

const SCCanvas = styled.div`
  background-color: #000000;
  border: 1px solid #EA4E1B;
  border-radius: 8px;
  width: 800px;
  height: 800px;
`;

const Canvas: React.FC = () => {
  const { canvas, setSelected, canvasRef } = useFabric();

  useEffect(() => {
    canvas?.on("mouse:over", (options: any) => {
      setSelected(options.target?.data?.id);
      options.target?.item(0)?.set("fill", "#2FAD66");
      canvas.renderAll();
    });

    canvas?.on("mouse:out", (options: any) => {
      setSelected("");
      options.target?.item(0)?.set("fill", "#FFDD00");
      canvas.renderAll();
    });
  }, [canvas, setSelected]);

  return (
    <SCCanvasWrapper>
      <h4>Canvas</h4>
      <SCCanvas>
        <canvas width="800" height="800" ref={canvasRef} />
      </SCCanvas>
    </SCCanvasWrapper>
  );
};

export default Canvas;