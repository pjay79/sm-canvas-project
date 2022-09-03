import React, { useState, useEffect } from "react";
// https://github.com/fabricjs/fabric.js
import { fabric } from "fabric";
import styled from "styled-components";

const SCCanvas = styled.div`
  background-color: #eeeeee;
  border: 1px solid #ddd;
  width: 500px;
  height: 500px;
`;

const Canvas: React.FC<{ findings: Array<any> }> = ({ findings }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [techTaskCanvas, setTechTaskCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    const options = {};
    const canvas = new fabric.Canvas(canvasRef.current, options);
    setTechTaskCanvas(canvas);

    return () => {
      setTechTaskCanvas(null);
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    const addFinding = ({ x, y, label }: any) => {
      if (!techTaskCanvas) {
        return;
      }

      const circle = new fabric.Circle({
        radius: 10,
        fill: "green",
        left: 0,
        top: 0,
        selectable: false,
        hasBorders: false,
        hasControls: false,
      });

      const text = new fabric.Text(label, {
        fontFamily: "Arial",
        fontSize: 12,
        fill: "black",
        left: 24,
        top: 0,
        selectable: false,
        hasBorders: false,
        hasControls: false,
      });

      const finding = new fabric.Group([circle, text], {
        left: x,
        top: y,
        selectable: false,
        hasBorders: false,
        hasControls: false,
      });

      techTaskCanvas.add(finding);
    };

    findings.forEach(addFinding);
  }, [findings, techTaskCanvas]);

  return (
    <SCCanvas>
      <h2>Canvas</h2>
      <canvas width="800" height="800" ref={canvasRef} />
    </SCCanvas>
  );
};

export default Canvas;