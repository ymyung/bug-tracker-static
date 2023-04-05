import React from 'react'
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

import "./BarChart.scss"

const BarChart = ({chartData}) => {
  return (
    <div className="bar">
        <Bar data={chartData} />
    </div>
  )
}

export default BarChart