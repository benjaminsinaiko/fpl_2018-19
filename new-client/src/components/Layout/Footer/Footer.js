import React from 'react';

// import styles from './Footer.module.css';

export default () => {
  return (
    <footer className={`bg mt-5 p-4 text-center`}>
      Copyright &copy; {new Date().getFullYear()} @ChicagoSeagulls
    </footer>
  );
};
