import React from 'react'
import {Form, Field} from 'react-final-form'
import {useFirebase} from '../hooks/useFirebase'
import {Spinner} from '../style/spinner'

export const RSVPScreen = () => {
  const [users, addUser, removeUser] = useFirebase()

  return (
    <div>
      <ul>
        {Object.values(users).length > 0 ? (
          Object.entries(users).map(([uid, {name}]) => (
            <li key={uid}>
              {name} <button onClick={() => removeUser(uid)}>x</button>
            </li>
          ))
        ) : (
          <Spinner />
        )}
      </ul>

      <Form
        onSubmit={addUser}
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
