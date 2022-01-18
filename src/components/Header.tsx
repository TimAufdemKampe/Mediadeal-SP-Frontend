import React from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

import { useGlobalState } from '../App'

export const Header: React.FC = () => {
  const history = useHistory()
  const [, , removeCookies] = useCookies(['page-access'])
  const [isAuthorized, setIsAuthorized] = useGlobalState('authorized')

  return (
    <header className={'flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 px-5'}>
      <div className={'flex justify-start lg:w-0 lg:flex-1'}>
        <div>
          <img
            className={'h-8 w-auto sm:h-10 hover:cursor-pointer'}
            src={'https://www.mediadeal.de/themes/Frontend/MediadealCarpo/frontend/_public/src/img/mediadeal-logo.png'}
            alt={''}
            onClick={() => history.push('/')}
          />
        </div>
      </div>
      <div className={' md:flex items-center justify-end md:flex-1 lg:w-0'}>
        <div
          className={
            'ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-zinc-500 hover:bg-zinc-600 hover:cursor-pointer'
          }
          onClick={() => {
            if (isAuthorized) {
              setIsAuthorized(false)
              history.push('/')
              removeCookies('page-access')
            } else history.push('/admin')
          }}>
          {isAuthorized ? 'Ausloggen' : 'Admin Login'}
        </div>
      </div>
    </header>
  )
}
