/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useField } from 'formik';
import './MyTextField2.css';
import cn from 'classnames';

function MyTextField2({ placeholder, ...props }) {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <div className="formField">
      <div className={cn('inputBase formField', { hasError: errorText })}>
        <label htmlFor={props.id}>{props.id}</label>
        <input id={props.id} {...field} placeholder={placeholder} />
        <i>{props.children}</i>
      </div>
      {errorText ? <p>{errorText}</p> : null}
    </div>
  );
}

export default MyTextField2;
