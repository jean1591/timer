import { createSlice } from '@reduxjs/toolkit'

interface TimerHistoryItem {
  start: string
  duration: number
}

export interface timerSlice {
  isTimerRunning: boolean
  history: TimerHistoryItem[]
  timer: number
}

const initialState: timerSlice = {
  isTimerRunning: false,
  history: [],
  timer: 0,
}

export const timerSlice = createSlice({
  name: 'timerSlice',
  initialState,
  reducers: {
    incrementTimer: (state) => {
      state.timer += 1

      state.history[0].duration += 1
    },
    toggleTimerState: (state) => {
      if (!state.isTimerRunning) {
        state.history = [
          {
            duration: 0,
            start: new Date().toISOString(),
          },
          ...state.history,
        ]
      }

      state.isTimerRunning = !state.isTimerRunning
    },
  },
})

export const { incrementTimer, toggleTimerState } = timerSlice.actions

export default timerSlice.reducer
