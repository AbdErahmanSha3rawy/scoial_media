import React from 'react'
import { Link } from 'react-router-dom'
import "./userProfile.css"
import MyPosts from '../../components/myPosts/MyPosts';
const UserProfile = () => {
    const profile_image = localStorage.getItem('profile_image'); 
    const name = localStorage.getItem('name'); 
    const username = localStorage.getItem('username'); 


       

  return (
  <>
    <div className="profile">
    <div className="back"><img  className="background_img" alt=""/></div>
    <div className="profile_detailes">
    <div className="img_profile"><img src={profile_image} alt="" className="imgy"/><Link  to="/feedpage" ><img src="../../../public/imgs/edite.svg" alt="" /></Link></div>
    <div className="descripe">
        <h3 className="Name_user">{name}</h3>
        <p className="username">{username}</p>
        <p>Welcome to my profile!</p>
        <p><img src="../../../public/imgs/date.png" alt=""/>Joined in <span className="profile_CreatedAt"></span></p>
        <p><span className="posts_nom"></span> posts</p>
    </div>
    <div className="btns">
       <Link to="/feedpage"> <button className="Editbtn">Edit Profile</button></Link>
        <button className="Share">Share Profile</button>
    </div>
</div>
 </div>
<div className="links_add">
    <button className="Postsbtn">Posts</button>
    <button className="Mediabtn">Media</button>
    <button className="Likesbtn">Likes</button>
</div>


<MyPosts/>
  </>


  )
}

export default UserProfile
