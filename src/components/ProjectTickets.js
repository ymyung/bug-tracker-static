import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import { useAuthContext } from '../hooks/useAuthContext'

import './ProjectTickets.scss'

const ProjectTickets = ({ currentProject, setUpdateList, currentProjectTickets }) => {
    const [newTicketContainer, setNewTicketContainer] = useState('new-ticket-container')
    const { user } = useAuthContext()

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(8)

    const [searchValue, setSearchValue] = useState('')
    const [currentUsers, setCurrentUsers] = useState([])
    const [currentTickets, setCurrentTickets] = useState([])

    // add ticket values
    const [newTitle, setNewTitle] = useState('')
    const [newDescription, setNewDescription] = useState('')
    // const [newCreatedBy, setNewCreatedBy] = useState('')
    const [newDev, setNewDev] = useState('')
    // const [newDateCreated] = useState(new Date().toISOString())
    const [newDueDate, setNewDueDate] = useState('')
    const [newType, setNewType] = useState('')
    const [newPriority, setNewPriority] = useState('')
    // const [newStatus] = useState('open')
    // const [newDateResolved] = useState('')

    // remove ticket
    const [removeTicket, setRemoveTicket] = useState('')
    const [removeTicketObject, setRemoveTicketObject] = useState({})
    const [filteredData, setFilteredData] = useState([])

    // open new ticket/remove ticket modals
    const openNewTicket = () => {
        setNewTicketContainer('new-ticket-container new-ticket-open')
    }

    const openRemoveTicket = () => {
        setNewTicketContainer('new-ticket-container remove-ticket-open')
    }

    // close modals
    const closeNewTicket = () => {
        setNewTicketContainer('new-ticket-container')
    }

    // filter devs based on search
    useEffect(() => {
        if (currentProjectTickets) {
            const data = currentProjectTickets.filter((ticket) => {
                if (searchValue === '') {
                    return ticket
                } else if (ticket.title.toLowerCase().includes(searchValue.toLowerCase())) {
                    return ticket
                }
                return false
            })

            setFilteredData(data)
        }
    }, [currentProjectTickets, searchValue])

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    useEffect(() => {
        if (currentProjectTickets) {
            const data = currentProjectTickets.filter((ticket) => {
                if (searchValue === '') {
                    return ticket
                } else if (ticket.title.toLowerCase().includes(searchValue.toLowerCase())) {
                    return ticket
                }
                return false
            })
    
            setFilteredData(data)
            setCurrentTickets(data.slice(indexOfFirstPost, indexOfLastPost))
        }
    }, [currentProjectTickets, searchValue, indexOfFirstPost, indexOfLastPost])

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

                setCurrentUsers(data.filter(item => emails.includes(item.email)))
            } catch (error) {
                throw error
            }
        }

        if (user) {
            getUsers()
        }
    }, [user, currentProject])

    // get current dev
    useEffect(() => {
        const getCurrentDev = async () => {
            try {
                // const response = await fetch(`https://localhost:4000/user/email/${user.email}`, {
                //     headers: {'Authorization': `Bearer ${user.token}`}
                // })

                // const data = await response.json()
                // const data = {
                //     "_id": "64066ee557c03d1ecffc51ed",
                //     "username": "testuser",
                //     "email": "testuser@gmail.com",
                //     "role": "dev",
                //     "image": null,
                //     "createdAt": "2023-03-06T22:53:25.507Z",
                //     "updatedAt": "2023-03-15T11:14:39.294Z",
                //     "__v": 0,
                //     "tickets": [
                //         {
                //             "_id": "6403b096c70703cc30910d2c",
                //             "title": "Ticket 1",
                //             "description": "Ticket 1 description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2022-11-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2022-11-01T00:00:00.000Z",
                //             "priority": "low"
                //         },
                //         {
                //             "_id": "6403b0a4c70703cc30910d2f",
                //             "title": "Ticket 2",
                //             "description": "Ticket 2 description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2022-11-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2022-11-01T00:00:00.000Z",
                //             "priority": "low"
                //         },
                //         {
                //             "_id": "6403b25dc70703cc30910d5a",
                //             "title": "Ticket 3",
                //             "description": "Ticket description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2022-11-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2022-12-01T00:00:00.000Z",
                //             "priority": "low"
                //         },
                //         {
                //             "_id": "6403b266c70703cc30910d5d",
                //             "title": "Ticket 4",
                //             "description": "Ticket description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2022-11-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2022-12-01T00:00:00.000Z",
                //             "priority": "low"
                //         },
                //         {
                //             "_id": "6403b269c70703cc30910d60",
                //             "title": "Ticket 5",
                //             "description": "Ticket description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2022-11-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2022-12-01T00:00:00.000Z",
                //             "priority": "low"
                //         },
                //         {
                //             "_id": "6403b26cc70703cc30910d63",
                //             "title": "Ticket 6",
                //             "description": "Ticket description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2022-12-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2022-12-01T00:00:00.000Z",
                //             "priority": "low"
                //         },
                //         {
                //             "_id": "6403b270c70703cc30910d66",
                //             "title": "Ticket 7",
                //             "description": "Ticket description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2022-12-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2022-12-01T00:00:00.000Z",
                //             "priority": "low"
                //         },
                //         {
                //             "_id": "6403b27dc70703cc30910d69",
                //             "title": "Ticket 8",
                //             "description": "Ticket description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2022-12-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2023-01-01T00:00:00.000Z",
                //             "priority": "medium"
                //         },
                //         {
                //             "_id": "6403b280c70703cc30910d6c",
                //             "title": "Ticket 9",
                //             "description": "Ticket description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2022-12-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2023-01-01T00:00:00.000Z",
                //             "priority": "medium"
                //         },
                //         {
                //             "_id": "6403b284c70703cc30910d6f",
                //             "title": "Ticket 10",
                //             "description": "Ticket description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2022-12-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2023-01-01T00:00:00.000Z",
                //             "priority": "medium"
                //         },
                //         {
                //             "_id": "6403b28dc70703cc30910d72",
                //             "title": "Ticket 11",
                //             "description": "Ticket description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2022-12-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2023-02-01T00:00:00.000Z",
                //             "priority": "medium"
                //         },
                //         {
                //             "_id": "6403b294c70703cc30910d75",
                //             "title": "Ticket 12",
                //             "description": "Ticket description",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2023-01-27T07:00:00.000Z",
                //             "dueDate": "2023-03-02T07:00:00.000Z",
                //             "type": "Backend",
                //             "status": "open",
                //             "dateResolved": "2023-03-01T00:00:00.000Z",
                //             "priority": "medium"
                //         },
                //         {
                //             "_id": "64119f0ac9845653a1ead9dd",
                //             "title": "test",
                //             "description": "test",
                //             "createdBy": "64066ee557c03d1ecffc51ed",
                //             "dev": "64066ee557c03d1ecffc51ed",
                //             "dateCreated": "2023-03-15T10:33:38.044Z",
                //             "dueDate": "2023-03-24T00:00:00.000Z",
                //             "type": "bug",
                //             "priority": "low",
                //             "status": "open",
                //             "dateResolved": null
                //         }
                //     ]
                // }

                // setNewCreatedBy(data._id)
            } catch (error) {
                throw error
            }
        }

        if (user) {
            getCurrentDev()
        }
    }, [user])

    // handle new ticket
    const handleNewTicket = (e) => {
        e.preventDefault()

        const newTicket = async () => {
            try {
                // create ticket
                // const requestBody = {}
                // requestBody.title = newTitle
                // requestBody.description = newDescription
                // requestBody.createdBy = newCreatedBy
                // requestBody.dev = newDev
                // requestBody.dateCreated = newDateCreated
                // requestBody.dueDate = newDueDate
                // requestBody.type = newType
                // requestBody.priority = newPriority
                // requestBody.status = newStatus
                // requestBody.dateResolved = newDateResolved

                // const response = await fetch('https://localhost:4000/ticket/', {
                //     method: 'POST',
                //     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                //     body: JSON.stringify(requestBody)
                // })

                // get ticket id
                // const data = await response.json()

                // add ticket to project and devs array
                // const requestBody2 = {}
                // requestBody2._id = data._id
                // requestBody2.userId = newDev

                // await fetch(`https://localhost:4000/project/addTicket/${currentProject._id}`, {
                //     method: 'PATCH',
                //     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                //     body: JSON.stringify(requestBody2)
                // })

                setNewTitle('')
                setNewDescription('')
                setNewDev('')
                setNewDueDate('')
                setNewType('')
                setNewPriority('')

                setUpdateList(prev => prev + 1)
            } catch(error) {
                throw error
            }
        }

        if (user) {
            newTicket()
        }

        closeNewTicket()
    }

    // handle remove ticket
    const handleRemoveTicket = (e) => {
        e.preventDefault()
        const removeHandler = async () => {
            try {
                // remove ticket from project and user array
                const requestBody = {}
                requestBody._id = removeTicket
                requestBody.userId = removeTicketObject.dev._id

                // await fetch(`https://localhost:4000/project/deleteTicket/${currentProject._id}`, {
                //     method: 'PATCH',
                //     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                //     body: JSON.stringify(requestBody)
                // })

                // delete ticket
                // await fetch(`https://localhost:4000/ticket/${removeTicket}`, {
                //     method: 'DELETE',
                //     headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`}
                // })

                setRemoveTicket('')
                setRemoveTicketObject({})

                setUpdateList(prev => prev + 1)
            } catch(error) {
                throw error
            }
        }

        if (user) {
            removeHandler()
        }

        closeNewTicket()
    }

    // find the title of the select ticket to be deleted 
    useEffect(() => {
        if (currentProjectTickets !== '' && removeTicket) {
            setRemoveTicketObject(currentProjectTickets.find(ticket => ticket._id === removeTicket))
        }
    }, [removeTicket, currentProjectTickets])

    return (
        <div className='project-tickets'>
            <div className='tickets-title-container'>
                <div className={newTicketContainer}>
                    <div onClick={closeNewTicket} className="new-ticket-backdrop"></div>
                    <div onClick={closeNewTicket} className="remove-ticket-backdrop"></div>

                    <form className="new-ticket-modal" onSubmit={(e) => handleNewTicket(e)}>
                        <div className="new-ticket-title">
                            <p>Title: </p>
                            <input required className='new-ticket-input' placeholder='Title' type="text" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
                        </div>
                        <div className="new-ticket-description">
                            <p>Description: </p>
                            <textarea required className='new-ticket-input' placeholder='Edit Description' name="edit-description" id="edit-description" cols="30" rows="4" onChange={(e) => setNewDescription(e.target.value)} value={newDescription} />
                        </div>
                        <div className="new-ticket-dev">
                            <p>Assigned Developer: </p>
                            <select required name="new-ticket-dev" id="new-ticket-dev" onChange={(e) => setNewDev(e.target.value)} value={newDev}>
                                <option value="" disabled>Select One</option>
                                {currentUsers.map((user, i) => (
                                    <option key={i} value={user._id}>{user.username}</option>
                                ))}
                            </select>
                        </div>
                        <div className="new-ticket-priority">
                            <p>Priority: </p>
                            <select required name="new-ticket-priority" id="new-ticket-priority" onChange={(e) => setNewPriority(e.target.value)} value={newPriority}>
                                <option value="" disabled>Select One</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="critical">Critical</option>
                            </select>
                        </div>
                        <div className="new-ticket-type">
                            <p>Type: </p>
                            <select required name="new-ticket-type" id="new-ticket-type" onChange={(e) => setNewType(e.target.value)} value={newType}>
                                <option value="" disabled>Select One</option>
                                <option value="bug">Bug</option>
                                <option value="ui">UI</option>
                                <option value="performance">Performance</option>
                            </select>
                        </div>
                        <div className="new-ticket-date">
                            <div>
                                <p>Due Date: </p>
                                <input required type="date" onChange={(e) => setNewDueDate(e.target.value)} value={newDueDate} />
                            </div>
                            <button className='new-ticket-save' disabled>Add Ticket</button>
                        </div>
                    </form>

                    <form className="remove-ticket-modal" onSubmit={(e) => handleRemoveTicket(e)}>
                        <div className='modal-top'>
                            <div>Select Dev:</div>
                            <select required name="remove-ticket" id="remove-ticket" className='modal-devs' onChange={(e) => setRemoveTicket(e.target.value)} value={removeTicket}>
                                <option value="" disabled>Select One</option>
                                {currentProjectTickets && currentProjectTickets.map((ticket, i) => (
                                    <option value={ticket._id} key={i}>{ticket.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="modal-middle">
                            <div className="">Selected:</div>
                            <div className="modal-selected-user">{removeTicketObject && removeTicketObject.title}</div>
                        </div>
                        <div className="button-container">
                            <button className='remove-ticket' disabled>Remove Ticket</button>
                        </div>
                    </form>

                    <button onClick={openNewTicket} className="new-ticket-left">Add</button>
                    <button onClick={openRemoveTicket} className="new-ticket-right">Remove</button>
                </div>
                <div className="tickets-number-container">
                    <div className="tickets-number">Tickets: {currentProjectTickets && currentProjectTickets.length}</div>
                </div>
                <div className="tickets-title-right">
                    <input className='tickets-search' type="text" placeholder="Search.." onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
                </div>
            </div>
            <div className="tickets-containers">
                {currentProject.tickets && currentTickets.map((ticket, i) => (
                    <div key={i} className="tickets-container">
                        <div className="tickets-container-top">
                            <div className="tickets-name">
                                <p className='tickets-left'>Name:</p>
                                <p>{ticket.title}</p>
                            </div>
                            <div className="tickets-role">
                                <p className='tickets-left'>Dev:</p>
                                <p>{ticket.dev.username}</p>
                            </div>
                        </div>
                        <div className="tickets-container-bottom">
                            <div className="tickets-email">
                                <p className="tickets-left">Due Date:</p>
                                <p>{ticket.dueDate.slice(0, 10)}</p>
                            </div>
                            <div className="tickets-priority">
                                <p className="tickets-left">Priority:</p>
                                <p>{ticket.priority}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="tickets-buttons">
                <Pagination postsPerPage={postsPerPage} currentProject={filteredData} paginate={paginate} paginatePrev={paginatePrev} paginateNext={paginateNext} currentPage={currentPage} />
            </div>
        </div>
    )
}

export default ProjectTickets