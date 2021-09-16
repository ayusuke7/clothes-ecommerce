import React, { useEffect, useState } from "react";
import CustomTextField from "../TextFormField";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { InputStyles, LightTooltip, useStyles } from "./styles";

export default function CustomSelect({
  name,
  label,
  height,
  options,
  onChange,
  tooltip,
  initialValue,
  fullWidth = false,
  error,
  ...rest
}) {
  const classes = useStyles({ height });
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) return onChange(e);
  };

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue, options]);

  const select = (
    <>
      {name && !onChange && (
        <CustomTextField
          name={name}
          value={value || ""}
          className={classes.hide}
        />
      )}
      <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.label}>{label}</InputLabel>
        <Select
          name={name}
          label={label}
          value={value || ""}
          autoWidth={fullWidth}
          onChange={handleChange}
          input={<InputStyles />}
          MenuProps={{ classes: { paper: classes.menuPaper } }}
          {...rest}
        >
          {options.map((item, i) => (
            <MenuItem key={`gtf-${i}`} value={item?.value}>
              {item?.label}
            </MenuItem>
          ))}
        </Select>
        {error && (
          <Typography variant="caption" className={classes.error}>
            {error}
          </Typography>
        )}
      </FormControl>
    </>
  );

  return tooltip ? (
    <LightTooltip title={tooltip} placement="bottom" arrow>
      {select}
    </LightTooltip>
  ) : (
    select
  );
}
