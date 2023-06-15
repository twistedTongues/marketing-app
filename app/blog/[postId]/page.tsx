import React from 'react'
import { Post } from '../../../typings'
import Image from 'next/image'
import HeroImage from '../../../public/hero.jpg'
import { notFound } from 'next/navigation'

export const dynamicParams = true; // Default Behaviour

type PageProps = {
  params: {
    postId: string; 
  }
}

const fetchPost = async(postId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { next: { revalidate: 60 } });
  const post: Post = await res.json();
  return post;
}

const PostPage = async({ params: { postId } }: PageProps) => {
  const post = await fetchPost(postId);
  
  if(!post.id) return notFound();
  
  return (
    <main>
      <div className="px-5 max-w-screen-lg mx-auto">
      <div className="py-20">
      <h1 className="text-4xl pb-2">{post.title}</h1>
      <p className="pb-1">By: {post.userId}</p>
      <p className="text-blue-500">Apr 18, 2020</p>
      <hr className="h-px my-8 bg-gray-50 border-0 dark:bg-gray-150" />
      </div>
      <div className="pb-20">
      <div className="pb-10">
        <Image src={HeroImage} alt="post" className="rounded-lg"/>
      </div>
      <p className="text-blue-50">{post.body}</p>
      </div>
      </div>
    </main>
  )
}

export default PostPage

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts: Post[]  = await res.json();

  // For this demo, prebuilding the first 10 pages to avoid being rate limited by the Demo Api
  const trimmedPosts = posts.splice(0,10);
  
  return posts;
}
