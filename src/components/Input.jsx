import React from 'react';

import './Comp.css'

function Input({ onChange }) {
  return (
    <input
      type="text"
      placeholder="Pesquisar usuário"
      onChange={onChange}
    />
  );
}

export default Input;
