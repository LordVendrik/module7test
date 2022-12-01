import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function MainDetails(props) {

    const navigate = useNavigate();

    const Logout = ()=>{
        localStorage.removeItem('details');
        navigate('/');
    }

  return (
    <div className='mainDetails'>
        <div className='details'>
            <span>Profile</span>
        </div>
        <div className='details'>
            <span>Full Name :   </span>
            <span>{props.name}</span>
        </div>
        <div className='details'>
            <span>Email  :   </span>
            <span>{props.email}</span>
        </div>
        <div className='details'>
            <span>Password :   </span>
            <span>{props.password}</span>
        </div>
        <div>
            <button className="btn btn-light mb-3" onClick={()=>(Logout())}>LogOut</button>
        </div>
    </div>
  )
}
