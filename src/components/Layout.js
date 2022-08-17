import React from 'react'
import Navbar from './Navbar'
import {Outlet, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = () => {
    // const navigate = useNavigate()
    const auth = useSelector(state => state.auth)
    console.log(auth)
    // if(!auth){
    //     return <Navigate to='/login' />
    // }
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>
    )
    
}

export default Layout