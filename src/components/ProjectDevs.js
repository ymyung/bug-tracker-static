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
                const response = await fetch('https://bug-tracker-backend-ne3r.onrender.com/user/', {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })

                const data = await response.json()
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

                await fetch(`https://bug-tracker-backend-ne3r.onrender.com/project/addDeveloper/${currentProject._id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                    body: JSON.stringify(requestBody)
                })

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

                await fetch(`https://bug-tracker-backend-ne3r.onrender.com/project/removeDeveloper/${currentProject._id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`},
                    body: JSON.stringify(requestBody)
                })

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