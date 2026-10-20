import React from 'react'

const Comment = ({comment}) => {
  return (
  <div className="comment">
            <div className="comment_content">
                <img className="comment_img" src={comment.author.profile_image}  alt=""/>
                <div className="commenty">
                <p  className="username_comment">{comment.author.username}</p>
                <p className="Elcomment">{comment.body}</p>
                </div>
                </div>
            <br/>
            <div className="react">
                <p>Now</p>
                <button><img src="../../../public/imgs/love.svg" alt=""/></button>
                <p>Like</p>
            </div>
        </div>
  )
}

export default Comment
