import {combineReducers} from "redux"

import usersReducer from './users_reducer'
import soundsReducer from './sounds_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  sounds: soundsReducer
})

export default entitiesReducer