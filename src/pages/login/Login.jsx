import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import LoginForm from './LoginForm'
const Login = () => {

  return (

       
    <>
    
 <div className="container">
 <div className="descripe">
  <div className="descripe_icon"><div className="img"><img src="../../../public/imgs/Icon.png" alt=""/></div><span className="main_name">SocialVibe</span><div className="circle"></div></div>  
  <h2>Connect with the world</h2>
  <p>Share your moments and stories with friends and family</p>
 </div>
 <LoginForm/>
  </div>  
  <div className="confetti">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    
    
    </>
  
  )
}

export default Login
