import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const table = props => (
  <BootstrapTable
    keyField="id"
    data={props.data}
    columns={props.columns}
    striped
    hover
  />
);

export default table;
