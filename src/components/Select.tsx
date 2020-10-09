import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

interface SelectProps {
  options: string[];
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

const CustomSelect: React.FC<SelectProps> = ({
  options,
  name,
  currentValue,
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
          select
          label={name}
          id={name}
          size="small"
          value={currentValue}
          onChange={handleChange}
          variant="outlined"
        >
          {options.map((option, index) => (
            <MenuItem key={`${option}-${index}`} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
