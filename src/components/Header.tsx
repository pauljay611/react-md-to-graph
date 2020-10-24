import React from "react";
import styld from "styled-components";
import Button from "@material-ui/core/Button";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import SettingsIcon from "@material-ui/icons/Settings";

export interface HeaderProps {
  title: string;
  openModal: (val: boolean) => void;
  saveGraph: () => void;
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

const RightBlock = styld.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;
`;

const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
  <Wrapper>
    <h1>{props.title}</h1>
    <RightBlock>
      <Button
        color="primary"
        size="small"
        onClick={() => props.saveGraph()}
        variant="contained"
        style={{ marginRight: "10px" }}
      >
        <SaveAltIcon fontSize="small"></SaveAltIcon>
      </Button>
      <Button
        color="primary"
        size="small"
        variant="outlined"
        onClick={() => props.openModal(true)}
      >
        <SettingsIcon fontSize="small"></SettingsIcon>
      </Button>
    </RightBlock>
  </Wrapper>
);

export default Header;
