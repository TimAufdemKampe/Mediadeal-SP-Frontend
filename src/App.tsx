import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Layout } from './components/Layout'
import { MainView } from './views/MainView'

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <div className={'flex-grow'}>
          <MainView />
        </div>
        <Footer />
      </Layout>
    </BrowserRouter>
  )
}
