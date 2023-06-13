import React from 'react'
import { Post } from '../../typings'
import Link from 'next/link'

const fetchPosts = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts: Post[] = await res.json();
  console.log(posts);
  return posts;
}

const PostsList = async() => {
  const posts = await fetchPosts();
  
  return (
  <>
      {posts.map(post => (
        <p key={post.id}>
          <Link href={`/blog/${post.id}`}> Post: {post.id}</Link>
        </p>
      ))}
  </>
  )
}

export default PostsList
