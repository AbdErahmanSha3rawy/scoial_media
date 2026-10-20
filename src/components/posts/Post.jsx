import React from 'react'
import './Posts.css'

const Post = ({post}) => {



     let space=" ";
    let imgprofile="";
    let imgpost="";
  return (
   
  
  <div className="post">
            <div className="profile_descripe">
              <img src={post.author.profile_image} className="img_prof" alt=""/>
              <div className="profile_name">
                <p className="Name">{post.author.name}</p>
                <div className="username_created_at">
                  <p className="username">@{post.author.username}</p>
                  <p className="created_at">{post.created_at}</p>
                </div>
              </div>
            </div>
            <p className="post_descripe">{post.body}</p>
            <div className="img_post">
             <img src={post.image}  alt=""/>
            </div>
            <div className="actives">
              <button className="lovebtn"><img src="/imgs/love.svg" alt=""/></button>
              <p className="lovecount"> {post.id}</p>
              <button className="commentbtn"><img src="/imgs/comment.svg" alt=""/></button>
              <p className="commentcount"> {post.comments_count}</p>
              <button className ="sharebtn"><img src="/imgs/share.svg" alt=""/></button>
            </div>  
          </div>



     
    
  
      
  )
}

export default Post
