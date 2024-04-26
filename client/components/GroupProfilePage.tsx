import { useParams } from 'react-router-dom'
import { getGroupById } from '../apis/apiGroup'
import { useQuery } from '@tanstack/react-query'
import GroupMemberList from './GroupMemberList'

export function GroupProfilePage() {
  const { id } = useParams()
  const {
    isLoading,
    isError,
    data: groupData,
  } = useQuery({
    queryKey: ['group', id],
    queryFn: () => getGroupById(Number(id)),
  })

  if (isLoading) {
    return <h1>Loading...GroupPage</h1>
  }

  if (isError || !groupData) {
    return <h1>Error</h1>
  }

  return (
    <>
      <div className="p-24 flex flex-wrap items-center justify-center">
        <div className="header flex w-full justify-center">
          <h2 className="font-black pb-10 mb-20 text-5xl text-blue-900 before:block before:absolute before:bg-sky-200  relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3">
            {groupData?.name}
          </h2>
        </div>
        <div
          key={groupData.id}
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
              src={`/images/icons/${groupData?.image}`}
              alt={groupData?.name}
            />
          </div>
          <div className="relative text-black px-6 pb-6 mt-6">
            <div className="flex justify-between"></div>
          </div>
        </div>
      </div>

      <GroupMemberList />
    </>
  )
}
export default GroupProfilePage
