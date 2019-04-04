import {useEffect, useState} from 'react'
import {firebaseApp} from '../firebase'

export const useFirebase = () => {
  const addUser = user =>
  firebaseApp
      .database()
      .ref('/users')
      .push(user)

  const removeUser = uid =>
  firebaseApp
      .database()
      .ref(`/users/${uid}`)
      .remove()

  const [users, setUsers] = useState({})
  useEffect(() => {
    firebaseApp
      .database()
      .ref('/users')
      .on('value', snapshot => setUsers(snapshot.val()))
  }, [])

  return [users, addUser, removeUser]
}
