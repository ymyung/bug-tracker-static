import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const deleteToken = () => {
        // remove token and expiration time from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
    };

    useEffect(() => {
        // check if token has expired on every render
        const expirationTime = parseInt(localStorage.getItem('expirationTime'));
        if (expirationTime && expirationTime <= new Date().getTime()) {
            deleteToken();
        }
    }, [])

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://bug-tracker-backend-ne3r.onrender.com/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // save user to local storage
            const expirationTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
            localStorage.setItem('user', JSON.stringify(json))
            localStorage.setItem('expirationTime', expirationTime);

            // update auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}