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
        const date = new Date(post.created_at)
        return (
          <p key={post.id}>
            User ID: {post.id} <br />
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

// const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738))
// (new Intl.DateTimeFormat('en-US').format(date))
