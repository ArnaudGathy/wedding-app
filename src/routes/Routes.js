import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {RSVPScreen} from '../RSVP/RSVPScreen'
import {AdminScreen} from '../admin/AdminScreen'

export const Routes = () => (
  <Switch>
    <Route path="/admin" component={AdminScreen} />
    <Route path="/" component={RSVPScreen} />
  </Switch>
)
