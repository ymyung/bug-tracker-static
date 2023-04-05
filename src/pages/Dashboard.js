import React, { useEffect, useState } from 'react'

import useLineData from '../components/useLineData'
import usePieData from '../components/usePieData'
import useFlowData from '../components/useFlowData'
import useBarData from '../components/useBarData'

import BarChart from "../components/BarChart"
import LineChart from "../components/LineChart"
import PieChart from "../components/PieChart"
import FlowChart from '../components/FlowChart'
import "./Dashboard.scss"

const Dashboard = () => {
    // graphType: Which graph to render
    // allGraphs: Array of all graphs
    const [graphType, setGraphType] = useState("priority-graph")
    const [allGraphs, setAllGraphs] = useState([])

    // Graph Button Classes
    const [priorityButton, setPriorityButton] = useState('graph-button-priority-on')
    const [dateButton, setDateButton] = useState('graph-button-date')
    const [typeButton, setTypeButton] = useState('graph-button-type')
    const [historyButton, setHistoryButton] = useState('graph-button-history')

    // initialize chart variables
    let lineData = useLineData()
    let lineData0 = lineData[0].count
    let lineData1 = lineData[1].count
    let lineData2 = lineData[2].count
    let lineData3 = lineData[3].count
    let lineData4 = lineData[4].count

    let pieData = usePieData()
    let pieData0 = pieData[0].count
    let pieData1 = pieData[1].count
    let pieData2 = pieData[2].count
    let pieData3 = pieData[3].count

    let flowData = useFlowData()
    let flowData0 = flowData[0].count
    let flowData1 = flowData[1].count
    let flowData2 = flowData[2].count

    let barData = useBarData()
    let barData0 = barData[0].count
    let barData1 = barData[0].count
    let barData2 = barData[0].count
    let barData3 = barData[0].count
    let barData4 = barData[0].count

    // initialize charts
    const [barChartData, setBarChartData] = useState({})
    const [pieChartData, setPieChartData] = useState({})
    const [flowChartData, setFlowChartData] = useState({})
    const [lineChartData, setLineChartData] = useState({})

    // set priority graph as homepage on render
    useEffect(() => {
        setAllGraphs(["priority-graph", "date-graph", "type-graph", "history-graph"]) 
    }, [])

    // set pie graph on render
    useEffect(() => {
        setPieChartData({
            labels: pieData.map(item => item.priority),
            datasets: [
                {
                    label: "Open Tickets",
                    data: pieData.map(item => item.count),
                    backgroundColor: [
                        'rgba(255, 124, 255, 1)',
                        'rgba(105, 201, 222, 0.8)',
                        'rgba(214, 26, 234, 0.8)',
                        'rgba(234, 26, 26, 0.8)',
                        'rgba(255, 124, 74, 1)'
                    ],
                    borderColor: [
                        'rgba(105, 201, 222, 0.8)'
                    ]
                }
            ]})
    }, [pieData0, pieData1, pieData2, pieData3])

    // set line graph on render
    useEffect(() => {
        setLineChartData({
            labels: lineData.map(item => item.date),
            datasets: [
                {
                    label: "Resolved Tickets per Month",
                    data: lineData.map(item => item.count),
                    backgroundColor: [
                        'rgba(214, 26, 234, 0.8)',
                        'rgba(105, 201, 222, 0.8)',
                        'rgba(234, 26, 26, 0.8)',
                        'rgba(255, 124, 255, 1)',
                        'rgba(255, 124, 74, 1)'
                    ],
                    borderColor: [
                        'rgba(105, 201, 222, 0.8)'
                    ]
                }
            ]})

    }, [lineData0, lineData1, lineData2, lineData3, lineData4])

    // set flow graph on render
    useEffect(() => {
        setFlowChartData({
            ...flowData
        })
    }, [flowData0, flowData1, flowData2])

    // set bar graph on render
    useEffect(() => {
        setBarChartData({
            labels: barData.map(item => item.date),
            datasets: [
                {
                    label: "Opened Tickets per Month",
                    data: barData.map(item => item.count),
                    backgroundColor: [
                        'rgba(214, 26, 234, 0.8)',
                        'rgba(105, 201, 222, 0.8)',
                        'rgba(234, 26, 26, 0.8)',
                        'rgba(255, 124, 255, 1)',
                        'rgba(255, 124, 74, 1)'
                    ],
                    borderColor: [
                        'rgba(105, 201, 222, 0.8)'
                    ]
                }
            ]})
    }, [barData0, barData1, barData2, barData3, barData4])
        
    // Change which graph to render on click
    const changeGraph = (type) => {
        setGraphType(type)
    }
    
    const colorPriorityButton = () => {
        setDateButton('graph-button-date')
        setPriorityButton('graph-button-priority-on')
        setTypeButton('graph-button-type')
        setHistoryButton('graph-button-history')
    }   

    const colorDateButton = () => {
        setDateButton('graph-button-date-on')
        setPriorityButton('graph-button-priority')
        setTypeButton('graph-button-type')
        setHistoryButton('graph-button-history')
    }

    const colorTypeButton = () => {
        setDateButton('graph-button-date')
        setPriorityButton('graph-button-priority')
        setTypeButton('graph-button-type-on')
        setHistoryButton('graph-button-history')
    }

    const colorHistoryButton = () => {
        setDateButton('graph-button-date')
        setPriorityButton('graph-button-priority')
        setTypeButton('graph-button-type')
        setHistoryButton('graph-button-history-on')
    }

    // Type of Graphs to Render
    const renderGraphs = (graph) => {
        if (graph === "date-graph") {
            return (
                // Date: Bar graph
                <BarChart chartData={barChartData} />
            )
        } else if (graph === "priority-graph") {
            return (
                // Priority: Pie graph
                <PieChart chartData={pieChartData} />
            )
        } else if (graph === "type-graph") {
            return (
                // Type: Flow chart, Bug, UI, Performance
                <FlowChart chartData={flowChartData} />
            )
        } else if (graph === "history-graph") {
            return (
                // History: Line graph, resolved/new
                <LineChart chartData={lineChartData} />
            )
        } else {
            return
        }
    }

    // Render the page
    return (
        <div className="dashboard">
            <div className="graph-buttons-container">
                <button type='button' onClick={() => {changeGraph("priority-graph"); colorPriorityButton()}} className={priorityButton}>Priority</button>
                <button type='button' onClick={() => {changeGraph("type-graph"); colorTypeButton()}} className={typeButton}>Type</button>
                <button type='button' onClick={() => {changeGraph("date-graph"); colorDateButton()}} className={dateButton}>Opened</button>
                <button type='button' onClick={() => {changeGraph("history-graph"); colorHistoryButton()}} className={historyButton}>Resolved</button>
            </div>
            <div className="graphs-container">
                {
                    allGraphs.map((graph, i) => {
                        if (graphType === graph) {
                            return <div key={i}>{renderGraphs(graph)}</div>
                        } else {
                            return <div key={i}></div>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard