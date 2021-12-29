import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { AdminView } from './views/AdminView'
import { MainView } from './views/MainView'

export const Router = () => {
  return (
    <Switch>
      <Route path={'/admin'} component={AdminView} />
      <Route path={'/'} component={MainView} />
    </Switch>
  )
}
