import {useEffect, useState} from 'react'
import fire from '../firebase'

export const useFirebase = () => {
    const addUser = (user) => fire
    .database()
    .ref('/users')
    .push(user)

    const [users, setUsers] = useState({})
    useEffect(() => {
        fire.database().ref('/users').on('value', snapshot => setUsers(snapshot.val()))
    }, [])
    
    return [users, addUser]
}