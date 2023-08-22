import { databases } from '@/appwrite'
import { Query } from 'appwrite'
import { Post } from '@/typings'

export const getPosts = async() => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_POSTS_COLLECTION_ID!,
  )

  const posts = data.documents;
  return posts
};

export const getPost = async(DOCUMENT_ID: string) => {
  const data = await databases.getDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_POSTS_COLLECTION_ID!,
    DOCUMENT_ID!,
  )

  return data;
}
