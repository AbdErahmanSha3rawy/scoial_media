import React, { useEffect, useState } from 'react'
import MyPost from './MyPost';
const MyPosts = () => {
    const my_id = localStorage.getItem('user_id'); 

     const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(false);
        useEffect(() => {
        const posts = async () => {
          try {
            setLoading(true);
            const res = await fetch(`https://tarmeezacademy.com/api/v1/users/${my_id}/posts?&limited=150`);
            const data = await res.json();
            setPosts(data.data);
            setLoading(false);
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
        };
        posts();
      }, []);
   
    if (loading) {
            return <p>Loading...</p>;
        }
  return (
   <div className="postContainer">
  {Array.isArray(posts) && posts.map((item, index) => (
                <MyPost post={item} posts={posts} setPosts={setPosts} key={item.id || index} />
            ))}


</div>
  )
}

export default MyPosts
