import { CurrentConditions, WeatherModel } from '../../models/weather'
import useWeather from '../hooks/useWeather'

export default function Weather() {
  const { data, isPending, isError } = useWeather()

  if (isPending) {
    return <p>Wait for Weather</p>
  }

  if (isError) {
    return <p>Oops no weather</p>
  }

  const weatherData: CurrentConditions[] = data

  return (
    <div>
      <ul>
        {weatherData.map((weather) => (
          <li key={weather.dew} className="text-sm mt-4">
            {weather.temp}
          </li>
        ))}
      </ul>
    </div>
  )
}
