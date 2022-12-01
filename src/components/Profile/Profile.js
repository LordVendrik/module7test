import React, { useEffect, useState } from 'react'
import Navbar from '../Nav/Navbar'
import MainDetails from './MainDetails/MainDetails'
import { useNavigate } from "react-router-dom";

export default function Profile() {

  const[details,setDetails] = useState({name:'',email:'',password:'',accessToken:''});
  const navigate = useNavigate();

  useEffect(()=>{

    let accessToken;

    if(localStorage.getItem('details')){
      accessToken = JSON.parse(localStorage.getItem('details')).accessToken;
    }
    

    if(accessToken){
      setDetails(JSON.parse(localStorage.getItem('details')));
    }else{
      navigate("/");
    }
  },[]);


  return (
    <div>
        <Navbar></Navbar>
        <MainDetails name={details.name} email={details.email} password={details.password}></MainDetails>
    </div>
  )
}
