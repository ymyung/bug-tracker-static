import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

import './TicketEdit.scss'

const TicketEdit = ({ ticketEdit, closeTicketEdit, currentTicket }) => {
    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [editPriority, setEditPriority] = useState('')
    const [editType, setEditType] = useState('')
    const [editResolved, setEditResolved] = useState('')
    const { user } = useAuthContext()

    // set edit ticket values
    useEffect(() => {
        if (currentTicket !== {}) {
            setEditTitle(currentTicket.title ? currentTicket.title : '')
            setEditDescription(currentTicket.description)
            setEditPriority(currentTicket.priority)
            setEditType(currentTicket.type)
        }
    }, [currentTicket])

    // edit ticket
    const handleTicketEdit = (e) => {
        e.preventDefault()

        const editTicket = async () => {
            try {
                const requestBody = {};
                requestBody.title = editTitle;
                requestBody.description = editDescription;
                requestBody.priority = editPriority;
                requestBody.type = editType;
                requestBody.resolved = editResolved;

                await fetch(`https://bug-tracker-backend-ne3r.onrender.com/ticket/${currentTicket._id}`, {
                    method: 'PATCH',
                    headers: {'Authorization': `Bearer ${user.token}`, 'Content-Type': 'application/json'},
                    body: JSON.stringify(requestBody)
                })
            } catch (error) {
                throw error
            }
        }

        if (user) {
            editTicket()
        }
    }

    // handle resolved checkbox
    const handleResolvedChange = (e) => {
        const isChecked = e.target.checked;
        const resolvedValue = isChecked ? 'resolved' : 'unresolved';
        setEditResolved(resolvedValue);
    };

    return (
        <div className={ticketEdit}>
            <div className="TicketEdit-container">
                <div className='TicketEdit-buttons-container'>
                    <div className='TicketEdit-button' onClick={closeTicketEdit}>Go Back</div>
                </div>
                <div className="TicketEdit-body-container">
                    <form className="TicketEdit-body" onSubmit={(e) => handleTicketEdit(e)}>
                        <div className='TicketEdit-body-subcontainer'>
                            <p>Title:</p>
                            <input className='TicketEdit-body-subcontainer-bottom' placeholder='title' type="text" onChange={(e) => setEditTitle(e.target.value)} value={editTitle} />
                        </div>
                        <div className='TicketEdit-body-description'>
                            <p>Description:</p>
                            <textarea placeholder='description' name="description" id="description" cols="40" rows="5" onChange={(e) => setEditDescription(e.target.value)} value={editDescription}></textarea>
                        </div>
                        <div className='TicketEdit-body-subcontainer'>
                            <p>Priority:</p>
                            <select className='TicketEdit-body-subcontainer-bottom' name="" id="" onChange={(e) => setEditPriority(e.target.value)} value={editPriority}>
                                <option value="" disabled>Select One</option>
                                <option value="low">low</option>
                                <option value="medium">medium</option>
                                <option value="high">high</option>
                                <option value="critical">critical</option>
                            </select>
                        </div>
                        <div className='TicketEdit-body-subcontainer'>
                            <p>Type:</p>
                            <select className='TicketEdit-body-subcontainer-bottom' name="" id="" onChange={(e) => setEditType(e.target.value)} value={editType}>
                                <option value="" disabled>Select One</option>
                                <option value="ui">ui</option>
                                <option value="performance">performance</option>
                                <option value="bug">bug</option>
                            </select>
                        </div>
                        <div className='TicketEdit-body-subcontainer'>
                            <p>Resolved:</p>
                            <input className='TicketEdit-body-subcontainer-bottom editCheckbox' defaultValue='' placeholder='date resolved' type="checkbox" onChange={handleResolvedChange} />
                        </div>
                        <div className='TicketEdit-buttons-container'>
                            <button className='TicketEdit-button' disabled>Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TicketEdit