import React from "react";
import styled from "styled-components";

const SCHeader = styled.header`
  text-align: center;
`;

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SCHeader>
      <h1>{title}</h1>
    </SCHeader>
  )
}

export default Header;