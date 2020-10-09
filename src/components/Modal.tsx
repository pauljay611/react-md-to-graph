import React, { useCallback, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import styld from "styled-components";
import Settings from "../containers/Settings";

import { ISetting, Tags, ShapeNames } from "../types";

export interface ModalProps {
  openModal: (val: boolean) => void;
}

const Wrapper = styld.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0,0,0,0.5);
`;

const Block = styld.div`
    position: relative;
    width: 800px;
    height: 600px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px 30px;
`;

const defaultSettings: ISetting = {
  id: uuidv4(),
  markdownTag: Tags.H1,
  typeText: "Phase",
  shape: ShapeNames.Circle,
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const modalRef = useRef();

  const [settings, setSettings] = useState<ISetting[]>([defaultSettings]);

  const addSettingsHandler = useCallback(() => {
    const newSettings = [...settings, { ...defaultSettings, id: uuidv4() }];
    setSettings(newSettings);
  }, [settings]);

  const removeSettingsHandler = useCallback(
    (index) => () => {
      const newSettings = settings.filter((_, i) => i !== index);
      setSettings(newSettings);
    },
    [settings]
  );

  const onChangeSettingsHandler = useCallback(
    (index) => (value: ISetting) => {
      const newSettings = [...settings];
      newSettings[index] = value;
      setSettings(newSettings);
    },
    [settings]
  );

  return (
    <Wrapper
      onClick={(e) => {
        if (e.target !== modalRef.current) return;
        props.openModal(false);
      }}
      ref={modalRef}
    >
      <Block>
        {settings.map((setting, settingIndex) => (
          <Settings
            removeHandler={removeSettingsHandler(settingIndex)}
            onChangeHandler={onChangeSettingsHandler(settingIndex)}
            key={setting.id}
            {...setting}
          ></Settings>
        ))}
        <Button
          color="primary"
          size="small"
          onClick={addSettingsHandler}
          variant="contained"
        >
          <AddIcon fontSize="small" />
        </Button>
      </Block>
    </Wrapper>
  );
};

export default Modal;
