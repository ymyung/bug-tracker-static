import { useState, useEffect } from 'react'

export const useChangePassword = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const changePassword = async (passwordChange, userData) => {
        setIsLoading(true)
        setError(null)

        // change password
        const response = await fetch(`https://bug-tracker-backend-ne3r.onrender.com/user/changePassword/${userData._id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({password: passwordChange})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            setIsLoading(false)
        }
    }

    return { changePassword, isLoading, error }
}