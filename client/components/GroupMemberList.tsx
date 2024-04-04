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
      {memberData.map((member) => (
        <div key={member.id}>
          <img src={`/images/avatars/${member.image}`} alt={member.image} />
          <p>{member.fullName}</p>
        </div>
      ))}
    </>
  )
}
export default GroupMemberList
