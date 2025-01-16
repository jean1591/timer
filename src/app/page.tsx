'use client'

import { History } from './components/History'
import { MainTimer } from './components/MainTimer'
import { StartAndStopButton } from './components/StartAndStopButton'

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
        <MainTimer />
        <StartAndStopButton />
      </div>
      <History />
    </div>
  )
}
