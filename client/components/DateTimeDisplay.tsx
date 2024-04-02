import { useState, useEffect } from 'react'

export default function DateTimeDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date())
  console.log(currentDate)
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
        Time in France: <span className="text-sm mt-4">{dateTimeStr}</span>
      </h3>
    </div>
  )
}
