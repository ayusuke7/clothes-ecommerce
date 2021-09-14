import React, { useEffect, useRef } from "react";
import CustomTextField from "../TexfField";
import { useField } from "@unform/core";

export default function TextFormField({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      error: error,
    });
  }, [error, fieldName, registerField]);

  return (
    <CustomTextField
      {...rest}
      variant="outlined"
      inputRef={inputRef}
      defaultValue={defaultValue}
      error={Boolean(error)}
      helperText={error}
    />
  );
}
