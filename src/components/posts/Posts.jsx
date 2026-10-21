import React, { useEffect, useState } from 'react'
import Post from './Post'
import './posts.css'
const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    const posts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://tarmeezacademy.com/api/v1/posts`);
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
console.log(posts);
if (loading) {
        return <p>Loading...</p>;
    }
   
  return (
  <div className="posts">
            {Array.isArray(posts) && posts.map((item, index) => (
                <Post post={item} key={item.id || index} />
            ))}
        </div>
    )
  
}

export default Posts
