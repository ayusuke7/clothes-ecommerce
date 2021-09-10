import { InputAdornment, TextField } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import MaskedInput from "react-text-mask";
import { useStyles } from "./styles";

function CustomMaskedInput({
  inputRef,
  showMask,
  guide,
  mask,
  money,
  ...props
}) {
  return (
    <MaskedInput
      {...props}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
      showMask={showMask}
    />
  );
}

export default function CustomTextField({
  mask,
  width,
  height,
  showMask,
  iconLeft,
  iconRigth,
  textAlign,
  className,
  ...rest
}) {
  const classes = useStyles({ height, width, textAlign });

  const maskProps = mask && {
    inputComponent: CustomMaskedInput,
    inputProps: { mask, showMask },
  };

  const startIcon = () => {
    if (iconLeft) {
      return <InputAdornment position="start">{iconLeft}</InputAdornment>;
    }
  };

  const endIcon = () => {
    if (iconRigth) {
      return <InputAdornment position="end">{iconRigth}</InputAdornment>;
    }
  };

  return (
    <TextField
      {...rest}
      className={clsx(classes.customInput, className)}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        ...maskProps,
        startAdornment: startIcon(),
        endAdornment: endIcon(),
      }}
    />
  );
}
