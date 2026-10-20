import React from 'react'
import Posts from '../../components/posts/Posts'
import FeedPageForm from './FeedPageForm'
import FeedPagePosts from '../../components/feedpage_posts/FeedPagePosts'
import Stories from '../../components/stories/Stories'

const FeedPage = () => {
  return (
    <div>
      <Stories/>
        <FeedPageForm/>
      <FeedPagePosts/>
    </div>
  )
}

export default FeedPage
