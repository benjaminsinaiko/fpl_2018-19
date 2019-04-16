import React from 'react'
import LineChart from '../../UI/Charts/LineChart/LineChart'
import * as zoom from 'chartjs-plugin-zoom'

const AllPlayersPoints = props => {
  const colors = [
    '#f06292',
    '#ba68c8',
    '#64b5f6',
    '#4db6ac',
    '#aed581',
    '#fff176',
    '#ffb74d',
    '#ff8a65'
  ]

  let labels = props.players[0].history.map(gameweek => `GW ${gameweek.event}`)

  let totalPoints = []
  props.players.forEach((player, index) => {
    let weeklyPoints = {}
    weeklyPoints.label = player.entry.name
    weeklyPoints.type = 'line'
    weeklyPoints.borderColor = colors[index]
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
      xAxes: [
        {
          display: true,
          stacked: true,
          gridLines: { display: false },
          ticks: {
            maxRotation: 0
          }
        }
      ],
      yAxes: [
        {
          type: 'linear',
          display: true,
          scaleLabel: { display: true, labelString: 'Points' },
          position: 'left',
          gridLines: { display: true },
          ticks: {
            min: 0,
            max: 2500
          },
          labels: { show: true }
        }
      ]
    },
    pan: {
      enabled: true,
      mode: 'x'
    },
    zoom: {
      enabled: true,
      mode: 'xy',
      rangeMin: {
        x: 'GW 1',
        y: 0
      },
      rangeMax: {
        x: 'GW 38',
        y: 2500
      },
      speed: 0.01
    }
  }

  return <LineChart data={data} options={options} />
}

export default AllPlayersPoints
