export type Todo = {
  id: string
  title: string
  done: boolean
}

export type PostReactions = {
  likes: number
  dislikes: number
}

export type Post = {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: PostReactions
  views: number
  userId: number
}

export type PostsResponse = {
  posts: Post[]
  total: number
  skip: number
  limit: number
}
