import {combineReducers} from "redux"

import usersReducer from './users_reducer'
import soundsReducer from './sounds_reducer'
import commentsReducer from './comments_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  sounds: soundsReducer,
  comments: commentsReducer
})

export default entitiesReducer