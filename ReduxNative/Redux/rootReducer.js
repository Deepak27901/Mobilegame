import { useReducer } from 'react'
import {combineReducers} from 'redux'
import appleReducer from './apple/appleReducer'
import userReducer from './user/userReducer'
import todoReducer from './todo/todoReducer'


const rootReducer=combineReducers({
    apple:appleReducer,
    user:userReducer,
    todo:todoReducer
})

export default rootReducer;