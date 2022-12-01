import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [showError,setshowError] = useState(false);
    const [showSuccess,setshowSuccess] = useState(false);
    const navigate = useNavigate();

    const SubmitDetails = ()=>{
        const min = 1000000000000000;
        const max = 9999999999999999;
        const accessToken = min + Math.random() * (max - min);

        const details = {
            name,
            email,
            password,
            accessToken
        }

        if(name && email && password && confirmPassword && password === confirmPassword){
            setshowError(false);
            setshowSuccess(true);
            localStorage.setItem('details',JSON.stringify(details));
            setTimeout(()=>{
                navigate("/profile");
            },1000);
            
        }else{
            setshowSuccess(false);
            setshowError(true);
        }
        
    }

  return (
    <div className='mainForm'>
        <div className='Title'>
            <span>SignUp</span>
        </div>

        <div className="mb-3">
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control inputs" placeholder='Full Name'/>
        </div>
        <div className="mb-3">
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control inputs" placeholder='Email'/>
        </div>
        <div className="mb-3">
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control inputs" placeholder='Password'/>
        </div>
        <div className="mb-3">
            <input type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} className="form-control inputs" placeholder='Confirm Password'/>
        </div>

        {
            showError ? <div className="mb-3">
            <p className='text-danger'>Error : All fields are mandatory</p>
        </div> : ''
        }

        {
            showSuccess ? <div className="mb-3">
            <p className='text-success'>Successfully Signed Up</p>
        </div> : ''
        }
        
        <div>
            <button onClick={()=>{SubmitDetails()}} className="btn btn-light mb-3">SignUp</button>
        </div>
    </div>
  )
}
