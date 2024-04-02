import { useGetAllPosts } from '../hooks/use-get-posts'

export function AllPosts() {
  const { isPending, isError, data } = useGetAllPosts()

  if (isPending) {
    return <span>This page is loading...</span>
  }

  if (isError) {
    return <span>Something went wrong sorry</span>
  }

  const posts = data
  return (
    <>
      {posts?.map((post) => {
        return (
          <p key={post.id}>
            User ID: {post.id} <br />
            {post.created_at} <br />
            <img src={`${post.image}`} alt="No pic was posted with this post" />
            <br />
            {post.body} <br />
          </p>
        )
      })}
    </>
  )
}
