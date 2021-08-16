import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    function Logout(){
        window.localStorage.clear()
    }
    return (
        <nav id='navbar'>
            <Link to='/signup'> Signup! </Link>
            <Link to='/login'> Login! </Link>
            <Link to='/'> Home </Link>
            <Link to='/' onClick={Logout}> Logout</Link>

            
        </nav>
    )
}
