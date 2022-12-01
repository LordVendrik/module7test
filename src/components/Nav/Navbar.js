import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="container-fluid">
            <span>Header</span>
            <form className="d-flex" role="search">
                <div>
                    <Link to="/" className='link'>SignUp</Link>
                </div>

                <div className='mx-4'>
                    <Link to="/profile" className='link'>Profile</Link >  
                </div>
            </form>
        </div>
    </nav>
  )
}
