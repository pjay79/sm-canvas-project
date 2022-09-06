import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/sm.jpeg";
import { colors } from "../../common/constants";

/* ToDo */
type Props = {
  colors: any;
};

const SCHeader = styled.header<Props>`
  text-align: center;
  color: ${({ colors }) => colors.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans";
`;

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <SCHeader colors={colors}>
      <img src={Logo} width="auto" height="75" alt="logo" />
      <h1>{title}</h1>
    </SCHeader>
  );
};

export default Header;
