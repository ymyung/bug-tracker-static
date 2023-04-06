import React, { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'
import { useAuthContext } from '../hooks/useAuthContext'

import './UsersAll.scss'

const UsersAll = () => {
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [allUsers, setAllUsers] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const { user, dispatch } = useAuthContext()

    // 
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                setLoading(true)
                // const userInfo = await fetch(`https://localhost:4000/user/`, {
                //     headers: {'Authorization': `Bearer ${user.token}`}
                // })

                // const data = await userInfo.json();
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

                setAllUsers(data)
                setPostsPerPage(10)
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        };

        if (user) {
            fetchTickets();
        }
    }, [user, dispatch]) 

    // filter devs based on search
    const filteredData = allUsers.filter((user) => {
        if (searchValue === '') {
            return user
        } else if (user.username.toLowerCase().includes(searchValue.toLowerCase())) {
            return user
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

    return (
        <div className='usersAll'>
            <div className='usersAll-top'>
                <div className='usersAll-button usersAll-button-bottom'>All Users</div>
                <input className='devs-search' type="text" placeholder="Search.." onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
            </div>
            <div className="usersAll-body">
                <div className="usersAll-body-container">
                    <div className="usersAll-body-top">
                        <p>Users: {allUsers.length}</p>
                        <p className='middle'>Email</p>
                        <p>Role</p>
                    </div>
                    <div className="usersAll-body-middle">
                        {loading ? <div>loading...</div> : Array.isArray(allUsers) && currentDevs.map((user, i) => (
                            <div key={i} className="usersAll-body-middle-container">
                                <p className='top-and-bottom'>{user.username}</p>
                                <p className='middle'>{user.email}</p>
                                <p className='top-and-bottom'>{user.role}</p>
                            </div>  
                        ))}
                    </div>
                    <div className="usersAll-body-bottom">
                        <Pagination postsPerPage={postsPerPage} currentProject={filteredData} paginate={paginate} paginatePrev={paginatePrev} paginateNext={paginateNext} currentPage={currentPage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersAll