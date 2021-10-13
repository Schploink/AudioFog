import {RECEIVE_ALL_SOUNDS, RECEIVE_SOUND, REMOVE_SOUND} from "../actions/sound_actions"

const soundsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_SOUNDS:
      return Object.assign({}, state, action.sounds)
    case RECEIVE_SOUND:
      return Object.assign({}, state, {[action.sound.id]: action.sound})
    case REMOVE_SOUND:
      let nextState = Object.assign({}, state)
      delete nextState[action.soundId]
      return nextState      
    default:
      return state
  }
}

export default soundsReducer