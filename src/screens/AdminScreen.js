import React, {useEffect, useReducer} from 'react'
import {useAuth} from '../hooks/useAuth'
import {AdminRoutes} from '../routes/AdminRoutes'
import seriouscat from '../assets/images/seriouscat.jpg'
import {Link} from 'react-router-dom'

const loginReducer = (state, action) => {
  if (action.type === 'WRONG_ADDRESS') {
    return {
      ...state,
      isLogged: false,
      isWrongAddress: true,
    }
  }
  if (action.type === 'LOGIN') {
    return {
      ...state,
      isLogged: true,
      isWrongAddress: false,
    }
  }
  if (action.type === 'LOGOUT') {
    return {
      ...state,
      isLogged: false,
      isWrongAddress: false,
    }
  }
}

export const AdminScreen = () => {
  const {authObserver, login, logOut} = useAuth()
  const [{isLogged, isWrongAddress}, dispatch] = useReducer(loginReducer, {
    isLogged: false,
    isWrongAddress: false,
  })

  useEffect(() => {
    authObserver(user => {
      return user
        ? [
            'arno.firefox@gmail.com',
            'fernandezgarciamagaly@gmail.com',
          ].includes(user.email)
          ? dispatch({type: 'LOGIN'})
          : dispatch({type: 'WRONG_ADDRESS'})
        : dispatch({type: 'LOGOUT'})
    })
  }, [])

  if (isLogged) {
    return (
      <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          <Link className="navbar-item" to="/admin">Attendees</Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button
                  type="button"
                  className="button is-danger"
                  onClick={logOut}
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        {<AdminRoutes />}
      </div>

      </>
    )
  }

  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Bridegrooms allowed only</h1>
          {isWrongAddress && (
            <>
              <img src={seriouscat} /> <br />
            </>
          )}
          <button className="button is-large is-light" onClick={login}>
            Log in
          </button>
        </div>
      </div>
    </section>
  )
}
