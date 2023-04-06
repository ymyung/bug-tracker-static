import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import Pagination from '../components/Pagination'
import Ticket from '../pages/Ticket'

import "./MyTickets.scss"

const MyTickets = () => {
    const [newTicketContainer, setNewTicketContainer] = useState('new-myticket-container')
    const [allTickets, setAllTickets] = useState({})
    const [userUsername, setUserUsername] = useState('')
    const { user, dispatch } = useAuthContext()

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(8)

    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                setLoading(true)
                // const userInfo = await fetch(`https://localhost:4000/user/email/${user.email}`, {
                //     headers: {'Authorization': `Bearer ${user.token}`}
                // })

                // const data = await userInfo.json();
                const data = {
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
                }

                const openTickets = data.tickets.filter(ticket => ticket.status === 'open')

                setAllTickets(openTickets)
                setUserUsername(data.username)
                setPostsPerPage(8)
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

    const dataDueDate = Array.isArray(allTickets) && allTickets.map(ticket => (
        ticket.dueDate.substring(0, 7)
    ))

    const closeNewTicket = () => {
        setNewTicketContainer('new-myticket-container')
    }

    // filter devs based on search
    const filteredData = Array.isArray(allTickets) && allTickets.filter((ticket) => {
        if (searchValue === '') {
            return ticket
        } else if (ticket.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return ticket
        }
        return null
    })

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = Array.isArray(filteredData) && filteredData.slice(indexOfFirstPost, indexOfLastPost)
    
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

    // render clicked ticket
    const [oneTicket, setOneTicket] = useState('ticket')
    const [currentTicket, setCurrentTicket] = useState({})

    const renderTicket =(ticket, res) => {
        if (res === 'oneTicket') {
            setOneTicket(prev => 'ticket-on')
            setCurrentTicket(ticket)
        } else if (res === 'allTickets') {
            setOneTicket(prev => 'ticket')
        }
    }

    return (
        <>
            <div className='myticket-tickets'>
                <div className='myticket-title-container'>
                    <div className={newTicketContainer}>
                        <div onClick={closeNewTicket} className="new-myticket-backdrop"></div>
                    </div>
                    <div className="myticket-number-container">
                        <div className="myticket-number">My Tickets: {filteredData.length}</div>
                    </div>
                    <div className="myticket-title-right">
                        <input className='myticket-search' type="text" placeholder="Search.." onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
                    </div>
                </div>
                <div className="myticket-containers">
                    {loading ? <div>loading...</div> : Array.isArray(allTickets) && currentPosts.map((ticket, i) => (
                    <div key={i} className="myticket-container" onClick={() => renderTicket(ticket, 'oneTicket')}>
                        <div className="myticket-container-top">
                            <div className="myticket-name">
                                <p className='myticket-left'>Ticket Name:</p>
                                <p>{ticket.title}</p>
                            </div>
                            <div className="myticket-role">
                                <p className='myticket-left'>Dev:</p>
                                <p>{userUsername}</p>
                            </div>
                        </div>
                        <div className="myticket-container-bottom">
                            <div className="myticket-email">
                                <p className="myticket-left">Due Date:</p>
                                <p>{dataDueDate[i]}</p>
                            </div>
                            <div className="myticket-priority">
                                <p className="myticket-left">Priority:</p>
                                <p>{ticket.priority}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="pagination-container">
                    <Pagination postsPerPage={postsPerPage} currentProject={filteredData} paginate={paginate} paginatePrev={paginatePrev} paginateNext={paginateNext} currentPage={currentPage} />
                </div>
            </div>
            <Ticket oneTicket={oneTicket} renderTicket={renderTicket} allTickets={allTickets} currentTicket={currentTicket} userUsername={userUsername} />
        </>
    )
}

export default MyTickets