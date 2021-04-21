/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './MyCheckbox.css';
import cn from 'classnames';
import { useField } from 'formik';

const MyCheckbox = ({ label, type, name }) => {
  const [field, _] = useField(name);
  return (
    <>
      <label className="controlCheck">
        <input
          {...field}
          type={type}
          className={cn('controlInput', 'hidden')}
        />
        <span className="controlIndicator" />
        {label}
      </label>
    </>
  );
};

export default MyCheckbox;
