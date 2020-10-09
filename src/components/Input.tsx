import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

interface InputProps {
  name: string;
  label: string;
  currentValue: string;
  onChangeHandler: (value: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      margin: theme.spacing(1),
    },
  })
);

const CustomInput: React.FC<InputProps> = ({
  name,
  currentValue,
  label,
  onChangeHandler,
}) => {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChangeHandler(event.target.value as string);
  };
  return (
    <div>
      <FormControl className={classes.root}>
        <TextField
          variant="outlined"
          required
          size="small"
          name={name}
          label={label}
          type="text"
          id={name}
          value={currentValue}
          onChange={handleChange}
        />
      </FormControl>
    </div>
  );
};

export default React.memo(CustomInput);
