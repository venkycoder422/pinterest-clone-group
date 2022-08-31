import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'

const Home_BL = () => {
    const user = useSelector(state => state.auth.userData)
  return (
    <div>
        <Navbar/>
        <h1>Home Before Login</h1>
    </div>
  )
}

export default Home_BL
