import { Link } from 'react-router-dom'
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
      <div className="h-screen flex flex-col items-center justify-center mt-10">
        {posts?.map((post) => {
          const date = new Date(post.createdAt)
          return (
            <>
              <div id="card" className="w-1/2 flex flex-col mt-5">
                <div key={post.postId}>
                  <header className="flex flex-row gap-3 items-center">
                    <div> {post.username}</div>
                    <time
                      dateTime={date.toISOString()}
                      className="text-sm text-gray-500"
                      role="time"
                    >
                      {new Intl.DateTimeFormat('en-GB').format(date)}
                    </time>
                  </header>
                  <div id="content" className="grid grid-cols-4 gap-3">
                    <div className="col-span-3 flex flex-col">
                      <div id="body" className="font-light text-sm pt-2">
                        {post.body}
                      </div>
                    </div>
                    <div id="image" className="flex items-center">
                      {post.image ? (
                        <img src={`${post.image}`} alt="Blog Pic" />
                      ) : null}
                    </div>
                  </div>
                  <footer className="flex flex-row pt-7 gap-2 items-center">
                    <Link to={`/post/${post.postId}`}>View Post</Link>
                  </footer>
                  <hr className="mt-5"></hr>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
