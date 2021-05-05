import React from 'react';
import ButtonLoader from '../../animation/ButtonLoader/ButtonLoader';
import './MyButton.css';

function MyButton(props) {
  return (
    <div>
      <button className="continueButton" {...props}>
        {!props.isLoading ? 'Continue' : <ButtonLoader/>}
      </button>
    </div>
  );
}

export default MyButton;
