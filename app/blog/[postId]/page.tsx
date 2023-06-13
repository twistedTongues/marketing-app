import React from 'react'
import { Post } from '../../../typings'

type PageProps = {
  params: {
    postId: string; 
  }
}

const fetchPost = async(postId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await res.json();
  return post;
}

const PostPage = async({ params: { postId } }: PageProps) => {
  const post: Post[] = await fetchPost(postId);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostPage
