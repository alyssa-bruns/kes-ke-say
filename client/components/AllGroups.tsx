import { getAllGroups } from '../apis/apiGroup'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export function AllGroups() {
  const {
    isLoading,
    isError,
    data: groupsData,
  } = useQuery({
    queryKey: ['group'],
    queryFn: () => getAllGroups(),
  })
  if (isLoading) {
    return <h1>Loading...GroupPage</h1>
  }

  if (isError || !groupsData) {
    return <h1>Error</h1>
  }

  return (
    <>
      <h1>All groups</h1>
      <div className="p-24 flex flex-wrap items-center justify-center">
        {groupsData.map((group) => (
          <Link key={group.id} to={`/groups/${group.id}`}>
            <div
              key={group.id}
              className="flex-shrink-0 m-6 relative overflow-hidden mt-auto bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-1000 rounded-lg max-w-xs shadow-lg"
            >
              <svg
                className="absolute bottom-0 left-0 mb-8 "
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                <img
                  className="relative w-40"
                  src={`/images/icons/${group.image}`}
                  alt={group.name}
                />
              </div>
              <div className="relative text-black px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    {group.name}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default AllGroups
