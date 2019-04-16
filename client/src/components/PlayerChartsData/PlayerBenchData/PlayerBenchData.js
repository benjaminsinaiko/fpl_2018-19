import React from 'react'
import BarChart from '../../UI/Charts/BarChart/BarChart'

const playerBenchData = props => {
  // Set Labels
  let labels = props.player.history.map(gameweek => `GW ${gameweek.event}`)

  // Set Weekly Points
  let weekPoints = {}
  weekPoints.label = 'GW Points'
  weekPoints.type = 'bar'
  weekPoints.backgroundColor = '#00ff85'
  weekPoints.data = props.player.history.map(gameweek => gameweek.points)

  // Set Transfer Costs
  let transferCost = {}
  transferCost.label = 'Transfer Cost'
  transferCost.type = 'bar'
  transferCost.backgroundColor = '#04f5ff'
  transferCost.data = props.player.history.map(
    gameweek => gameweek.event_transfers_cost
  )

  // Set Weekly Points On Bench
  let benchPoints = {}
  benchPoints.label = 'Points on Bench'
  benchPoints.type = 'bar'
  benchPoints.backgroundColor = '#eaff04'
  benchPoints.data = props.player.history.map(
    gameweek => -gameweek.points_on_bench
  )

  const data = {
    labels: labels,
    datasets: [transferCost, weekPoints, benchPoints]
  }

  const options = {
    responsive: true,
    title: { display: true, text: 'Weekly Points', fontSize: '28' },
    tooltips: {
      mode: 'label',
      titleMarginBottom: 15,
      callbacks: {
        title: function(tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']]
        }
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
  }

  return <BarChart data={data} options={options} />
}

export default playerBenchData
