import React from 'react'
import LineChart from '../../UI/Charts/LineChart/LineChart'

const AllPlayersPoints = props => {
  console.log(props)

  let labels = props.players[0].history.map(gameweek => `GW ${gameweek.event}`)

  let totalPoints = []
  props.players.forEach(player => {
    let weeklyPoints = {}
    weeklyPoints.label = player.entry.name
    weeklyPoints.type = 'line'
    weeklyPoints.data = player.history.map(week => week.total_points)

    totalPoints.push(weeklyPoints)
  })

  let weekPoints = {}
  weekPoints.label = 'GW Points'
  weekPoints.type = 'line'
  weekPoints.data = props.players.map(player => {
    return player.history.map(gw => gw.total_points)
  })

  const data = {
    labels,
    datasets: totalPoints
  }

  const options = {
    responsive: true,
    title: { display: true, text: 'Overall Points', fontSize: '28' },
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
          scaleLabel: { display: true, labelString: 'Points' },
          position: 'left',
          gridLines: { display: true },
          labels: { show: true }
        }
      ]
    }
  }

  console.log(weekPoints)

  return <LineChart data={data} options={options} />
}

export default AllPlayersPoints
