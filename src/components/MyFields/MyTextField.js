import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      variant="outlined"
    />
  );
};

export default MyTextField;
