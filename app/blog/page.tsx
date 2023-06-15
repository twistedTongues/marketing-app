import React from 'react'
import PostsList from './PostsList'

const Blog = () => {
  return (
    <main>
      <div className="max-w-screen-lg mx-auto">
      <h1 className="py-20 text-5xl text-center">Blog</h1> 
      <PostsList />
      </div>
    </main>
  )
}

export default Blog
