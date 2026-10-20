import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
const GuestNav = () => {
  const location = useLocation();

  return (
       <>
       <nav>
  <div className="icon">
    <div className="img">
        <img src="../../imgs/main.svg" alt=""/>
        </div><span className="main_name">SocialVibe</span></div>  
  <div className="links">
    <ul> 
       <li   className={location.pathname === "/" ? "active" : ""}> <Link to="/"><IoHomeOutline /> Home</Link></li>
       <li   className={ location.pathname === "/login" ? "active" : ""}> <Link to="/login"><img src="../../imgs/log.svg" alt=""/>Login</Link></li>
        <li className={ location.pathname === "/signup" ? "active" : ""}><Link to="/signup" ><img src="../../imgs/menu_signup.svg" alt=""/>SignUp</Link></li>
       </ul>
  </div>
 </nav> 
  </>
  )
}

export default GuestNav
