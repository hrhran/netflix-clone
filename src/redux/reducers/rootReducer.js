import { combineReducers } from "redux"
import loginReducer from "./loginReducer"
import titleReducer from "./titleReducer"

const rootReducer = combineReducers({
    auth: loginReducer,
    titles: titleReducer
})

export default rootReducer