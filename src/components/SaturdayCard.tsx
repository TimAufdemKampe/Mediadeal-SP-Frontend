import React from 'react'

import { useGlobalState } from '../App'
import { Saturday } from '../utils/getSaturdaysOfMonth'

export type SaturdayCardProps = {
  saturday: Saturday
}

export const SaturdayCard: React.FC<SaturdayCardProps> = ({ saturday }) => {
  const [isAuthorized] = useGlobalState('authorized')

  return (
    <div className={'border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-zinc-500 p-2'}>
      <div className={'flex '}>
        <div className={'grow'}>
          <p>{saturday.day + '.' + saturday.month + '.' + saturday.year}</p>
          <p>Arbeiter 1</p>
          <p>Arbeiter 2</p>
        </div>
        {isAuthorized && (
          <React.Fragment>
            <div className={'w-2 border-r py-auto'} />
            <div className={'w-20 grid px-2 place-items-center'}>
              <div
                className={
                  'hover:border hover:border-white hover:rounded-md hover:shadow-sm text-base font-medium text-white bg-zinc-500 hover:bg-zinc-600 p-2 hover:cursor-pointer'
                }>
                <p>Ändern</p>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}
