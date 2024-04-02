import { getAllGroups } from '../apis/apiGroup'
import { useQuery } from '@tanstack/react-query'

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

  if (isError) {
    return <h1>Error</h1>
  }

  return (
    <>
      <h1>All groups</h1>
      {groupsData.map((group) => (
        <div key={group.id}>
          <div>
            <img
              className="group-img"
              src={`/images/icons/${group.image}`}
              alt={group.name}
            />
          </div>
          <div>
            <p>{group.name}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default AllGroups
