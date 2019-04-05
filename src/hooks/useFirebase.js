import {useEffect, useState} from 'react'
import firebase from 'firebase/app'

export const useFirebase = ref => {
  const addUser = user =>
    firebase
      .database()
      .ref(ref)
      .push(user)

  const removeUser = uid =>
    firebase
      .database()
      .ref(`${ref}/${uid}`)
      .remove()

  const [users, setUsers] = useState({})
  useEffect(() => {
    firebase
      .database()
      .ref(ref)
      .on('value', snapshot => setUsers(snapshot.val() || {}))
  }, [])

  return [users, addUser, removeUser]
}
