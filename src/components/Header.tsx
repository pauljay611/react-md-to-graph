import React from "react";
import styld from "styled-components";

export interface HeaderProps {
  title: string;
}

const Wrapper = styld.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 1.8em;
  background-color: #F8F8F8;
  padding: 0 5px;
`;

const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
  <Wrapper>
    <h1>{props.title}</h1>
    <h1>{props.title}</h1>
  </Wrapper>
);

export default Header;
