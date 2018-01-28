import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/Home'
import Persona from '../components/Persona'
import Random from '../components/Random'
import PageNotFound from '../components/404'

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/persona/:id' component={Persona} />
      <Route exact path='/random' component={Random} />
      <Route path='*' component={PageNotFound} />
    </Switch>
  )
}

export default Routes
