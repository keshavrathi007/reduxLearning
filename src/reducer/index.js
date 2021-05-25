//all the actions that are to be used are defined here by combining them
import changeTheNumber from "./upDown"
import { combineReducers } from "redux"
const rootReducer = combineReducers({
    changeTheNumber
})
export default rootReducer