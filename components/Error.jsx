import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#493564',
            color: 'whitesmoke'
        }}>
            <h1>{error.status} 😒 Something went wrong!!😵‍💫</h1>
        </div>
    )
}
