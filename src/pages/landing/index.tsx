import React from "react";
import { useFindings } from "../../providers/Findings";
import Header from "../../components/Header";
import Canvas from "../../components/Canvas";
import Table from "../../components/Table";
import SCLanding from "./css";

const Landing: React.FC = () => {
  const { findings } = useFindings();

  return (
    <SCLanding>
      <Header />
      <div className="container">
        <Canvas findings={findings} />
        <Table findings={findings} />
      </div>
    </SCLanding>
  );
};

export default Landing;