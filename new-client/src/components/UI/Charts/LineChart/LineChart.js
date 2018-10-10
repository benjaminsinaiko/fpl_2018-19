import React from 'react';
import { Line } from 'react-chartjs-2';

const lineChart = props => {
  // console.log('[LineChart]', props.events);

  console.log(props.data);

  return (
    <div className="container">
      <div className="row">
        <Line data={props.data} options={props.options} />
      </div>
    </div>
  );
};

export default lineChart;
