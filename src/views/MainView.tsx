import React from 'react'

import { SaturdayCard } from '../components/SaturdayCard'
import { getSaturdaysOfMonth, Saturday } from '../utils/getSaturdaysOfMonth'

export const MainView: React.FC = () => {
  const [currentMonth, setCurrentMonth] = React.useState<MonthState>({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  })
  const [saturdays, setSaturdays] = React.useState<Saturday[]>(getSaturdaysOfMonth(currentMonth.month, currentMonth.year))

  React.useEffect(() => {
    setSaturdays(getSaturdaysOfMonth(currentMonth.month, currentMonth.year))
  }, [currentMonth])

  return (
    <div className={'my-3 mx-3 md:mx-40'}>
      <div className={'flex gap-3'}>
        <div
          className={
            'flex-none grid place-items-center w-20 h-12 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-zinc-500 hover:bg-zinc-600 hover:cursor-pointer'
          }
          onClick={() => previousMonth(currentMonth, setCurrentMonth)}>
          <p>Zurück</p>
        </div>
        <div
          className={
            'grow grid place-items-center h-12 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-zinc-500 hover:bg-zinc-600 hover:cursor-pointer'
          }>
          <p>
            {new Date(currentMonth.year, currentMonth.month, 0).toLocaleString('de', { month: 'long' })} {currentMonth.year}
          </p>
        </div>
        <div
          className={
            'flex-none grid place-items-center w-20 h-12 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-zinc-500 hover:bg-zinc-600 hover:cursor-pointer'
          }
          onClick={() => nextMonth(currentMonth, setCurrentMonth)}>
          <p>Vorwärts</p>
        </div>
      </div>
      <div className={'mt-3 border-t'} />
      <div className={'mt-3 grid gap-3'}>
        {saturdays.map(saturday => (
          <SaturdayCard key={`${saturday.day}.${saturday.month}.${saturday.year}`} saturday={saturday} />
        ))}
      </div>
    </div>
  )
}

type MonthState = {
  month: number
  year: number
}

const previousMonth = (currentState: MonthState, setState: (state: MonthState) => void) => {
  if (currentState.month === 1) {
    setState({
      month: 12,
      year: currentState.year - 1,
    })
  } else
    setState({
      month: currentState.month - 1,
      year: currentState.year,
    })
}

const nextMonth = (currentState: MonthState, setState: (state: MonthState) => void) => {
  if (currentState.month === 12) {
    setState({
      month: 1,
      year: currentState.year + 1,
    })
  } else
    setState({
      month: currentState.month + 1,
      year: currentState.year,
    })
}
