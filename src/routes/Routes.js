import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {AdminScreen} from '../screens/AdminScreen'
import {HomeScreen} from '../screens/HomeScreen'
import {RSVPScreen} from '../screens/RSVPScreen'

export const Routes = () => (
  <Switch>
    <Route path="/admin" component={AdminScreen} />
    <Route path='/:code' component={RSVPScreen} />
    <Route path="/" component={HomeScreen} />
  </Switch>
)
