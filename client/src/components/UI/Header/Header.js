import React from 'react';

import styles from './Header.module.css';

const header = props => {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <div
          className={`jumbotron jumbotron-fluid page-header ${styles.Header}`}
        >
          <div className="container">
            <small className="lead">2018/19 Season</small>
            <h1 className="display-4">Fish & Crumple-Ones</h1>
            <hr />
            <small>{props.page}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
