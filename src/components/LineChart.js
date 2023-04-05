import React from 'react'
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

import "./LineChart.scss"

const LineChart = ({chartData}) => {
  return (
    <div className="line">
        <Line data={chartData} />
    </div>
  )
}

export default LineChart