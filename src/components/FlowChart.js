import React from 'react'

import "./FlowChart.scss"

const FlowChart = ({chartData}) => {
    return (
        <div className='flow-chart'>
            <div className="flow-chart--title">Ticket Type</div>
            <div className="flow-chart--body">
                <div className="flow-chart--body-left">
                    <div className="box-left box-left-top">UI</div>
                    <div className="box-left box-left-middle">Performance</div>
                    <div className="box-left box-left-bottom">Bug</div>
                </div>
                <div className="flow-chart--body-right">
                    <div className="box-right">Tickets: {chartData[0].count}</div>
                    <div className="box-right">Tickets: {chartData[1].count}</div>
                    <div className="box-right">Tickets: {chartData[2].count}</div>
                </div>
            </div>
        </div>
    )
}

export default FlowChart