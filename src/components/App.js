import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import { useSelector } from 'react-redux'

import Login from './Login'
import Home from './Home'
import Layout from './Layout'

const App = () => {
    // const auth = useSelector(state => state.auth)
    // console.log(auth)
    return (
        <Routes>
            {/* <Route path="/login" element={<Login />} />   */}
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App