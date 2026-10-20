import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./nav.css"
import { logout } from '../../functions/log out';
const UserNav = () => {
    const profile_image = localStorage.getItem('profile_image'); 
    const navigate = useNavigate(); 

  return (
    <>
       <nav>
    <div className="icon"><div className="img"><img src="imgs/main.svg" alt=""/></div><span className="main_name">SocialVibe</span></div>  
  <div className="links">
    <ul>

        <li className={location.pathname === "/feedpage" ? "active" : ""}><Link to="/feedpage" className="Home"><img src="/imgs/home.svg" alt=""/>Home</Link></li>
        <li className={location.pathname === "/userprofile" ? "active" : ""}><Link to="/userprofile" className="user"><img src="/imgs/profile.svg" alt=""/>profile</Link></li>
        <li className="notice"><Link to="/feedpage"><img src="imgs/garas.svg" alt=""/></Link></li>
        <li  className="eluser"><Link to="/userprofile"><img src={profile_image}  alt="" className="User_Img"/></Link></li>
        <button  id="logoutybtn" type="button" onClick={()=>logout({ navigate })} className="logouty  logout"><img src="/imgs/log.svg"  alt="" />Logout</button>
       </ul> 
  </div>
 </nav> 
    </>
  )
}

export default UserNav
