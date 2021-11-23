import { combineReducers} from "redux"
import modalReducer from "./ui_reducers/modal_reducer"
import playstateReducer from "./ui_reducers/playstate_reducer"
import currentSound from "./ui_reducers/current_sound_reducer"

const uiReducer = combineReducers({
  modal: modalReducer,
  isPlaying: playstateReducer,
  currentSound
})

export default uiReducer