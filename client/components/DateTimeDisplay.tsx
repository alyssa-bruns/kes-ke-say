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
  return <div>Current Time: {dateTimeStr}</div>
}
