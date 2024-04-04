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
    queryFn: () => getGroupMembersById(id),
  })

  if (isLoading) {
    return <h1>Loading...GroupPage</h1>
  }

  if (isError) {
    return <h1>Error</h1>
  }

  return (
    <>
      <div>member list here</div>
      {memberData.map((member) => (
        <p key={member.id}>{member.user_id}</p>
      ))}
    </>
  )
}
export default GroupMemberList
