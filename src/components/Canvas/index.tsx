import React, { useState, useEffect } from "react";
// https://github.com/fabricjs/fabric.js
import { fabric } from "fabric";
import styled from "styled-components";
import { useFindings } from "../../providers/Findings";

const SCCanvasWrapper = styled.div`
`;

const SCCanvas = styled.div`
  background-color: #000000;
  border: 1px solid #ddd;
  width: 800px;
  height: 800px;
`;

const Canvas: React.FC<{ findings: Array<any> }> = ({ findings }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [techTaskCanvas, setTechTaskCanvas] = useState<any>(null);
  const { selected, setSelected } = useFindings();

  useEffect(() => {
    const options = {};
    const canvas = new fabric.Canvas(canvasRef.current, options);
    canvas.toJSON(['data']);
    setTechTaskCanvas(canvas);

    return () => {
      setTechTaskCanvas(null);
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    const addFinding = ({ x, y, label, id }: any) => {
      if (!techTaskCanvas) {
        return;
      }

      const circle = new fabric.Circle({
        radius: 10,
        fill: "#ffdd00",
        left: 0,
        top: 0,
        selectable: true,
        hasBorders: false,
        hasControls: false,
      });

      const text = new fabric.Text(label, {
        fontFamily: "Arial",
        fontSize: 12,
        fill: "#FFFFFF",
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

      finding.set('data', {
        id: id,
      })

      techTaskCanvas.add(finding);
    };

    findings.forEach(addFinding);
  }, [findings, techTaskCanvas]);

  useEffect(() => {
    techTaskCanvas?.on("mouse:over", (options: any) => {
      setSelected(options.target.data.id);
    });
  }, [techTaskCanvas, setSelected]);

  return (
    <SCCanvasWrapper>
      <h2>Canvas</h2>
      <SCCanvas>
        <canvas width="800" height="800" ref={canvasRef} />
      </SCCanvas>
    </SCCanvasWrapper>
  );
};

export default Canvas;