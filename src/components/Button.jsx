import React from 'react';
import './Comp.css'

function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Pesquisar
    </button>
  );
}

export default Button;
