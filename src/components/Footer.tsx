import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className={'bg-zinc-500'}>
      <div className={'pt-4 flex items-center justify-center '}>
        <div className={'flex flex-row'}>
          <div onClick={() => (window.location.href = 'https://github.com/TimAufdemKampe')}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'} alt={'Github'} className={'h-6 w-6 hover:cursor-pointer'} />
          </div>
        </div>
      </div>
      <div className={'pt-2 pb-4 flex items-center justify-center '}>
        <div className={'whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-zinc-500'}>Copyright Tim Auf dem Kampe</div>
      </div>
    </footer>
  )
}
