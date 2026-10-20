import React, { useState, useEffect } from 'react'
import Comment from './Comment';

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [loadingComments, setLoadingComments] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                setLoadingComments(true);
                const response = await fetch(`https://tarmeezacademy.com/api/v1/posts/${postId}`);
                const data = await response.json();
                
                console.log("Comments:", data.data.comments);
                if (Array.isArray(data.data.comments)) {
                    setComments(data.data.comments);
                } else if (data.data.comments) {
                    setComments([data.data.comments]);
                }
            } catch (error) {
                console.error("Error fetching comments:", error);
            } finally {
                setLoadingComments(false);
            }
        };

        if (postId) {
            fetchComments();
        }
    }, [postId]);

    if (loadingComments) {
        return <p>Loading comments...</p>;
    }

    return (
        <div>
            {Array.isArray(comments) && comments.map((item, index) => (
                <Comment comment={item} key={item.id || index} />
            ))}
        </div>
    );
};

export default Comments;