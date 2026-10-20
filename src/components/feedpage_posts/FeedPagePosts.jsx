import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost';

const FeedPagePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async (isInitialLoad = false) => {
        try {
            if (isInitialLoad) setLoading(true);
            
            const res = await fetch(`https://tarmeezacademy.com/api/v1/posts`);
            const data = await res.json();
            setPosts(data.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts(true);

        const handleNewPost = () => fetchPosts(false);

        window.addEventListener('newPostAdded', handleNewPost);

        return () => {
            window.removeEventListener('newPostAdded', handleNewPost);
        };
    }, []);
    if (loading) {
            return <p>Loading...</p>;
        }
  return (
   <div className="postContainer">
  {Array.isArray(posts) && posts.map((item, index) => (
                <FeedPost post={item} posts={posts} setPosts={setPosts} key={item.id || index} />
            ))}


</div>
  )
}

export default FeedPagePosts
