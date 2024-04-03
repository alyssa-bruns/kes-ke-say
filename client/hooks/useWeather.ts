import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../apis/weatherApiClient'

export default function useWeather() {
  const query = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather(),
  })

  return { ...query }
}
