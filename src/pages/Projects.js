import React, { useState, useEffect } from 'react'
import ProjectDetails from '../components/ProjectDetails'
import ProjectDevs from '../components/ProjectDevs'
import ProjectTickets from '../components/ProjectTickets'
import { useAuthContext } from '../hooks/useAuthContext'

import "./Projects.scss"

const Projects = () => {
    // bodyRender: Which page to render
    const [bodyRender, setBodyRender] = useState("description")
    const [buttonsTop, setButtonsTop] = useState('buttons-top')

    // button color states
    const [buttonLeft, setButtonLeft] = useState('bottom-buttons-wheat')
    const [buttonMiddle, setButtonMiddle] = useState('bottom-buttons')
    const [buttonRight, setButtonRight] = useState('bottom-buttons')

    // new project data
    const [newProjectName, setNewProjectName] = useState('')
    const [newProjectDescription, setNewProjectDescription] = useState('')
    const [renderProjects, setRenderProjects] = useState('')
    const [updateList, setUpdateList] = useState(1)
    const { user } = useAuthContext()

    // get all projects
    const [allProjects, setAllProjects] = useState([])
    const [currentProject, setCurrentProject] = useState({})
    const [currentProjectId, setCurrentProjectId] = useState('')

    // all tickets
    const [currentProjectTickets, setProjectCurrentTickets] = useState([])

    // Change what is shown on page: details, devs, tickets
    const changeRender = (type) => {
        setBodyRender(type)
    }

    // Change buttonsTop className for backdrop and modal
    const newProject = () => {
        setButtonsTop('buttons-top project-open')
    }

    // Reset buttonsTop value 
    const closeNewProject = () => {
        setButtonsTop('buttons-top')
    }

    // Button wheat color change
    const wheatLeft = () => {
        setButtonLeft('bottom-buttons-wheat')
        setButtonMiddle('bottom-buttons')
        setButtonRight('bottom-buttons')
    }

    const wheatMiddle = () => {
        setButtonLeft('bottom-buttons')
        setButtonMiddle('bottom-buttons-wheat')
        setButtonRight('bottom-buttons')
    }

    const wheatRight = () => {
        setButtonLeft('bottom-buttons')
        setButtonMiddle('bottom-buttons')
        setButtonRight('bottom-buttons-wheat')
    }

    // handle new project submit
    const handleNewProject = (e) => {
        e.preventDefault()

        const createNewProject = async () => {
            try {
                const requestBody = {}
                requestBody.title = newProjectName
                requestBody.description = newProjectDescription

                await fetch(`https://bug-tracker-backend-ne3r.onrender.com/project`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                    body: JSON.stringify(requestBody)
                })

                setUpdateList(prev => prev + 1)
            } catch (error) {
                throw error
            }
        }

        if (user) {
            createNewProject()
        }

        closeNewProject()
        setNewProjectName(prev => '')
        setNewProjectDescription(prev => '')
        setRenderProjects(prev => 'a')
        setRenderProjects(prev => '')
    }

    // get all projects on render
    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch('https://bug-tracker-backend-ne3r.onrender.com/project', {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })

                const data = await response.json()

                setCurrentProject(data[0])
                setProjectCurrentTickets(data[0].tickets)

                if (currentProjectId) {
                    const filteredData = data.filter(project => project._id === currentProjectId);
                    setCurrentProject(filteredData.length > 0 ? filteredData[0] : null);
                    setProjectCurrentTickets(filteredData[0].tickets)
                }

                setAllProjects(data)
            } catch (error) {
                throw error
            }
        }

        if (user) {
            getProjects()
        }
    }, [user, renderProjects, currentProjectId, updateList])

    useEffect(() => {
        if (currentProject === undefined) {
            setCurrentProject(allProjects[0])
        }
    }, [currentProject, allProjects])

    useEffect(() => {
        if (currentProjectId !== '') {
            setCurrentProject(allProjects.find(project => project._id === currentProjectId))
        }
    }, [currentProjectId, allProjects])

    return (
        <div className='project'>
            <div className="project-top">
                <div className={buttonsTop}>
                    <div onClick={closeNewProject} className="backdrop"></div>

                    <form className="new-project-modal" onSubmit={(e) => handleNewProject(e)}>
                        <div className="new-project-title">
                            <h3>New Project</h3>
                        </div>
                        <div className="new-project-name">
                            <p>Project Name:</p>
                            <input className='new-project-inputs' required placeholder='Project Name' type="text" value={newProjectName} onChange={(e) => setNewProjectName(e.target.value)} />
                        </div>
                        <div className="new-project-description">
                            <p>Description:</p>
                            <textarea className='new-project-inputs' required placeholder='Description' name="description" id="description" cols="30" rows="6" value={newProjectDescription} onChange={(e) => setNewProjectDescription(e.target.value)}></textarea>
                        </div>
                        <div className="new-project-button-container">
                            <button className="new-project-button" disabled>Create</button>
                        </div>
                    </form>

                    <button onClick={newProject} type='button' className="project-top-buttons create-new">New Project</button>
                    <select className='project-top-buttons' name="Projects" id="projects" onChange={(e) => setCurrentProjectId(e.target.value)} value={currentProjectId} >
                        {allProjects && allProjects.map((project, i) => (
                            <option key={i} value={project._id} defaultValue>{project.title}</option>
                        ))}
                    </select>
                </div>
                <div className='buttons-bottom'>
                    <button onClick={() => {changeRender("description"); wheatLeft()}} type='button' className={buttonLeft}>Details</button>
                    <button onClick={() => {changeRender("devs"); wheatMiddle()}} type='button' className={buttonMiddle}>Devs</button>
                    <button onClick={() => {changeRender("tickets"); wheatRight()}} type='button' className={buttonRight}>Tickets</button>
                </div>
            </div>
            <div className="project-body">
                {
                    bodyRender === 'description' && <ProjectDetails currentProject={currentProject} setCurrentProject={setCurrentProject} setUpdateList={setUpdateList} />
                }
                {
                    bodyRender === 'devs' && <ProjectDevs currentProject={currentProject} setUpdateList={setUpdateList} />
                }
                {
                    bodyRender === 'tickets' && <ProjectTickets currentProject={currentProject} setUpdateList={setUpdateList} currentProjectTickets={currentProjectTickets} />
                }
            </div>
        </div>
    )
}

export default Projects