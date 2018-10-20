import React from 'react';
import BarChart from '../../UI/Charts/BarChart/BarChart';

const playerBenchData = props => {
  // props data
  // console.log(props.player);

  // Set Labels
  let labels = props.player.history.map(gameweek => `GW ${gameweek.event}`);

  // Set Weekly Points
  let weekPoints = {};
  weekPoints.label = 'GW Points';
  weekPoints.type = 'bar';
  weekPoints.backgroundColor = '#00ff85';
  weekPoints.data = props.player.history.map(gameweek => gameweek.points);

  // Set Transfer Costs
  let transferCost = {};
  transferCost.label = 'Transfer Cost';
  transferCost.type = 'bar';
  transferCost.backgroundColor = '#04f5ff';
  transferCost.data = props.player.history.map(
    gameweek => gameweek.event_transfers_cost
  );

  // Set Weekly Points On Bench
  let benchPoints = {};
  benchPoints.label = 'Points on Bench';
  benchPoints.type = 'bar';
  // benchPoints.borderColor = '#e90052';
  benchPoints.backgroundColor = '#eaff04';
  benchPoints.data = props.player.history.map(
    gameweek => -gameweek.points_on_bench
  );

  const data = {
    labels: labels,
    datasets: [transferCost, weekPoints, benchPoints]
  };

  const options = {
    responsive: true,
    title: { display: true, text: 'Weekly Points', fontSize: '28' },
    tooltips: {
      mode: 'label',
      titleMarginBottom: 15,
      callbacks: {
        title: function(tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        }
        // footer: function([tooltipItem], data) {
        //   var dataset1 = data['datasets'][0];
        //   var dataset2 = data['datasets'][1];
        //   var percent = Math.round(
        //     (dataset1['data'][tooltipItem['index']] /
        //       dataset2['data'][tooltipItem['index']]) *
        //       100
        //   );
        //   // return '(' + percent + '%)';
        //   return `Percent of Total (${percent}%)`;
        // }
      }
    },
    elements: { line: { fill: false } },
    scales: {
      xAxes: [{ display: true, stacked: true, gridLines: { display: false } }],
      yAxes: [
        {
          type: 'linear',
          display: true,
          stacked: true,
          scaleLabel: { display: true, labelString: 'Gameweek Points' },
          position: 'left',
          gridLines: { display: true },
          ticks: { suggestedMax: 100, suggestedMin: -10 },
          labels: { show: true }
        }
      ]
    }
  };

  return <BarChart data={data} options={options} />;
};

export default playerBenchData;
