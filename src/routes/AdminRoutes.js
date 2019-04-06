import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {AttendeesScreen} from '../screens/AttendeesScreen'

export const AdminRoutes = () => (
  <Switch>
    <Route path="/admin" component={AttendeesScreen} />
  </Switch>
)
