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
    const [newCreatedBy, setNewCreatedBy] = useState('')
    const [newDev, setNewDev] = useState('')
    const [newDateCreated] = useState(new Date().toISOString())
    const [newDueDate, setNewDueDate] = useState('')
    const [newType, setNewType] = useState('')
    const [newPriority, setNewPriority] = useState('')
    const [newStatus] = useState('open')
    const [newDateResolved] = useState('')

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
                const response = await fetch('https://bug-tracker-backend-ne3r.onrender.com/user/', {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })

                const data = await response.json()
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
                const response = await fetch(`https://bug-tracker-backend-ne3r.onrender.com/user/email/${user.email}`, {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })

                const data = await response.json()

                setNewCreatedBy(data._id)
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
                const requestBody = {}
                requestBody.title = newTitle
                requestBody.description = newDescription
                requestBody.createdBy = newCreatedBy
                requestBody.dev = newDev
                requestBody.dateCreated = newDateCreated
                requestBody.dueDate = newDueDate
                requestBody.type = newType
                requestBody.priority = newPriority
                requestBody.status = newStatus
                requestBody.dateResolved = newDateResolved

                const response = await fetch('https://bug-tracker-backend-ne3r.onrender.com/ticket/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                    body: JSON.stringify(requestBody)
                })

                // get ticket id
                const data = await response.json()

                // add ticket to project and devs array
                const requestBody2 = {}
                requestBody2._id = data._id
                requestBody2.userId = newDev

                await fetch(`https://bug-tracker-backend-ne3r.onrender.com/project/addTicket/${currentProject._id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                    body: JSON.stringify(requestBody2)
                })

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

                await fetch(`https://bug-tracker-backend-ne3r.onrender.com/project/deleteTicket/${currentProject._id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                    body: JSON.stringify(requestBody)
                })

                // delete ticket
                await fetch(`https://bug-tracker-backend-ne3r.onrender.com/ticket/${removeTicket}`, {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`}
                })

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