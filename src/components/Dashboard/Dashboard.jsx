import React from 'react'
import NavBar from "../NavBar/NavBar"


const Dashboard = ({children}) => {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    )
}

export default Dashboard
