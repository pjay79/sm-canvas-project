import React, { useEffect, useState } from "react";
import { getFindings } from "../../services/SeeModeAPI";
import Header from "../../components/Header";
import Canvas from "../../components/Canvas";
import Table from "../../components/Table";
import SCLanding from "./css";

const Landing: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]);
  
  const fetchData = async () => {
    try {
      const result = await getFindings();
      setData(result);
    } catch(e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <SCLanding>
      <Header />
      <Canvas findings={data} />
      <Table findings={data} />
    </SCLanding>
  );
};

export default Landing;