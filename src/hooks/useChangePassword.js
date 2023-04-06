import { useState } from 'react'

export const useChangePassword = () => {
    const [error] = useState(null)
    const [isLoading] = useState(false)

    const changePassword = async (passwordChange, userData) => {
        // setIsLoading(true)
        // setError(null)

        // // change password
        // const response = await fetch(`https://localhost:4000/user/changePassword/${userData._id}`, {
        //     method: 'PATCH',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({password: passwordChange})
        // })
        // const json = await response.json()

        // if (!response.ok) {
        //     setIsLoading(false)
        //     setError(json.error)
        // }
        // if (response.ok) {
        //     setIsLoading(false)
        // }
    }

    return { changePassword, isLoading, error }
}