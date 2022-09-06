import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { fabric } from "fabric";
import { getFindings } from "../../services/SeeModeAPI";
import { DATA_TYPES } from "../../common/constants";
import { getAngle, getCoords } from "../../common/utils";
import { FindingsData } from "../../types/findings";
import { colors } from "../../common/constants";

export interface FabricContextProps {
  findings: Array<FindingsData> | null;
  selected: string;
  setSelected: (selected: string) => void;
  canvas: fabric.Canvas | null;
  setCanvas: (canvas: fabric.Canvas) => void;
  canvasRef: any;
}

export const FabricContext = createContext<FabricContextProps>({
  findings: null,
  selected: "",
  setSelected: () => {},
  canvas: null,
  setCanvas: () => {},
  canvasRef: null,
});

export const useFabric = () => useContext(FabricContext);

export const FabricProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [findings, setFindings] = useState<Array<FindingsData> | null>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFindings();
      setFindings(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const options = {};
    const canvas = new fabric.Canvas(canvasRef.current, options);

    canvas.toJSON(["data"]);

    setCanvas(canvas);

    return () => {
      setCanvas(null);
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    const addFinding = ({ x, y, label, id, type, hours, minutes, distanceFromCenter }: any) => {
      if (!canvas) {
        return;
      }

      /* ToDo: refactor, consider moving objects, text, labels, groups to separate files/folders if they are re-used elsewhere */
      const circle = new fabric.Circle({
        radius: 10,
        fill: selected === id ? colors.green : colors.yellow,
        left: 0,
        top: 0,
        selectable: true,
        hasBorders: false,
        hasControls: false,
      });

      const text = new fabric.Text(label, {
        fontFamily: "Arial",
        fontSize: 12,
        fill: colors.white,
        left: 24,
        top: 4,
        selectable: true,
        hasBorders: false,
        hasControls: false,
      });

      let group: any;

      if (type === DATA_TYPES.ABSOLUTE) {
        group = new fabric.Group([circle, text], {
          left: x,
          top: y,
          selectable: true,
          hasBorders: false,
          hasControls: false,
        });
      }

      if (type === DATA_TYPES.RADIAL) {
        const angle = getAngle(hours, minutes);
        const [x, y] = getCoords(distanceFromCenter, angle);

        group = new fabric.Group([circle, text], {
          /* ToDo: refactor, try setting the origin to center of canvas */
          left: 400 + x,
          top: 400 + y,
          selectable: true,
          hasBorders: false,
          hasControls: false,
        });
      }

      group.set("data", {
        id: id,
      });

      canvas.add(group);
    };

    /* 
    ToDo: refactor, currently when highlighting a finding on the table a new object is added to the canvas on top of an 
    existing object, temp fix to clear the canvas */
    canvas?.clear();

    findings?.forEach(addFinding);
  }, [findings, canvas, selected]);

  return (
    <FabricContext.Provider
      value={{
        findings,
        selected,
        setSelected,
        canvas,
        setCanvas,
        canvasRef,
      }}
    >
      {children}
    </FabricContext.Provider>
  );
};
