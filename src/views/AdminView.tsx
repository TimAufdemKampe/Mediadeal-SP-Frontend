import React from 'react'
import { useCookies } from 'react-cookie'
import env from 'react-dotenv'

import { useGlobalState } from '../App'

export const AdminView: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useGlobalState('authorized')
  const [passwordError, setPasswordError] = React.useState<boolean>(false)
  const [cookies, setCookies] = useCookies(['page-access'])

  React.useEffect(() => {
    setIsAuthorized(cookies['page-access'] && cookies['page-access'] === env.ADMIN_ACCESS)
  }, [cookies])

  return (
    <div>
      {isAuthorized === true ? (
        <div>Angemeldet</div>
      ) : (
        <div className={'p-3 mt-6 grid justify-items-center mb-4'}>
          <div className={'justify-center items-center w-2/4 px-4 mb-2 px-0 w-1/2'}>
            <p className={'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'}>Passwort</p>
            <input
              className={
                'appearance-none pl-2 block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              }
              id={'password-input'}
              type={'password'}
              placeholder={'Passwort'}
            />
            <p className={'text-red-500 text-xs italic'}>{passwordError && 'Bitte gib das richtige Passwort ein'}</p>
          </div>
          <div
            className={
              ' w-1/2 whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-zinc-500 hover:bg-zinc-600 hover:cursor-pointer'
            }
            onClick={() => {
              const passwordInputElement = document.getElementById('password-input') as HTMLInputElement
              if (passwordInputElement.value === env.ADMIN_ACCESS) {
                setPasswordError(false)
                setCookies('page-access', passwordInputElement.value)
              } else setPasswordError(true)
            }}>
            <p className={'text-center'}>Einloggen</p>
          </div>
        </div>
      )}
    </div>
  )
}
