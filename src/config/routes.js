/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute'
import UnauthorizedRoute from 'base-shell/lib/components/UnauthorizedRoute/UnauthorizedRoute'

const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp/SignUp'))
const PasswordReset = lazy(() => import('../pages/PasswordReset/PasswordReset'))

const Import = lazy(() => import('../pages/Import/Import'))
const Export = lazy(() => import('../pages/Export/Export'))
const Dashboard = lazy(() => import('../pages/Dashboard/StockMovements'))

const routes = [
  <UnauthorizedRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <UnauthorizedRoute path="/signup" redirectTo="/" exact component={SignUp} />,
  <UnauthorizedRoute
    path="/password_reset"
    redirectTo="/"
    exact
    component={PasswordReset}
  />,
  <AuthorizedRoute path="/dashboard" exact component={Dashboard} />,
  <AuthorizedRoute path="/import" exact component={Import} />,
  <AuthorizedRoute path="/export" exact component={Export} />,
]

export default routes
