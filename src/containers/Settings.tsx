import React from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import Grid from "@material-ui/core/Grid";
import { ISetting, Tags, ShapeNames } from "../types";
import Select from "../components/Select";
import Input from "../components/Input";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
    },
  })
);

interface IFormInput {
  settings: ISetting;
}

interface ISettingsHandler {
  removeHandler: () => void;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  width: 100%;
`;

const Settings: React.FC<ISetting & ISettingsHandler> = ({
  removeHandler,
  ...props
}) => {
  const { handleSubmit, control } = useForm<IFormInput>({
    defaultValues: {
      settings: {
        ...props,
      },
    },
  });
  const classes = useStyles();
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2}>
            <Controller
              control={control}
              name="markdownTag"
              render={() => (
                <Select
                  options={Object.keys(Tags)}
                  name="markdownTag"
                  label="Markdown Tag"
                  currentValue={Tags.H1}
                  onChangeHandler={(v) => console.log(v)}
                />
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <Controller
              control={control}
              name="shape"
              render={() => (
                <Select
                  options={Object.keys(ShapeNames)}
                  name="shape"
                  label="Shape"
                  currentValue={ShapeNames.Circle}
                  onChangeHandler={(v) => console.log(v)}
                />
              )}
            />
          </Grid>
          <Grid item xs={5}>
            <Controller
              control={control}
              name="typeText"
              render={() => (
                <Input
                  name="typeText"
                  label="Type Text"
                  currentValue={ShapeNames.Circle}
                  onChangeHandler={(v) => console.log(v)}
                />
              )}
            />
          </Grid>
          <Grid item xs={2}>
            <div>
              <Button
                color="secondary"
                size="small"
                variant="contained"
                onClick={() => removeHandler()}
              >
                <RemoveIcon fontSize="small" />
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Wrapper>
  );
};

export default Settings;
