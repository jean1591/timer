import { formatDate, getHoursMinutesSeconds } from '@/utils/timerFormater'

import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export const History = () => {
  const { history } = useSelector((state: RootState) => state.timer)

  if (!history.length) {
    return <></>
  }

  return (
    <div className="space-y-4 md:space-y-8">
      <div className="flex items-center justify-start gap-4">
        <p className="text-3xl font-bold md:text-6xl">History</p>
        <p className="rounded-lg border border-gray-50 px-4 py-1 md:py-2">
          {history.length}
        </p>
      </div>

      <div className="space-y-4">
        {history.map((timer) => {
          const { duration, start } = timer
          const { hours, minutes, seconds } = getHoursMinutesSeconds(duration)

          return (
            <div
              key={start}
              className="rounded-2xl border border-gray-50 p-4 text-lg"
            >
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-medium leading-tight tracking-tight">
                  {formatDate(new Date(start))}
                </p>

                <div className="flex items-center justify-end gap-1">
                  <p>{hours}</p>
                  <p>h</p>
                  <p>{minutes}</p>
                  <p>m</p>
                  <p>{seconds}</p>
                  <p>s</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
