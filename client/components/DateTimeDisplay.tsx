import { useState, useEffect } from 'react'

export default function DateTimeDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
    return () => clearInterval(timerId)
  }, [])
  const dateTimeStr = currentDate.toLocaleString('en-FR', { timeZone: 'CET' })
  return (
    <div>
      <h3>
        Time in France:{' '}
        <span className="text-sm mt-4 block text-blue-900">{dateTimeStr}</span>
      </h3>
    </div>
  )
}
