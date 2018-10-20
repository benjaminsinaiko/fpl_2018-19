import React from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './BarChart.module.css';

const barChart = props => {
  return (
    <div className={`container ${styles.Chart}`}>
      <div className="row">
        <Bar data={props.data} options={props.options} />
      </div>
    </div>
  );
};

export default barChart;
