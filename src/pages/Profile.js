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
                const response = await fetch(`https://bug-tracker-backend-ne3r.onrender.com/user/email/${user.email}`, {
                    headers: {'Authorization': `Bearer ${user.token}`}
                });
                const data = await response.json();

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