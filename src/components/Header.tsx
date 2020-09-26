import React from "react";

export interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => (
  <div>
    <h1>{props.title}</h1>
  </div>
);

export default Header;
