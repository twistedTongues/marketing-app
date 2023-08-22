import { Post } from '@/typings'
import Image from 'next/image'
import HeroImage from '@/public/hero.jpg'
import { notFound } from 'next/navigation'
import { getPosts, getPost } from '@/lib/getPosts'

type PageProps = {
  params: {
    postId: string; 
  }
}

const PostPage = async({ params: { postId } }: PageProps) => {
  const post = await getPost(postId);

  if(!post.$id) return notFound();

  return (
    <main>
      <div className="px-5 max-w-screen-lg mx-auto">
        <div className="py-20">
          <h1 className="text-4xl pb-2">{post.title}</h1>
          <p className="pb-1">By: {post.user}</p>
          <p className="text-blue-500">{post.$createdAt}</p>
          <hr className="h-px my-8 bg-gray-50 border-0 dark:bg-gray-150" />
        </div>
        <div className="pb-20">
          <div className="pb-10">
            <Image src={HeroImage} alt="post" className="rounded-lg" />
          </div>
          <p className="text-blue-50">{post.body}</p>
        </div>
      </div>
    </main>
  )
}

export default PostPage

export async function generateStaticParams() {
  const posts: Post[] = await getPosts();
  return posts; 
}
