import React from "react";
import styld from "styled-components";

export interface HeaderProps {
  title: string;
  openModal: (val: boolean) => void;
}

const Wrapper = styld.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 1.8em;
  background-color: #F8F8F8;
  padding: 0 20px;
`;

const SettingButton = styld.button`
  width: 80px;
  height: 32px;
  background-color: #337ab7;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover{
    background-color: #286090;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
  <Wrapper>
    <h1>{props.title}</h1>
    <SettingButton onClick={() => props.openModal(true)}>
      Settings
    </SettingButton>
  </Wrapper>
);

export default Header;
