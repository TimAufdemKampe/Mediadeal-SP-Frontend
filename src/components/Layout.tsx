import React from 'react'

export const Layout: React.FC = ({ children }) => (
  <div className={'flex flex-col min-h-screen'}>
    <div>{children}</div>
  </div>
)
