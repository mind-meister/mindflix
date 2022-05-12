import React from 'react'
import { UserAuth } from '../context/AuthContext'


const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
    if(!user) {
        return window.location = '/'
    } else {
        return children
    }
}

export default ProtectedRoute