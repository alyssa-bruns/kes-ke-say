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
      <div>{groupData?.name}</div>
      <img src={`/images/icons/${groupData?.image}`} alt={groupData?.name} />

      <GroupMemberList />
    </>
  )
}
export default GroupProfilePage
