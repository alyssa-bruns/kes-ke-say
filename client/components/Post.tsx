import { Link, useParams } from 'react-router-dom'
import { useGetSinglePost } from '../hooks/use-get-posts.ts'

export function Post() {
  const params = useParams()
  const id = Number(params.id)
  const { isPending, isError, data } = useGetSinglePost(id)

  if (isPending) {
    return <span>This page is loading...</span>
  }

  if (isError) {
    return <span>Something went wrong sorry</span>
  }

  const post = data
  const date = new Date(post[0].createdAt)

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div id="card" className="w-dvw flex flex-col mt-5 h-auto">
          <div key={post[0].postId}>
            <header className="flex flex-row gap-3 items-center">
              <Link to={`/profiles/${post[0].username}`}>
                {' '}
                {post[0].username}
              </Link>
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
                <div id="image" className="flex items-center">
                  {post[0].image ? (
                    <img src={`${post[0].image}`} alt="Blog Pic" />
                  ) : null}
                </div>
                <div id="body" className="font-light text-sm pt-2">
                  {post[0].body}
                </div>
              </div>
            </div>
            <footer className="flex flex-row pt-7 gap-2 items-center">
              <div id="icons" className="flex space-x-4 w-60">
                <button>
                  <img
                    src="../../images/icons/cheese-offwhite.png"
                    alt="cheese icon"
                  ></img>
                </button>
                <button>
                  <img
                    src="../../images/icons/glasses-offwhite.png"
                    alt="glasses icon"
                  ></img>
                </button>
                <button>
                  <img
                    src="../../images/icons/icon-offwhite.png"
                    alt="nose icon"
                  ></img>
                </button>
                <button>
                  <img
                    src="../../images/icons/sunrise-offwhite.png"
                    alt="sunrise icon"
                  ></img>
                </button>
              </div>
            </footer>
            <hr className="mt-5"></hr>
          </div>
        </div>
      </div>
    </>
  )
}
