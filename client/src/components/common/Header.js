import React from 'react';

const Header = ({ page }) => {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="jumbotron jumbotron-fluid page-header">
          <div className="container">
            <small className="lead">2018/19 Season</small>
            <h1 className="display-4 ">Fish & Crumple-Ones</h1>
            <hr />
            <small>{page}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
