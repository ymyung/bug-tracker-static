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

                // await fetch(`https://localhost:4000/project`, {
                //     method: 'POST',
                //     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                //     body: JSON.stringify(requestBody)
                // })

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
                // const response = await fetch('https://localhost:4000/project', {
                //     headers: {'Authorization': `Bearer ${user.token}`}
                // })

                // const data = await response.json()
                const data = [
                    {
                        "_id": "640a6bb0712c1e0dca68da61",
                        "title": "Bug Tracker",
                        "description": "A responsive and user-friendly tool for tracking bugs and problems within your project. Significantly Improves project code quality and development speed",
                        "devs": [
                            {
                                "_id": "64066ee557c03d1ecffc51ed",
                                "username": "Melissa Thompson",
                                "email": "melissathompson@gmail.com",
                                "role": "senior dev",
                                "image": null
                            },
                            {
                                "_id": "6407d27f92cba1af9533401e",
                                "username": "Travis Huerta",
                                "email": "travishuerta@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "6407d29d92cba1af95334024",
                                "username": "Marin Drake",
                                "email": "marindrake@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "6407d2a592cba1af95334027",
                                "username": "Regina Arroyo",
                                "email": "reginaarroyo@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "6407d2a592cba1af95334027",
                                "username": "Myah Gaines",
                                "email": "myahgaines@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "6407d2a592cba1af95334027",
                                "username": "Waylon Hurst",
                                "email": "waylonhurst@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "6407d2a592cba1af95334027",
                                "username": "Levi Coffey",
                                "email": "levicoffey@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "6407d2a592cba1af95334027",
                                "username": "Mekhi Mcdaniel",
                                "email": "mekhimcdaniel@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "6407d2a592cba1af95334027",
                                "username": "Mitchell Webb",
                                "email": "mitchellwebb@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "6407d2a592cba1af95334027",
                                "username": "Amara Black",
                                "email": "amarablack@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "6407d2a592cba1af95334027",
                                "username": "Maggie Singleton",
                                "email": "maggiesingleton@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "6407d2a592cba1af95334027",
                                "username": "Toby Rubio",
                                "email": "tobyrubio@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "6407d2a592cba1af95334027",
                                "username": "Kathleen Callahan",
                                "email": "kathleencallahan@gmail.com",
                                "role": "dev"
                            }
                        ],
                        "tickets": [
                            {
                                "_id": "6403b096c70703cc30910d2c",
                                "title": "dashboard lag",
                                "description": "Ticket 1 description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Melissa Thompson",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2022-11-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-11-01T00:00:00.000Z",
                                "priority": "high"
                            },
                            {
                                "_id": "6403b0a4c70703cc30910d2f",
                                "title": "got hacked",
                                "description": "Ticket 2 description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Travis Huerta",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2022-11-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-11-01T00:00:00.000Z",
                                "priority": "critical"
                            },
                            {
                                "_id": "6403b25dc70703cc30910d5a",
                                "title": "projects page looks ugly",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Waylon Hurst",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2022-11-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-12-01T00:00:00.000Z",
                                "priority": "high"
                            },
                            {
                                "_id": "6403b266c70703cc30910d5d",
                                "title": "finish profiles",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Waylon Hurst",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2022-11-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-12-01T00:00:00.000Z",
                                "priority": "medium"
                            },
                            {
                                "_id": "6403b269c70703cc30910d60",
                                "title": "graphs ui",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Mekhi Mcdaniel",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2022-11-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-12-01T00:00:00.000Z",
                                "priority": "medium"
                            },
                            {
                                "_id": "6403b26cc70703cc30910d63",
                                "title": "projects won't load",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Mekhi Mcdaniel",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-12-01T00:00:00.000Z",
                                "priority": "low"
                            },
                            {
                                "_id": "6403b270c70703cc30910d66",
                                "title": "messages pages",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Regina Arroyo",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-12-01T00:00:00.000Z",
                                "priority": "low"
                            },
                            {
                                "_id": "6403b27dc70703cc30910d69",
                                "title": "logo",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Melissa Thompson",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2023-01-01T00:00:00.000Z",
                                "priority": "medium"
                            },
                            {
                                "_id": "6403b280c70703cc30910d6c",
                                "title": "page stutter",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Melissa Thompson",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2023-01-01T00:00:00.000Z",
                                "priority": "low"
                            },
                            {
                                "_id": "6403b284c70703cc30910d6f",
                                "title": "adding tickets",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Amara Black",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2023-01-01T00:00:00.000Z",
                                "priority": "medium"
                            },
                            {
                                "_id": "6403b28dc70703cc30910d72",
                                "title": "finish users page",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Toby Rubio",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2023-02-01T00:00:00.000Z",
                                "priority": "medium"
                            },
                            {
                                "_id": "6403b294c70703cc30910d75",
                                "title": "search bar",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Toby Rubio",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-01-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2023-03-01T00:00:00.000Z",
                                "priority": "high"
                            }
                        ],
                        "createdAt": "2023-03-09T23:28:48.454Z",
                        "updatedAt": "2023-03-15T09:30:56.166Z",
                        "__v": 0
                    },
                    {
                        "_id": "6410461202fdff6e15ae0e12",
                        "title": "Weather Tracker",
                        "description": "Responsive real time weather tracking application. Used for deciding whether or not to wear a jacket.",
                        "devs": [
                            {
                                "_id": "640d8066220d79310b7ea2ea",
                                "username": "Demarcus Caldwell",
                                "email": "demarcuscladwell@gmail.com",
                                "role": "senior dev"
                            },
                            {
                                "_id": "640d806b220d79310b7ea2ed",
                                "username": "Damian Hines",
                                "email": "damianhines@gmail.com",
                                "role": "dev"
                            }
                        ],
                        "tickets": [
                            {
                                "_id": "64119386c9845653a1ead1d7",
                                "title": "logo colors",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "640d8066220d79310b7ea2ea",
                                    "username": "Demarcus Caldwell",
                                    "email": "email5@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T09:44:16.298Z",
                                "dueDate": "2023-03-31T00:00:00.000Z",
                                "type": "ui",
                                "priority": "high",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "641193d7c9845653a1ead1ee",
                                "title": "fix tickets",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "640d806b220d79310b7ea2ed",
                                    "username": "Demarcus Caldwell",
                                    "email": "email6@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T09:44:16.298Z",
                                "dueDate": "2023-03-31T00:00:00.000Z",
                                "type": "performance",
                                "priority": "medium",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "641194a2c9845653a1ead215",
                                "title": "update site wide colors",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "640d8066220d79310b7ea2ea",
                                    "username": "Demarcus Caldwell",
                                    "email": "email5@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T09:48:05.621Z",
                                "dueDate": "2023-04-08T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            }
                        ],
                        "createdAt": "2023-03-14T10:01:54.034Z",
                        "updatedAt": "2023-03-15T09:49:22.699Z",
                        "__v": 0
                    },
                    {
                        "_id": "6410462802fdff6e15ae0e1a",
                        "title": "Messaging App",
                        "description": "Cross platform messaging app used for communicating between large teams for projects.",
                        "devs": [
                            {
                                "_id": "641190d1c9845653a1ead012",
                                "username": "Dominic Campos",
                                "email": "cominiccampos@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "641190d9c9845653a1ead015",
                                "username": "Leonardo Reese",
                                "email": "leonardoreese@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "641190e0c9845653a1ead018",
                                "username": "Angelique Melton",
                                "email": "angeliquemelton@gmail.com",
                                "role": "dev"
                            }
                        ],
                        "tickets": [
                            {
                                "_id": "64119602c9845653a1ead269",
                                "title": "login page",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190d1c9845653a1ead012",
                                    "username": "Angelique Melton",
                                    "email": "email7@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-03-23T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "6411960ec9845653a1ead278",
                                "title": "test projects",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190d9c9845653a1ead015",
                                    "username": "Leonardo Reese",
                                    "email": "email8@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-04-27T00:00:00.000Z",
                                "type": "bug",
                                "priority": "medium",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119618c9845653a1ead287",
                                "title": "improve performance site wide",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190d1c9845653a1ead012",
                                    "username": "Leonardo Reese",
                                    "email": "email7@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-04-05T00:00:00.000Z",
                                "type": "bug",
                                "priority": "high",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119622c9845653a1ead296",
                                "title": "got hacked",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190d9c9845653a1ead015",
                                    "username": "Dominic Campos",
                                    "email": "email8@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-03-31T00:00:00.000Z",
                                "type": "ui",
                                "priority": "critical",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119637c9845653a1ead2a5",
                                "title": "remove projects",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190d9c9845653a1ead015",
                                    "username": "Dominic Campos",
                                    "email": "email8@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-03-30T00:00:00.000Z",
                                "type": "ui",
                                "priority": "medium",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119641c9845653a1ead2b4",
                                "title": "pass props down to projects",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190d1c9845653a1ead012",
                                    "username": "Dominic Campos",
                                    "email": "email7@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-03-31T00:00:00.000Z",
                                "type": "ui",
                                "priority": "high",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "6411964dc9845653a1ead2c3",
                                "title": "test application",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190d1c9845653a1ead012",
                                    "username": "Dominic Campos",
                                    "email": "email7@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-03-30T00:00:00.000Z",
                                "type": "bug",
                                "priority": "high",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119de4c9845653a1ead8fb",
                                "title": "paginations",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190d1c9845653a1ead012",
                                    "username": "Leonardo Reese",
                                    "email": "email7@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T10:27:35.368Z",
                                "dueDate": "2023-03-10T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119df1c9845653a1ead90a",
                                "title": "loading performance",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190d1c9845653a1ead012",
                                    "username": "Leonardo Reese",
                                    "email": "email7@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T10:27:35.368Z",
                                "dueDate": "2023-03-10T00:00:00.000Z",
                                "type": "bug",
                                "priority": "medium",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119dfdc9845653a1ead919",
                                "title": "fix ui",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190d1c9845653a1ead012",
                                    "username": "Dominic Campos",
                                    "email": "email7@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T10:27:35.368Z",
                                "dueDate": "2023-03-24T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            }
                        ],
                        "createdAt": "2023-03-14T10:02:16.629Z",
                        "updatedAt": "2023-03-15T10:29:17.577Z",
                        "__v": 0
                    },
                    {
                        "_id": "641189cec9845653a1eacfc2",
                        "title": "Social Network ",
                        "description": "Twitter clone but actually good. Elon take notes",
                        "devs": [
                            {
                                "_id": "641190e6c9845653a1ead01b",
                                "username": "Morgan Moon",
                                "email": "morganmoon@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "641190ebc9845653a1ead01e",
                                "username": "Sage Luna",
                                "email": "sageluna@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "641190f0c9845653a1ead021",
                                "username": "Shane Waller",
                                "email": "shanewaller@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "641190f6c9845653a1ead024",
                                "username": "Casey Ramos",
                                "email": "caseyramos@gmail.com",
                                "role": "dev"
                            },
                            {
                                "_id": "641190fbc9845653a1ead027",
                                "username": "Alan Hendricks",
                                "email": "alan hendricks@gmail.com",
                                "role": "dev"
                            }
                        ],
                        "tickets": [
                            {
                                "_id": "64119edac9845653a1ead991",
                                "title": "user models update",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190e6c9845653a1ead01b",
                                    "username": "Morgan Moon",
                                    "email": "email10@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T10:32:46.523Z",
                                "dueDate": "2023-03-25T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119eeac9845653a1ead9a0",
                                "title": "messages performance",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190e6c9845653a1ead01b",
                                    "username": "Morgan Moon",
                                    "email": "email10@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T10:32:46.523Z",
                                "dueDate": "2023-03-21T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119ef7c9845653a1ead9af",
                                "title": "improve landing page",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "641190f0c9845653a1ead021",
                                    "username": "Sage Luna",
                                    "email": "email12@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T10:32:46.523Z",
                                "dueDate": "2023-03-23T00:00:00.000Z",
                                "type": "bug",
                                "priority": "medium",
                                "status": "open",
                                "dateResolved": null
                            }
                        ],
                        "createdAt": "2023-03-15T09:03:10.353Z",
                        "updatedAt": "2023-03-15T10:33:27.808Z",
                        "__v": 0
                    },
                    {
                        "_id": "6411900ac9845653a1eacfe3",
                        "title": "Reddit Clone",
                        "description": "A online forum used for world wide discussion. A reddit clone.",
                        "devs": [
                            {
                                "_id": "64066ee557c03d1ecffc51ed",
                                "username": "Giovanny Fitzpatrick",
                                "email": "giovannyfitzpatrick@gmail.com",
                                "role": "dev",
                                "image": null
                            }
                        ],
                        "tickets": [
                            {
                                "_id": "64119f0ac9845653a1ead9dd",
                                "title": "authentication page",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": {
                                    "_id": "64066ee557c03d1ecffc51ed",
                                    "username": "Giovanny Fitzpatrick",
                                    "email": "testuser@gmail.com",
                                    "role": "dev"
                                },
                                "dateCreated": "2023-03-15T10:33:38.044Z",
                                "dueDate": "2023-03-24T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            }
                        ],
                        "createdAt": "2023-03-15T09:29:46.485Z",
                        "updatedAt": "2023-03-15T10:33:46.515Z",
                        "__v": 0
                    }
                ]

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