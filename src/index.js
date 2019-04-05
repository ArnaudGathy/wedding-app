import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import {firebaseConfig} from './firebaseConfig'
import firebase from 'firebase/app'
require('dotenv').config()


firebase.initializeApp(firebaseConfig)
ReactDOM.render(<App />, document.getElementById('root'))
