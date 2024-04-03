import { CurrentConditions } from '../../models/weather'
import useWeather from '../hooks/useWeather'

export default function Weather() {
  const { data, isPending, isError } = useWeather()

  if (isPending) {
    return <p>Wait for Weather</p>
  }

  if (isError) {
    return <p>Oops no weather</p>
  }

  const weatherData: CurrentConditions[] = data.days

  return (
    <div>
      <p>Todays Temp:</p>
      <p className="text-sm mt-4 text-blue-900">
        Paris - {weatherData[0].temp}&deg;c
      </p>
    </div>
  )
}
