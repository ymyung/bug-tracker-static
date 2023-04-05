import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import TicketEdit from './TicketEdit'
import { useAuthContext } from '../hooks/useAuthContext'

import './Ticket.scss'

const Ticket = ({ oneTicket, renderTicket, allTickets, currentTicket, userUsername }) => {
    const [createdBy, setCreatedBy] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [dateResolved, setDateResolved] = useState('')
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userInfo = await fetch(`https://bug-tracker-backend-ne3r.onrender.com/user/${currentTicket.createdBy}`, {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })
    
                const data = await userInfo.json()

                setCreatedBy(data)
                
                if (currentTicket && Object.keys(currentTicket).length > 0) {
                    setDateCreated(currentTicket.dateCreated.slice(0, 7))
                    setDueDate(currentTicket.dueDate.slice(0, 7))
                    setDateResolved(currentTicket.dateResolved.slice(0,7))
                }
            } catch (error) {
            console.log(error);
            }
        }

        if (user && currentTicket && Object.keys(currentTicket).length > 0) {
        fetchUser()
        }
    }, [currentTicket])

    // open edit ticket container
    const [ticketEdit, setTicketEdit] = useState('TicketEdit')

    const openTicketEdit = () => {
        setTicketEdit(prev => 'TicketEdit-on')
    }

    const closeTicketEdit = () => {
        setTicketEdit(prev => 'TicketEdit')
    }

    return (
        <div className={oneTicket}>
            <div className="ticket-container">
                <div className='ticket-buttons-container'>
                    <div exact="true" to="/ticket-edit" className='ticket-button' onClick={openTicketEdit}>Edit Ticket</div>
                </div>
                <div className="ticket-body-container">
                    <div className="ticket-container">
                        <div exact='true' to='/my-tickets' className='ticket-button' onClick={() => renderTicket(allTickets, 'allTickets')}>Go Back</div>
                    </div>
                    <div className="ticket-body">
                        <div className='ticket-body-subcontainer'>
                            <p>Title:</p>
                            <p>{currentTicket && currentTicket.title}</p>
                        </div>
                        <div className='ticket-body-description'>
                            <p>Description:</p>
                            <p>{currentTicket && currentTicket.description}</p>
                        </div>
                        <div className='ticket-body-subcontainer'>
                            <p>Assigned Developer:</p>
                            <p>{userUsername}</p>
                        </div>
                        <div className='ticket-body-subcontainer'>
                            <p>Created By:</p>
                            <p>{currentTicket && createdBy.username}</p>
                        </div>
                        <div className='ticket-body-subcontainer'>
                            <p>Date Created:</p>
                            <p>{dateCreated}</p>
                        </div>
                        <div className='ticket-body-subcontainer'>
                            <p>Priority:</p>
                            <p>{currentTicket && currentTicket.priority}</p>
                        </div>
                        <div className='ticket-body-subcontainer'>
                            <p>Type:</p>
                            <p>{currentTicket && currentTicket.type}</p>
                        </div>
                        <div className='ticket-body-subcontainer'>
                            <p>Due Date:</p>
                            <p>{dueDate}</p>
                        </div>
                        <div className='ticket-body-subcontainer'>
                            <p>Status:</p>
                            <p>{currentTicket && currentTicket.status}</p>
                        </div>
                        <div className='ticket-body-subcontainer'>
                            <p>Date Resolved:</p>
                            <p>{dateResolved}</p>
                        </div>
                    </div>
                </div>
            </div>
            <TicketEdit ticketEdit={ticketEdit} closeTicketEdit={closeTicketEdit} currentTicket={currentTicket} />
        </div>
    )
}

export default Ticket