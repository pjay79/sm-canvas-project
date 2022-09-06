import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/sm.jpeg";
import Github from "../../assets/images/github-light.png";
import { colors } from "../../common/constants";

/* ToDo */
type Props = {
  colors: any;
};

const SCHeader = styled.header<Props>`
  text-align: center;
  color: ${({ colors }) => colors.white};
  max-width: 1020px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans";
`;

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SCHeader colors={colors}>
      <img src={Logo} width="auto" height="75" alt="logo" />
      <h1>{title}</h1>
      <a href="https://github.com/pjay79/sm-canvas-project" target="_blank" rel="noreferrer">
        <img src={Github} width="auto" height="25" alt="logo" />
      </a>
    </SCHeader>
  );
};

export default Header;
