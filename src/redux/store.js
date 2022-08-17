import { applyMiddleware, createStore } from "redux"
import rootReducer from "./reducers/rootReducer"
import reduxThunk from 'redux-thunk'

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk))

export default store
