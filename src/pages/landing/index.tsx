import React from "react";
import Header from "../../components/Header";
import Canvas from "../../components/Canvas";
import Table from "../../components/Table";
import SCLanding from "./css";

const Landing: React.FC = () => {
  return (
    <SCLanding>
      <Header title="Canvas + Fabric Demo" />
      <div className="container">
        <Canvas />
        <Table />
      </div>
    </SCLanding>
  );
};

export default Landing;
