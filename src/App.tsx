import React from 'react'
import { createGlobalState } from 'react-hooks-global-state'
import { BrowserRouter } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { Router } from './Router'

export const { useGlobalState } = createGlobalState({
  authorized: false,
})

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <main className={'flex-grow'}>
          <Router />
        </main>
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}
