import { RootState } from '@/store/store'
import { getHoursMinutesSeconds } from '@/utils/timerFormater'
import { useSelector } from 'react-redux'

export const MainTimer = () => {
  const { timer } = useSelector((state: RootState) => state.timer)
  const { hours, minutes, seconds } = getHoursMinutesSeconds(timer)

  return (
    <div className="flex items-baseline justify-center gap-2 rounded-2xl border border-gray-50 p-4 font-bold md:col-span-2 md:p-8">
      <p className="text-6xl md:text-9xl">{hours}</p>
      <p className="text-lg md:text-3xl">h</p>
      <p className="text-6xl md:text-9xl">{minutes}</p>
      <p className="text-lg md:text-3xl">m</p>
      <p className="text-6xl">{seconds}</p>
      <p className="text-lg md:text-3xl">s</p>
    </div>
  )
}
