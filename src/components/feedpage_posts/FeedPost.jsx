import React, { useState } from 'react'
import { Link } from 'react-router-dom'     
import { updatePost } from '../../functions/updatePost';
import { deletePost } from '../../functions/deletePost';
import toast from 'react-hot-toast';
import { createComment } from '../../functions/createComment';
import Comments from '../comments/comments';
const FeedPost = ({post, posts, setPosts}) => {
const currentUserId = localStorage.getItem("user_id");
const isMyPost = post.author.id === Number(currentUserId);
    const [listIsOpen, setListIsOpen] = useState(false);
    const [commentsIsOpen, setCommentsIsOpen] = useState(false);
    const [editEreaIsOpen, setEditEreaIsOpen] = useState(false);
    const [textEreaValue, setTextEreaValue] = useState(post.body);
const [contentText, setContentText] = useState(post.body);
const [comment, setComment] = useState('');



  return (
   <div className="post" id="post-${post.id}">
{/* <span className="posteid">{post.author.id}</span> */}
    <div className="profile_descripe">
        <div className="profile_descripe2">
    <button className="user_translating"><img src={post.author.profile_image} className="img_prof" alt=""/></button>
        <div className="profile_name">
                <button className="Name">{post.author.name}</button>
                 <div className="username_created_at">
                <p className="username">@{post.author.username}</p>
                <p className="space">{" "}</p>
                <p className="created_at">{post.created_at}</p>
                </div>
            </div>
        </div>
        <button className="options" style={{display : isMyPost?"flex":"none"}} onClick={() => setListIsOpen(!listIsOpen)}><img src="imgs/options.svg" alt=""/></button>
         <div className="list" style={{ display: listIsOpen ? "block" : "none" }}>
            <button className="Edit"  onClick={()=>{  setListIsOpen(false), setEditEreaIsOpen(true),setContentText(post.body)}}><img src="imgs/etdi.png" alt=""/>Edit Post</button><br/><br/>
        <button className="Delete" onClick={() => {
    setListIsOpen(false);

    toast((t) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Are you sure you want to delete this post?</span>
            <div style={{ display: 'flex', gap: '5px' }}>
                <button 
                    onClick={() => {
                        toast.dismiss(t.id); 
                        deletePost(post.id, (deletedId) => {
                            if (setPosts && posts) {
                                setPosts(posts.filter(p => p.id !== deletedId));
                            }
                        });
                    }}
                    style={{ background: '#ef4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Yes
                </button>
                <button 
                    onClick={() => toast.dismiss(t.id)}
                    style={{ background: '#e5e7eb', color: '#374151', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Cancel
                </button>
            </div>
        </div>
    ), {
        duration: Infinity, 
        position: 'top-center',
    });
}}><img src="imgs/delete.png" alt=""/>Delete Post</button><br/><br/>
        <button className="Share"  onClick={() => setListIsOpen(false)}><img src="imgs/share.svg" alt=""/>Share</button>
    </div>
    </div>
    <div className=" Eidt_Area" style={{ display: editEreaIsOpen ? "block" : "none" }}>
  <form action="">
<textarea name="" id="" placeholder="What's on your mind ?" className="text" value={contentText} onChange={(e) => setContentText(e.target.value)}></textarea><br/>
<div className="btns">
<button type="button" className="Savebtn" onClick={() => contentText ? (updatePost(post.id, contentText), setEditEreaIsOpen(false), setTextEreaValue(contentText)) : alert("Please enter some text!")}>Save</button>
<button type="button" className="Cancelbtn" onClick={() => (setEditEreaIsOpen(false))}>Cancel</button>


</div>
</form>
</div>
    <p className="post_descripe">{textEreaValue}</p>

    <img className="post_img" src={post.image} />
    <div className="actives">
        <button className="lovebtn"><img src="imgs/love.svg" alt=""/></button>
        <p className="lovecount">{post.id}</p>
        <button className="commentbtn" onClick={() =>setCommentsIsOpen(!commentsIsOpen)}><img src="imgs/comment.svg" alt=""/></button>
        <p className="commentcount">{post.comments_count}</p>
        <button className="sharebtn"><img src="imgs/share.svg" alt=""/></button>
        <div className="Emojies">
        <button className="love_emoji"><img src="imgs/lovered.svg" alt=""/></button>
        <button className="laugh_emoji"><img src="imgs/laugh.svg"/></button>
        <button className="sad_emoji"><img src="imgs/sad.svg" alt=""/></button>
        <button className="angry_emoji"><img src="imgs/angry.svg" alt=""/></button>
        </div>
    </div>
      <div className="commentcontainer" style={{display:commentsIsOpen?"block":"none"}}>
        <div className="add_comment">
            <img src={post.author.profile_image}  alt=""/>
            <input type="text" className="Write_comment" placeholder="Write a comment..." value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button type="submit" className="add_comment_btn" onClick={(e) => {
                e.preventDefault();
                createComment(comment);
                setComment('');
               
            }}>post</button>
        </div>
<Comments/>
    </div>
</div>
  )
}

export default FeedPost
