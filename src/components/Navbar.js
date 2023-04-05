import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { useLogout } from '../hooks/useLogout'

import "./Navbar.scss"

const Navbar = () => {
    const [navbarLeft, setNavbarLeft] = useState("navbar-left")
    const [logoutContainer, setLogoutContainer] = useState('logout--container')
    const [navbar, setNavbar] =useState('navbar')
    const { logout } = useLogout()

    const openSidebar = () => {
        setNavbarLeft("navbar-left sidebar--open")
    }

    const closeSidebar = () => {
        setNavbarLeft("navbar-left")
    }

    // const openLogout = () => {
    //     setNavbarLeft("navbar-left sidebar--open sidebar--logout")
    // }

    const LogoutOpen = () => {
        setLogoutContainer('logout--container logout-open')
        setNavbar('navbar logout-open')
    }

    const logoutClose = () => {
        setLogoutContainer('logout--container')
        setNavbar('navbar')
    }

    const logoutCloseAll = () => {
        setLogoutContainer('logout--container')
        setNavbar('navbar')
        setNavbarLeft("navbar-left")
        logout()
    }

    return (
        <div className={navbar}>
            <div className='logout'>
                <div className={logoutContainer}>
                    <div onClick={logoutClose} className="logout-backdrop"></div>
                    <div className="logout-modal">
                        <div className="logout--head">
                            <div className="title">
                                <h1>Logout</h1>
                            </div>
                        </div>
                        <div className="logout--body">
                            <button onClick={logoutClose} type="button">No</button>
                            <button onClick={logoutCloseAll} type="button">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={navbarLeft}>
                <div onClick={closeSidebar} className="sidebar-overlay"></div>
                <div onClick={openSidebar} className="sidebar-button">
                    <span className="material-symbols-outlined menu">menu</span>
                </div>
                <nav className="sidebar">
                    <span onClick={closeSidebar} className="material-symbols-outlined x">close</span>
                    <ul>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/"><span className="material-symbols-outlined">dashboard</span>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/projects"><span className="material-symbols-outlined">lightbulb</span>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/users-all"><span className="material-symbols-outlined">group</span>Users</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/my-tickets"><span className="material-symbols-outlined">confirmation_number</span>My Tickets</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeSidebar} exact="true" to="/profile"><span className="material-symbols-outlined">person</span>Profile</NavLink>
                        </li>
                        <li>
                            <div onClick={LogoutOpen} className='sidebar-logout'><span className="material-symbols-outlined">logout</span>Logout</div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="navbar-middle">
                <NavLink onClick={closeSidebar} className="navbar-logo" to="/">
                    <span className="material-symbols-outlined bug">bug_report</span>
                    Bug Tracker
                </NavLink>
            </div>
            <div className="navbar-right">
                <NavLink className="navbar-image-container" onClick={closeSidebar} exact="true" to="/profile">
                    <img className="navbar-image" src="https://i.pinimg.com/600x315/4e/24/3c/4e243cc596ec994e7a8c9711b1034a11.jpg" alt="" />
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar

