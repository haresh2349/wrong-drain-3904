import { applyMiddleware, legacy_createStore ,combineReducers,compose} from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./AppReducer/AppReducer";
 

const rootReducer=combineReducers({
    appReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
