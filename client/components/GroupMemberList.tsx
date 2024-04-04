import { useParams } from 'react-router-dom'
import { getGroupMembersById } from '../apis/apiGroup'
import { useQuery } from '@tanstack/react-query'

export function GroupMemberList() {
  const { id } = useParams()
  const {
    isLoading,
    isError,
    data: memberData,
  } = useQuery({
    queryKey: ['member', id],
    queryFn: () => getGroupMembersById(Number(id)),
  })
  console.log(memberData)
  if (isLoading) {
    return <h1>Loading...GroupPage</h1>
  }

  if (isError || !memberData) {
    return <h1>Error</h1>
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-16 bg-slate-200">
        <h1 className="my-10 font-medium text-3xl sm:text-4xl font-black">
          Members List
        </h1>
        <div className="mb-4"></div>
        <div className="user-list w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl flex flex-col py-4">
          {memberData.map((member) => (
            <div
              key={member.id}
              className="user-row flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 hover:bg-[#87c7ea]"
            >
              <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
                <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
                  <img
                    src={`/images/avatars/${member.image}`}
                    alt={member.image}
                  />
                </div>
                <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                  <a href="#" className="title font-medium no-underline">
                    {member.fullName}
                  </a>
                  <div className="skills flex flex-col"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default GroupMemberList
