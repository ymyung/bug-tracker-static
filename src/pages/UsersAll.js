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

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                setLoading(true)
                const userInfo = await fetch(`https://bug-tracker-backend-ne3r.onrender.com/user/`, {
                    headers: {'Authorization': `Bearer ${user.token}`}
                })

                const data = await userInfo.json();

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