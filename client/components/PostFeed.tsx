import { useGetAllPosts } from '../hooks/use-get-posts'

export function PostFeed() {
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
        const date = new Date(post.createdAt)
        return (
          <p key={post.postId}>
            Username: {post.username} <br />
            {new Intl.DateTimeFormat('en-GB').format(date)} <br />
            {post.image ? (
              <img
                src={`${post.image}`}
                alt="No pic was posted with this post"
              />
            ) : null}
            {post.body} <br />
          </p>
        )
      })}
    </>
  )
}
