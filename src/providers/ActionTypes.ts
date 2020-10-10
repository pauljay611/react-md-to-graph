import { ISetting } from "../types";

export enum RawActionType {
  SetRawText = "set-rawText",
}

export enum SettingsActionType {
  AddSettings = "add-settings",
  RemoveSettings = "remove-settings",
  SetSettings = "set-settings",
}

export interface SettingsPayload {
  index: number;
  value: ISetting;
}

type RawTextAction = {
  type: RawActionType;
  payload: { value: string };
};

type SettingsAction = {
  type: SettingsActionType;
  payload?: { value: SettingsPayload | number };
};

export type Actions = RawTextAction | SettingsAction;
