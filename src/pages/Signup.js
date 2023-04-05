import { useState } from 'react'
import { NavLink } from "react-router-dom"
import { useSignup } from '../hooks/useSignup'

import './Signup.scss'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [image] = useState(null)
    const { signup, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(username, email, password, role, image)
    }

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <div className="signup-container">
                <div className="signup-buttons-container">
                    <NavLink className='signup-container-button' exact="true" to="/login">Login</NavLink>
                    <NavLink className='signup-container-button signup-button-on' exact="true" to="/signup">Sign Up</NavLink>
                </div>

                <h3>Sign up</h3>

                <label className='signup-labels'>Username:</label>
                <input type="username" onChange={(e) => setUsername(e.target.value)} value={username} required />
                <label className='signup-labels'>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                <label className='signup-labels'>Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                <label className='signup-labels'>Role:</label>
                <select className="signup-select" onChange={handleRoleChange} value={role} name="signup-roles" id="signup-roles" required>
                    <option value="" disabled defaultValue>--Select a role--</option>
                    <option value="developer">Developer</option>
                    <option value="admin">Administrator</option>
                    <option value="manager">Manager</option>
                </select>

                <button disabled>Submit</button>
                {error && <div className='signup-error'>{error}</div>}
            </div>
        </form>
    )
}

export default Signup