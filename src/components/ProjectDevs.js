import React, { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import { useAuthContext } from '../hooks/useAuthContext'

import './ProjectDevs.scss'

const ProjectDevs = ({ currentProject, setUpdateList }) => {
    const [addDevContainer, setAddDevContainer] = useState("add-dev-container")
    const [allUsers, setAllUsers] = useState([])
    const [currentUsers, setCurrentUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState('')
    const { user } = useAuthContext()

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(8)

    const [searchValue, setSearchValue] = useState('')

    // filter devs based on search
    const filteredData = currentProject.devs.filter((dev) => {
        if (searchValue === '') {
            return dev
        } else if (dev.username.toLowerCase().includes(searchValue.toLowerCase())) {
            return dev
        }
        return null
    })

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentDevs = Array.isArray(filteredData) && filteredData.slice(indexOfFirstPost, indexOfLastPost)

    // change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const paginatePrev = () => {
        setCurrentPage(currentPage => currentPage -1)
    }

    const paginateNext = () => { 
        setCurrentPage(currentPage => currentPage + 1)
    }

    // get all devs on render
    useEffect(() => {
        const getUsers = async () => {
            try {
                // const response = await fetch('https://localhost:4000/user/', {
                //     headers: {'Authorization': `Bearer ${user.token}`}
                // })

                // const data = await response.json()
                const data = [
                    {
                        "_id": "64066ee557c03d1ecffc51ed",
                        "username": "testuser",
                        "email": "testuser@gmail.com",
                        "role": "dev",
                        "image": null,
                        "createdAt": "2023-03-06T22:53:25.507Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0,
                        "tickets": [
                            {
                                "_id": "6403b096c70703cc30910d2c",
                                "title": "Ticket 1",
                                "description": "Ticket 1 description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2022-11-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-11-01T00:00:00.000Z",
                                "priority": "low"
                            },
                            {
                                "_id": "6403b0a4c70703cc30910d2f",
                                "title": "Ticket 2",
                                "description": "Ticket 2 description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2022-11-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-11-01T00:00:00.000Z",
                                "priority": "low"
                            },
                            {
                                "_id": "6403b25dc70703cc30910d5a",
                                "title": "Ticket 3",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2022-11-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-12-01T00:00:00.000Z",
                                "priority": "low"
                            },
                            {
                                "_id": "6403b266c70703cc30910d5d",
                                "title": "Ticket 4",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2022-11-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-12-01T00:00:00.000Z",
                                "priority": "low"
                            },
                            {
                                "_id": "6403b269c70703cc30910d60",
                                "title": "Ticket 5",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2022-11-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-12-01T00:00:00.000Z",
                                "priority": "low"
                            },
                            {
                                "_id": "6403b26cc70703cc30910d63",
                                "title": "Ticket 6",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-12-01T00:00:00.000Z",
                                "priority": "low"
                            },
                            {
                                "_id": "6403b270c70703cc30910d66",
                                "title": "Ticket 7",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2022-12-01T00:00:00.000Z",
                                "priority": "low"
                            },
                            {
                                "_id": "6403b27dc70703cc30910d69",
                                "title": "Ticket 8",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2023-01-01T00:00:00.000Z",
                                "priority": "medium"
                            },
                            {
                                "_id": "6403b280c70703cc30910d6c",
                                "title": "Ticket 9",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2023-01-01T00:00:00.000Z",
                                "priority": "medium"
                            },
                            {
                                "_id": "6403b284c70703cc30910d6f",
                                "title": "Ticket 10",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2023-01-01T00:00:00.000Z",
                                "priority": "medium"
                            },
                            {
                                "_id": "6403b28dc70703cc30910d72",
                                "title": "Ticket 11",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2022-12-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2023-02-01T00:00:00.000Z",
                                "priority": "medium"
                            },
                            {
                                "_id": "6403b294c70703cc30910d75",
                                "title": "Ticket 12",
                                "description": "Ticket description",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2023-01-27T07:00:00.000Z",
                                "dueDate": "2023-03-02T07:00:00.000Z",
                                "type": "Backend",
                                "status": "open",
                                "dateResolved": "2023-03-01T00:00:00.000Z",
                                "priority": "medium"
                            },
                            {
                                "_id": "64119f0ac9845653a1ead9dd",
                                "title": "test",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "64066ee557c03d1ecffc51ed",
                                "dateCreated": "2023-03-15T10:33:38.044Z",
                                "dueDate": "2023-03-24T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            }
                        ]
                    },
                    {
                        "_id": "641190e6c9845653a1ead01b",
                        "username": "user10",
                        "email": "email10@gmail.com",
                        "role": "dev",
                        "tickets": [
                            {
                                "_id": "64119edac9845653a1ead991",
                                "title": "test 1",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190e6c9845653a1ead01b",
                                "dateCreated": "2023-03-15T10:32:46.523Z",
                                "dueDate": "2023-03-25T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119eeac9845653a1ead9a0",
                                "title": "test 2",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190e6c9845653a1ead01b",
                                "dateCreated": "2023-03-15T10:32:46.523Z",
                                "dueDate": "2023-03-21T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            }
                        ],
                        "createdAt": "2023-03-15T09:33:26.478Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "641190ebc9845653a1ead01e",
                        "username": "user11",
                        "email": "email11@gmail.com",
                        "role": "dev",
                        "tickets": [],
                        "createdAt": "2023-03-15T09:33:31.973Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "641190f0c9845653a1ead021",
                        "username": "user12",
                        "email": "email12@gmail.com",
                        "role": "dev",
                        "tickets": [
                            {
                                "_id": "64119ef7c9845653a1ead9af",
                                "title": "test 3",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190f0c9845653a1ead021",
                                "dateCreated": "2023-03-15T10:32:46.523Z",
                                "dueDate": "2023-03-23T00:00:00.000Z",
                                "type": "bug",
                                "priority": "medium",
                                "status": "open",
                                "dateResolved": null
                            }
                        ],
                        "createdAt": "2023-03-15T09:33:36.884Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "641190f6c9845653a1ead024",
                        "username": "user13",
                        "email": "email13@gmail.com",
                        "role": "dev",
                        "tickets": [],
                        "createdAt": "2023-03-15T09:33:42.142Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "641190fbc9845653a1ead027",
                        "username": "user14",
                        "email": "email14@gmail.com",
                        "role": "dev",
                        "tickets": [],
                        "createdAt": "2023-03-15T09:33:47.443Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "6407d27f92cba1af9533401e",
                        "username": "user2",
                        "email": "email2@gmail.com",
                        "role": "dev",
                        "tickets": [],
                        "createdAt": "2023-03-08T00:10:39.527Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "6407d29d92cba1af95334024",
                        "username": "user3",
                        "email": "email3@gmail.com",
                        "role": "dev",
                        "tickets": [],
                        "createdAt": "2023-03-08T00:11:09.531Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "6407d2a592cba1af95334027",
                        "username": "user4",
                        "email": "email4@gmail.com",
                        "role": "dev",
                        "tickets": [],
                        "createdAt": "2023-03-08T00:11:17.590Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "640d8066220d79310b7ea2ea",
                        "username": "user5",
                        "email": "email5@gmail.com",
                        "role": "dev",
                        "tickets": [
                            {
                                "_id": "64119386c9845653a1ead1d7",
                                "title": "Test Ticket 1",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "640d8066220d79310b7ea2ea",
                                "dateCreated": "2023-03-15T09:44:16.298Z",
                                "dueDate": "2023-03-31T00:00:00.000Z",
                                "type": "ui",
                                "priority": "high",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "641194a2c9845653a1ead215",
                                "title": "Test Ticket 3",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "640d8066220d79310b7ea2ea",
                                "dateCreated": "2023-03-15T09:48:05.621Z",
                                "dueDate": "2023-04-08T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            }
                        ],
                        "createdAt": "2023-03-12T07:33:58.113Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "640d806b220d79310b7ea2ed",
                        "username": "user6",
                        "email": "email6@gmail.com",
                        "role": "dev",
                        "tickets": [
                            {
                                "_id": "641193d7c9845653a1ead1ee",
                                "title": "Test Ticket 2",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "640d806b220d79310b7ea2ed",
                                "dateCreated": "2023-03-15T09:44:16.298Z",
                                "dueDate": "2023-03-31T00:00:00.000Z",
                                "type": "performance",
                                "priority": "medium",
                                "status": "open",
                                "dateResolved": null
                            }
                        ],
                        "createdAt": "2023-03-12T07:34:03.885Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "641190d1c9845653a1ead012",
                        "username": "user7",
                        "email": "email7@gmail.com",
                        "role": "dev",
                        "tickets": [
                            {
                                "_id": "64119602c9845653a1ead269",
                                "title": "test 1",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190d1c9845653a1ead012",
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-03-23T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119618c9845653a1ead287",
                                "title": "test 3",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190d1c9845653a1ead012",
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-04-05T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119641c9845653a1ead2b4",
                                "title": "test 6",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190d1c9845653a1ead012",
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-03-31T00:00:00.000Z",
                                "type": "ui",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "6411964dc9845653a1ead2c3",
                                "title": "test 7",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190d1c9845653a1ead012",
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-03-30T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119de4c9845653a1ead8fb",
                                "title": "test 8",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190d1c9845653a1ead012",
                                "dateCreated": "2023-03-15T10:27:35.368Z",
                                "dueDate": "2023-03-10T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119df1c9845653a1ead90a",
                                "title": "test 9",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190d1c9845653a1ead012",
                                "dateCreated": "2023-03-15T10:27:35.368Z",
                                "dueDate": "2023-03-10T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119dfdc9845653a1ead919",
                                "title": "test 10",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190d1c9845653a1ead012",
                                "dateCreated": "2023-03-15T10:27:35.368Z",
                                "dueDate": "2023-03-24T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            }
                        ],
                        "createdAt": "2023-03-15T09:33:05.238Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "641190d9c9845653a1ead015",
                        "username": "user8",
                        "email": "email8@gmail.com",
                        "role": "dev",
                        "tickets": [
                            {
                                "_id": "6411960ec9845653a1ead278",
                                "title": "test 2",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190d9c9845653a1ead015",
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-04-27T00:00:00.000Z",
                                "type": "bug",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119622c9845653a1ead296",
                                "title": "test 4",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190d9c9845653a1ead015",
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-03-31T00:00:00.000Z",
                                "type": "ui",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            },
                            {
                                "_id": "64119637c9845653a1ead2a5",
                                "title": "test 6",
                                "description": "test",
                                "createdBy": "64066ee557c03d1ecffc51ed",
                                "dev": "641190d9c9845653a1ead015",
                                "dateCreated": "2023-03-15T09:55:02.209Z",
                                "dueDate": "2023-03-30T00:00:00.000Z",
                                "type": "ui",
                                "priority": "low",
                                "status": "open",
                                "dateResolved": null
                            }
                        ],
                        "createdAt": "2023-03-15T09:33:13.395Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    },
                    {
                        "_id": "641190e0c9845653a1ead018",
                        "username": "user9",
                        "email": "email9@gmail.com",
                        "role": "dev",
                        "tickets": [],
                        "createdAt": "2023-03-15T09:33:20.205Z",
                        "updatedAt": "2023-03-15T11:14:39.294Z",
                        "__v": 0
                    }
                ]
                const emails = currentProject.devs.map(dev => dev.email)

                setAllUsers(data.filter(item => !emails.includes(item.email)))
                setCurrentUsers(data.filter(item => emails.includes(item.email)))
            } catch (error) {
                throw error
            }
        }

        if (user) {
            getUsers()
        }
    }, [currentProject.devs, user])

    // handle adding new user 
    const handleAddUser = (e) => {
        e.preventDefault()

        const addUser = async () => {
            try {
                const requestBody = {}

                requestBody._id = selectedUser

                // await fetch(`https://localhost:4000/project/addDeveloper/${currentProject._id}`, {
                //     method: 'PATCH',
                //     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                //     body: JSON.stringify(requestBody)
                // })

                setUpdateList(prev => prev + 1)
                setSelectedUser('')
                closeDev()
            } catch (error) {
                throw error
            }
        }

        if (user) {
            addUser()
        }
    }

    // handle removing existing user
    const handleRemoveUser = (e) => {
        e.preventDefault()

        const removeUser = async () => {
            try {
                const requestBody = {}

                requestBody._id = selectedUser
                console.log(selectedUser)

                // await fetch(`https://localhost:4000/project/removeDeveloper/${currentProject._id}`, {
                //     method: 'PATCH',
                //     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                //     body: JSON.stringify(requestBody)
                // })

                setUpdateList(prev => prev + 1)
                setSelectedUser('')
                closeDev()
            } catch (error) {
                throw error
            }
        }

        if (user) {
            removeUser()
        }
    }

    // open add dev modal
    const addDev = () => {
        setAddDevContainer('add-dev-container add-dev-open')
    }

    // open remove dev modal
    const removeDev = () => {
        setAddDevContainer('add-dev-container remove-dev-open')
    }

    // close modals
    const closeDev = () => {
        setAddDevContainer('add-dev-container')
    }

    console.log(selectedUser)

    return (
        <div className='project-devs'>
            <div className="devs-number-container">

                <div className={addDevContainer}>
                    <div onClick={closeDev} className="add-dev-backdrop"></div>
                    <div onClick={closeDev} className="remove-dev-backdrop"></div>

                    <form className="add-dev-modal" onSubmit={(e) => handleAddUser(e)}>
                        <div className='modal-top'>
                            <div>Select Dev:</div>
                            <select name="" id="" className='modal-devs' onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
                                <option value="" disabled>Select</option>
                                {allUsers.map((user, i) => (
                                    <option key={i} value={user._id}>{user.username}</option>
                                ))}
                            </select>
                        </div>
                        <div className="modal-middle">
                            <div className="">Selected:</div>
                            <div className="modal-selected-user">{selectedUser.username}</div>
                        </div>
                        <div className="button-container">
                            <button className='add-dev-submit' disabled>Add dev</button>
                        </div>
                    </form>
                    
                    <form className="remove-dev-modal" onSubmit={(e) => handleRemoveUser(e)}>
                        <div className='modal-top'>
                            <div>Select Dev:</div>
                            <select name="" id="" className='modal-devs' onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
                                <option value="" disabled>Select</option>
                                {currentUsers.map((user, i) => (
                                    <option key={i} value={user._id}>{user.username}</option>
                                ))}
                            </select>
                        </div>
                        <div className="modal-middle">
                            <div className="">Selected:</div>
                            <div className="modal-selected-user">{selectedUser.username}</div>
                        </div>
                        <div className="button-container">
                            <button className='remove-dev-submit' disabled>Remove dev</button>
                        </div>
                    </form>

                    <button onClick={addDev} className="add-dev-left">Add</button>
                    <button onClick={removeDev} className="add-dev-right">Remove</button>
                </div>

                <div className="devs-number-middle">
                    <div className="devs-number">Devs: {filteredData && filteredData.length}</div>
                </div>
                <div className="devs-number-right">
                    <input className='devs-search' type="text" placeholder="Search.." onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
                </div>
            </div>
            <div className="devs-container">
                {currentProject.devs && currentDevs.map((dev,i) => (
                    <div key={i} className='dev-container'>
                        <div className="dev-container-top">
                            <div className="devs-name">
                                <p className='devs-left'>Name:</p>
                                <p>{dev.username}</p>
                            </div>
                            <div className="devs-role">
                                <p className='devs-left'>Role:</p>
                                <p>{dev.role}</p>
                            </div>
                        </div>
                        <div className="dev-container-bottom">
                            <div className="devs-email">
                                <p className="devs-left">Email:</p>
                                <p>{dev.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="devs-buttons">
                <Pagination postsPerPage={postsPerPage} currentProject={filteredData} paginate={paginate} paginatePrev={paginatePrev} paginateNext={paginateNext} currentPage={currentPage} />
            </div>
        </div>
    )
}

export default ProjectDevs