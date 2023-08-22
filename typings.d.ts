export interface Post {
  $id: string;
  $createdAt: string;
  title: string;
  body: string;
  image?: Image;
  user: string;
}

interface Image {
  bucketId: string;
  fileId: string;
}
