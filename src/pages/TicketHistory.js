import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './TicketHistory.scss'

const TicketHistory = () => {
    // ticketHistoryContainer: comment state
    // ticketHistoryFileContainer: file state
    const [ticketHistoryContainer, setTicketHistoryContainer] = useState('new-TicketHistory-container')
    const [ticketHistoryFileContainer, setTicketHistoryFileContainer] = useState('file-TicketHistory-container')

    // comment functions
    const openDescription = () => {
        setTicketHistoryContainer('new-TicketHistory-container new-TicketHistory-open')
    }

    const closeDescription = () => {
        setTicketHistoryContainer('new-TicketHistory-container')
    }

    // file functions
    const openFile = () => {
        setTicketHistoryFileContainer('file-TicketHistory-container file-TicketHistory-open')
    }

    const closeFile = () => {
        setTicketHistoryFileContainer('file-TicketHistory-container')
    }

    return (
        <div className='TicketHistory'>
            <div className="TicketHistory-container">
                <div className='TicketHistory-buttons-container'>
                    <NavLink exact="true" to="/ticket" className='TicketHistory-button'>Go Back</NavLink>
                    <NavLink exact="true" to="/TicketHistory-history" className='TicketHistory-button TicketHistory-button-bottom'>Ticket History</NavLink>
                </div>
                
                <div className='TicketHistory-tickets'>
                    <div className='TicketHistory-title-container'>

                        <div>
                            <div className={ticketHistoryContainer}>
                                <div onClick={closeDescription} className="new-TicketHistory-backdrop"></div>
                                <div className="new-TicketHistory-modal">
                                    <div className="new-TicketHistory-description">
                                        <p>Comments: </p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor qui pariatur itaque. Excepturi nobis impedit error in dolores et enim.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={ticketHistoryFileContainer}>
                                <div onClick={closeFile} className="new-TicketHistory-backdrop"></div>
                                <div className="new-TicketHistory-modal"></div>
                            </div>
                        </div>
                    
                        <div className="TicketHistory-number-container">
                            <div className="TicketHistory-number">Ticket History: 8</div>
                        </div>
                        <div className="TicketHistory-title-right">
                            <input className='TicketHistory-search' type="text" placeholder="Search.." />
                        </div>
                    </div>
                    <div className="TicketHistory-containers">
                        <div className="TicketHistory-container">
                            <div className="TicketHistory-container-top">
                                <div className="TicketHistory-name">
                                    <p className='TicketHistory-left'>Ticket Name:</p>
                                    <p>Ticket</p>
                                </div>
                                <div className="TicketHistory-comments">
                                    <p className='TicketHistory-left'>Comment:</p>
                                    <p className='TicketHistory-right' onClick={openDescription}>Comment</p>
                                </div>
                            </div>
                            <div className="TicketHistory-container-bottom">
                                <div className="TicketHistory-date">
                                    <p className="TicketHistory-left">Date Changed:</p>
                                    <p>Nov 1</p>
                                </div>
                                <div className="TicketHistory-file">
                                    <p className="TicketHistory-left">File:</p>
                                    <p className='TicketHistory-right' onClick={openFile}>File</p>
                                </div>
                            </div>
                        </div>
                        <div className="TicketHistory-container">
                            <div className="TicketHistory-container-top">
                                <div className="TicketHistory-name">
                                    <p className='TicketHistory-left'>Ticket Name:</p>
                                    <p>Ticket</p>
                                </div>
                                <div className="TicketHistory-comments">
                                    <p className='TicketHistory-left'>Comment:</p>
                                    <p className='TicketHistory-right' onClick={openDescription}>Comment</p>
                                </div>
                            </div>
                            <div className="TicketHistory-container-bottom">
                                <div className="TicketHistory-date">
                                    <p className="TicketHistory-left">Date Changed:</p>
                                    <p>Nov 1</p>
                                </div>
                                <div className="TicketHistory-file">
                                    <p className="TicketHistory-left">File:</p>
                                    <p className='TicketHistory-right' onClick={openFile}>File</p>
                                </div>
                            </div>
                        </div>
                        <div className="TicketHistory-container">
                            <div className="TicketHistory-container-top">
                                <div className="TicketHistory-name">
                                    <p className='TicketHistory-left'>Ticket Name:</p>
                                    <p>Ticket</p>
                                </div>
                                <div className="TicketHistory-comments">
                                    <p className='TicketHistory-left'>Comment:</p>
                                    <p className='TicketHistory-right' onClick={openDescription}>Comment</p>
                                </div>
                            </div>
                            <div className="TicketHistory-container-bottom">
                                <div className="TicketHistory-date">
                                    <p className="TicketHistory-left">Date Changed:</p>
                                    <p>Nov 1</p>
                                </div>
                                <div className="TicketHistory-file">
                                    <p className="TicketHistory-left">File:</p>
                                    <p className='TicketHistory-right' onClick={openFile}>File</p>
                                </div>
                            </div>
                        </div>
                        <div className="TicketHistory-container">
                            <div className="TicketHistory-container-top">
                                <div className="TicketHistory-name">
                                    <p className='TicketHistory-left'>Ticket Name:</p>
                                    <p>Ticket</p>
                                </div>
                                <div className="TicketHistory-comments">
                                    <p className='TicketHistory-left'>Comment:</p>
                                    <p className='TicketHistory-right' onClick={openDescription}>Comment</p>
                                </div>
                            </div>
                            <div className="TicketHistory-container-bottom">
                                <div className="TicketHistory-date">
                                    <p className="TicketHistory-left">Date Changed:</p>
                                    <p>Nov 1</p>
                                </div>
                                <div className="TicketHistory-file">
                                    <p className="TicketHistory-left">File:</p>
                                    <p className='TicketHistory-right' onClick={openFile}>File</p>
                                </div>
                            </div>
                        </div>
                        <div className="TicketHistory-container">
                            <div className="TicketHistory-container-top">
                                <div className="TicketHistory-name">
                                    <p className='TicketHistory-left'>Ticket Name:</p>
                                    <p>Ticket</p>
                                </div>
                                <div className="TicketHistory-comments">
                                    <p className='TicketHistory-left'>Comment:</p>
                                    <p className='TicketHistory-right' onClick={openDescription}>Comment</p>
                                </div>
                            </div>
                            <div className="TicketHistory-container-bottom">
                                <div className="TicketHistory-date">
                                    <p className="TicketHistory-left">Date Changed:</p>
                                    <p>Nov 1</p>
                                </div>
                                <div className="TicketHistory-file">
                                    <p className="TicketHistory-left">File:</p>
                                    <p className='TicketHistory-right' onClick={openFile}>File</p>
                                </div>
                            </div>
                        </div>
                        <div className="TicketHistory-container">
                            <div className="TicketHistory-container-top">
                                <div className="TicketHistory-name">
                                    <p className='TicketHistory-left'>Ticket Name:</p>
                                    <p>Ticket</p>
                                </div>
                                <div className="TicketHistory-comments">
                                    <p className='TicketHistory-left'>Comment:</p>
                                    <p className='TicketHistory-right' onClick={openDescription}>Comment</p>
                                </div>
                            </div>
                            <div className="TicketHistory-container-bottom">
                                <div className="TicketHistory-date">
                                    <p className="TicketHistory-left">Date Changed:</p>
                                    <p>Nov 1</p>
                                </div>
                                <div className="TicketHistory-file">
                                    <p className="TicketHistory-left">File:</p>
                                    <p className='TicketHistory-right' onClick={openFile}>File</p>
                                </div>
                            </div>
                        </div>
                        <div className="TicketHistory-container">
                            <div className="TicketHistory-container-top">
                                <div className="TicketHistory-name">
                                    <p className='TicketHistory-left'>Ticket Name:</p>
                                    <p>Ticket</p>
                                </div>
                                <div className="TicketHistory-comments">
                                    <p className='TicketHistory-left'>Comment:</p>
                                    <p className='TicketHistory-right' onClick={openDescription}>Comment</p>
                                </div>
                            </div>
                            <div className="TicketHistory-container-bottom">
                                <div className="TicketHistory-date">
                                    <p className="TicketHistory-left">Date Changed:</p>
                                    <p>Nov 1</p>
                                </div>
                                <div className="TicketHistory-file">
                                    <p className="TicketHistory-left">File:</p>
                                    <p className='TicketHistory-right' onClick={openFile}>File</p>
                                </div>
                            </div>
                        </div>
                        <div className="TicketHistory-container">
                            <div className="TicketHistory-container-top">
                                <div className="TicketHistory-name">
                                    <p className='TicketHistory-left'>Ticket Name:</p>
                                    <p>Ticket</p>
                                </div>
                                <div className="TicketHistory-comments">
                                    <p className='TicketHistory-left'>Comment:</p>
                                    <p className='TicketHistory-right' onClick={openDescription}>Comment</p>
                                </div>
                            </div>
                            <div className="TicketHistory-container-bottom">
                                <div className="TicketHistory-date">
                                    <p className="TicketHistory-left">Date Changed:</p>
                                    <p>Nov 1</p>
                                </div>
                                <div className="TicketHistory-file">
                                    <p className="TicketHistory-left">File:</p>
                                    <p className='TicketHistory-right' onClick={openFile}>File</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="TicketHistory-buttons">
                        <button type='button' className="TicketHistory-button TicketHistory-previous">Prev</button>
                        <p>Page 1</p>
                        <button type='button' className="TicketHistory-button TicketHistory-next">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketHistory