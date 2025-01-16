import { incrementTimer, toggleTimerState } from '@/store/features/timer/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/store'
import { classNames } from '@/utils/classNames'
import { useEffect } from 'react'

export const StartAndStopButton = () => {
  const dispatch = useDispatch()
  const { isTimerRunning } = useSelector((state: RootState) => state.timer)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isTimerRunning) {
      interval = setInterval(() => {
        dispatch(incrementTimer())
      }, 1000)
    } else if (!isTimerRunning && interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isTimerRunning])

  return (
    <button
      onClick={() => dispatch(toggleTimerState())}
      className={classNames(
        isTimerRunning ? 'bg-red-200' : 'bg-green-200',
        'rounded-2xl p-2 text-6xl font-bold text-gray-950 transition-colors duration-500 ease-in-out'
      )}
    >
      {isTimerRunning ? 'Stop' : 'Start'}
    </button>
  )
}
