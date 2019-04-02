import React, {useEffect, useState} from 'react'
import fire from '../firebase'
import {Form, Field} from 'react-final-form'

const writeUserData = user => {
  fire
    .database()
    .ref('/users')
    .push(user)
}

const getUserData = setUsers => {
  let ref = fire.database().ref('/users')
  ref.on('value', snapshot => {
    const state = snapshot.val()
    setUsers(state || [])
  })
}

export const RSVPScreen = () => {
  const [users, setUsers] = useState({})

  useEffect(() => {
    getUserData(setUsers)
  }, [])

  const userList = Object.values(users)

  return (
    <div>
      <ul>
        {userList &&
          userList.length > 0 &&
          Object.entries(users).map(([uid, {name}]) => (
            <li key={uid}>{name}</li>
          ))}
      </ul>

      <Form
        onSubmit={writeUserData}
        render={({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="name"
            />
            <button type="submit">SAVE</button>
          </form>
        )}
      />
    </div>
  )
}
