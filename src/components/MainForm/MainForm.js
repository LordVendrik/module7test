import React, { useEffect } from 'react'
import Navbar from '../Nav/Navbar';
import SignUpForm from '../MainForm/SignUpForm/SignUpForm';
import { useNavigate } from 'react-router-dom';

export default function MainForm() {

  const navigate = useNavigate();

  useEffect(()=>{

    let accessToken;

    if(localStorage.getItem('details')){
      accessToken = JSON.parse(localStorage.getItem('details')).accessToken;
    }
    

    if(accessToken){
      navigate("/profile");
    }
  },[]);

  return (
    <div>
        <Navbar></Navbar>
        <SignUpForm></SignUpForm>
    </div>
  )
}
