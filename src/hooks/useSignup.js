import { useState } from 'react'
// import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error] = useState(null)
    const [isLoading] = useState(null)
    // const { dispatch } = useAuthContext()

    const signup = async (username, email, password, role, image) => {
        // setIsLoading(true)
        // setError(null)

        // console.log(username, email, password, role, image)

        // const response = await fetch('https://locahhost:4000/user/signup', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({username, email, password, role, image})
        // })
        // const json = await response.json()

        // if (!response.ok) {
        //     setIsLoading(false)
        //     setError(json.error)
        // }
        // if (response.ok) {
        //     // save user to local storage
        //     localStorage.setItem('user', JSON.stringify(json))

        //     // update auth context
        //     dispatch({type: 'LOGIN', payload: json})

        //     setIsLoading(false)
        // }
    }

    return { signup, isLoading, error }
}