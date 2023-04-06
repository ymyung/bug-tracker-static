import React, { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useChangePassword } from '../hooks/useChangePassword.js'

import "./Profile.scss"

const Profile = () => {
    const [profilePasswordContainer, setProfilePasswordContainer] = useState('profile-password-container')
    const [passwordChange, setPasswordChange] = useState('')
    const [userData, setUserData] = useState({})
    const { dispatch, user } = useAuthContext()
    const { changePassword, error } = useChangePassword()

    const openChangePassword = () => {
        setProfilePasswordContainer('profile-password-container change-password')
    }

    const closeChangePassword = () => {
        setProfilePasswordContainer('profile-password-container')
    }

    const changePasswordCheck = (e) => {
        e.preventDefault()

        changePassword(passwordChange, userData)

        closeChangePassword()
    }

    // get user
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                // const response = await fetch(`https://localhost:4000/user/email/${user.email}`, {
                //     headers: {'Authorization': `Bearer ${user.token}`}
                // });
                // const data = await response.json();
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

                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (user) {
            fetchTickets();
        }
    }, [dispatch, user]);

    // render profile
    return (
        <div className='profile'>
            <div className="profile-container">
                <div className="profile-picture">
                    {userData.image ? userData.image : <div className="profile-image">User</div>}
                </div>
                <div className="profile-username">
                    <p>{userData.username}</p>
                </div>
                <div className="profile-email-container">
                    <p className='profile-email'>{userData.email}</p>
                </div>
                <div className={profilePasswordContainer}>
                    <div onClick={closeChangePassword} className="profile-backdrop"></div>
                    <button onClick={openChangePassword} type='button' className='profile-password'>Change Password</button>

                    {/* change password modal */}
                    <form className="profile-modal" onSubmit={(e) => changePasswordCheck(e)}>
                        <input type="password" onChange={(e) => setPasswordChange(e.target.value)} />
                        <button disabled className='password-button'>Change Password</button>
                        {error && <div>Invalid Password</div>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile