import React from 'react';
import spinner from '../../img/spinner.gif';

export default () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="loading..."
    />
  );
};
