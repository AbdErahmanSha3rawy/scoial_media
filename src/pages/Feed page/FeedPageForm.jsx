import React from 'react'
import { Link } from 'react-router-dom'
import './FeedPage.css'
import { createPost } from '../../functions/createPost'
import { useState } from 'react';



const FeedPageForm = () => {

    const profile_image = localStorage.getItem('profile_image'); 
 const [postBody, setPostBody] = useState('');  
 const [postImage, setPostImage] = useState(null);
 
 
 const handelPost = async () => {
        const formData = new FormData();
        formData.append("body", postBody);

        if (postImage) {
            formData.append("image", postImage);
        }
       
        await createPost(formData);

        setPostBody('');
        setPostImage(null);

        const postbtn = document.querySelector('.postbtn');
        if (postbtn) {
            postbtn.style.opacity = "0.5"; 
            postbtn.disabled = true;  
        }
        
        const imgForPost = document.querySelector('.img_for_post');
        if (imgForPost) {
            imgForPost.style.display = "none";  
        }
    };
  return (
     <div className="add_post">
<Link to="/">  <img src={profile_image} alt="" className="User_Img1"/></Link>
    <form action="">
<textarea name="" id="" placeholder="What's on your mind?" className="text" value={postBody} onChange={(e) => setPostBody(e.target.value)}></textarea><br/>
<img  alt="" className="img_for_post"/>

<div className="btns">
<input type="file" accept="image/*" className="img_of_new_post" onChange={(e) => setPostImage(e.target.files[0])}></input> 
<div className="boha">
<button className="Add_Image">
    <img src="../../../public/imgs/img.png" alt=""/><span>Add Image</span>
</button>
<button type="button" className="postbtn" onClick={handelPost}>Post <img src="../../../public/imgs/post.png" alt=""/></button>
</div>
</div>
</form>
</div>
  )
}

export default FeedPageForm
