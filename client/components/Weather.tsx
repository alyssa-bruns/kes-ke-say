/* eslint-disable @typescript-eslint/no-unused-vars */
import { CurrentConditions } from '../../models/weather'
import useWeather from '../hooks/useWeather'
import LoadingIndicator from './LoadingIndicator'
import Ticker from 'react-ticker'

export default function Weather() {
  const { data, isPending, isError } = useWeather()

  if (isPending) {
    return <LoadingIndicator />
  }

  if (isError) {
    return <p>Oops no weather</p>
  }

  const weatherData: CurrentConditions[] = data.days

  return (
    <>
      <p>Todays Temp:</p>
      <div className="mt-4">
        <Ticker>
          {({ index }) => (
            <div>
              <p className="text-sm mt-4 text-blue-900 inline ml-2">
                {' '}
                Paris -{' '}
                <span className="italic">{weatherData[0].temp}&deg;c</span>
              </p>
              <p className="text-sm mt-4 text-blue-900 inline">
                {' '}
                Conditions -{' '}
                <span className="italic">{weatherData[0].conditions}</span>
              </p>
            </div>
          )}
        </Ticker>
      </div>
    </>
  )
}
