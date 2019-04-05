import React, {useState} from 'react'
import {useAuth} from '../hooks/useAuth'

export const AdminScreen = () => {
  const [authObserver, login, logOut] = useAuth()
  const [isLogged, setIsLogged] = useState(false)
  authObserver(user => setIsLogged(user ? true : false))

  return (
    <div>
      {isLogged ? (
        <button onClick={logOut}>LOGOUT</button>
      ) : (
        <button onClick={login}>LOGIN</button>
      )}
    </div>
  )
}
