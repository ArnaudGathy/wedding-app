import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import {firebaseConfig} from './firebaseConfig'
import firebase from 'firebase/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import 'bulma/css/bulma.css'
import './style/index.css';
require('dotenv').config()

library.add(faChevronDown, faMapMarkerAlt)
firebase.initializeApp(firebaseConfig)
ReactDOM.render(<App />, document.getElementById('root'))
