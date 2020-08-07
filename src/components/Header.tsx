import React from "react";
import styld from "styled-components";

export interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => (
  <div>
    <h1>{props.title}</h1>
  </div>
);

export default Header;
