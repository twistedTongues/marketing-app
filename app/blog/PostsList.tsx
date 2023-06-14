import React from 'react'
import { Post } from '../../typings'
import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '../../public/hero.jpg'

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
        <div key={post.id}>
          <Link href={`/blog/${post.id}`} className="flex px-5 py-10">
            <div className="relative h-60 w-2/5">
              <Image src={HeroImage} alt="post" fill objectFit="cover" className="rounded-lg drop-shadow-md"/>
            </div>
            <div className="w-3/5 px-5">
              <div className="font-semibold pb-5">
                <h3 className="text-xl pb-2">{post.title}</h3>
                <p className="text-blue-500">Apr 18, 2020</p>
              </div>
              <p>{post.body}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default PostsList
