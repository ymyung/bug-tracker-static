import React, { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

import './ProjectDetails.scss'

const ProjectDescription = ({ currentProject, setCurrentProject, setUpdateList }) => {
    const [editProjectContainer, setEditProjectContainer] = useState('edit-project-container')

    const [editTitle, setEditTitle] = useState('')
    const [editDescription, setEditDescription] = useState('')

    const { user } = useAuthContext()

    // Open edit project
    const openEdit = () => {
        setEditProjectContainer('edit-project-container edit-project')
        setEditTitle(currentProject.title)
        setEditDescription(currentProject.description)
    }

    // Open delete project
    const openDelete = () => {
        setEditProjectContainer('edit-project-container delete-project')
    }

    // Close edit/delete project modals
    const closeEdit = () => {
        setEditProjectContainer('edit-project-container')
    }

    // handle project edit 
    const handleProjectEdit = (e) => {
        e.preventDefault()
        
        const handleEdit = async () => {
            try {
                const requestBody = {}
                requestBody.title = editTitle
                requestBody.description = editDescription

                await fetch(`https://bug-tracker-backend-ne3r.onrender.com/project/${currentProject._id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                    body: JSON.stringify(requestBody)
                })

                setUpdateList(prev => prev + 1)
            } catch(error) {
                throw error
            }
        }

        if (user) {
            handleEdit()
        }

        closeEdit()
    }

    // handle project delete
    const handleProjectDelete = (e) => {
        e.preventDefault()

        const handleDelete = async () => {
            try {
                await fetch(`https://bug-tracker-backend-ne3r.onrender.com/project/${currentProject._id}`, {
                    method: 'DELETE',
                    headers: {'Authorization': `Bearer ${user.token}`}
                })

                setUpdateList(prev => prev + 1)
            } catch(error) {
                throw error
            }
        }

        if (user) {
            handleDelete()
        }
    }

    return (
        <div className='project-details'>
            <div className="project-details-container">
                <div className="project-title">
                    <p className='project-left'>Project Title:</p>
                    <p className='project-right'>{currentProject && currentProject.title}</p>
                </div>
                <div className="project-details-devs">
                    <p className='project-left'># of Assigned Devs:</p>
                    {currentProject && <p className='project-right-numbers'>{currentProject.devs ? currentProject.devs.length : 0}</p>}
                </div>
                <div className="project-details-tickets">
                    <p className='project-left'># of Tickets</p>
                    {currentProject && <p className='project-right-numbers'>{currentProject.tickets ? currentProject.tickets.length : 0}</p>}
                </div>
                <div className="project-description">
                    <p className='project-left'>Description:</p>
                    {currentProject && <p className='project-right'>{currentProject && currentProject.description}</p>}
                </div>
            </div>
            <div className={editProjectContainer}>
                <div onClick={closeEdit} className="project-description-backdrop"></div>
                <form className="edit-project-modal" onSubmit={(e) => handleProjectEdit(e)}>
                    <div>
                        <p>Edit Name:</p>
                        <input className='edit-project-inputs' placeholder='Edit Name' type="text" onChange={(e => setEditTitle(e.target.value))} value={editTitle} />
                    </div>
                    <div>
                        <p>Edit Description:</p>
                        <textarea className='edit-project-inputs' placeholder='Edit Description' name="edit-description" id="edit-description" cols="30" rows="6" onChange={(e) => setEditDescription(e.target.value)} value={editDescription}></textarea>
                    </div>
                    <div className='project-modal-bottom'>
                        <button className='modal-bottom-buttons' type='submit' disabled>Save Changes</button>
                    </div>
                </form>
                <div onClick={closeEdit} className="project-description-backdrop-delete"></div>
                <form className="delete-project-modal" onSubmit={(e) => handleProjectDelete(e)}>
                    <div className="button-container">
                        <div>Are you sure you want to delete this project?</div>
                        <button className='add-dev-submit' onClick={closeEdit} disabled>Delete Project</button>
                    </div>
                </form>
            </div>
            <div className='project-button-container'>
                <button onClick={openEdit} className='edit-project-button'>Edit Project</button>
                <button onClick={openDelete} className='delete-project-button'>Delete Project</button>
            </div>
        </div>
    )
}

export default ProjectDescription