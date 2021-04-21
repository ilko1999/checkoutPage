/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './Dropdown.css';
import { useField } from 'formik';
import { PublicRounded } from '@material-ui/icons';
import cn from 'classnames';

function Dropdown({ options, prompt, onChange, ...props }) {
  const [open, setOpen] = useState(false);
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <>
      <div className="dropdown">
        <label htmlFor={props.id}>{props.id}</label>
        <div className="control" onClick={() => setOpen((prev) => !prev)}>
          <div className={cn('inputBase selected-value')}>
            <i>
              <PublicRounded style={{ fill: '#828282' }} />
            </i>
            {field && field.value ? (
              <span className="value">{field.value}</span>
            ) : (
              <span className="value">{prompt}</span>
            )}
          </div>
          <div className={`arrow ${open ? 'open' : null}`} />
        </div>
        <div className={`options ${open ? 'open' : null}`}>
          {options.map((option, i) => (
            <div
              key={i}
              className="option"
              onClick={() => {
                setValue(option.name);
                setOpen(false);
              }}
            >
              {option.name}
            </div>
          ))}
        </div>
      </div>
      <p>{errorText}</p>
    </>
  );
}

export default Dropdown;
