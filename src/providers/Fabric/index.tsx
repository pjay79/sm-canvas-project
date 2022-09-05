import React, { 
  createContext,
  useContext, 
  useState,
  useEffect,
  useRef,
} from 'react';
import { fabric } from "fabric";
import { getFindings } from "../../services/SeeModeAPI";
import { DATA_TYPES } from '../../constants/enums';
// import { clockAngle } from '../../utils/clockAngle';

export const FabricContext = createContext<any>([]);

export const useFabric = () => useContext(FabricContext);

export const FabricProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [ canvas, setCanvas ] = useState<fabric.Canvas | null>(null);
  const [ findings, setFindings ] = useState<Array<any>>([]);
  const [ selected, setSelected ] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFindings().catch(e => console.log(e));
      setFindings(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const options = {};
    const canvas = new fabric.Canvas(canvasRef.current, options);
    canvas.toJSON(['data']);
    setCanvas(canvas);

    return () => {
      setCanvas(null);
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    const addFinding = ({ x, y, label, id, type, hours, minutes, distanceFromCentre }: any) => {
      if (!canvas) {
        return;
      }

      const circle = new fabric.Circle({
        radius: 10,
        fill: selected === id ? "#2FAD66" :"#FFDD00",
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
        group = new fabric.Group([circle, text], {
          left: 400,
          top: 400,
          selectable: true,
          hasBorders: false,
          hasControls: false,
        });
      } 

      group.set('data', {
        id: id,
      });

      canvas.add(group);
    };

    findings.forEach(addFinding);
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
      }
    }>
      {children}
    </FabricContext.Provider>
  );
};