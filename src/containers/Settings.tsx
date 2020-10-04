import React from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import { ISetting } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

interface IFormInput {
  settings: ISetting;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`;

const Field = styled.div`
  display: flex;
  flex: 1;
`;

const Settings: React.FC<ISetting> = (props) => {
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
        <Field>
          <Controller
            control={control}
            name="markdownTag"
            render={() => (
              <TextField
                variant="outlined"
                margin="normal"
                required
                size="small"
                name="markdownTag"
                label="Markdown tag"
                type="text"
                id="markdownTag"
                onChange={(e) => console.log(e.target.value)}
              />
            )}
          />
          <Controller
            control={control}
            name="typeText"
            render={() => (
              <TextField
                variant="outlined"
                margin="normal"
                required
                size="small"
                name="typeText"
                label="Markdown tag"
                type="text"
                id="typeText"
                onChange={(e) => console.log(e.target.value)}
              />
            )}
          />
          <Controller
            control={control}
            name="shape"
            render={() => (
              <TextField
                variant="outlined"
                margin="normal"
                required
                size="small"
                name="shape"
                label="Markdown tag"
                type="text"
                id="shape"
                onChange={(e) => console.log(e.target.value)}
              />
            )}
          />
          <Button color="secondary" size="small">
            <RemoveIcon fontSize="small" />
          </Button>
        </Field>
      </form>
    </Wrapper>
  );
};

export default Settings;
