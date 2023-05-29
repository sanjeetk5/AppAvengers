import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";


import { LoginReducer} from "./LoginReducer/reducer"

import { reducer as noteReducer } from "./NotesReducer/reducer";

import { reducer as Dashboardreducer } from "./DashboardReducer/reducer";

const mainReducer = combineReducers({
  
  LoginReducer,
  noteReducer,
  Dashboardreducer
});


export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));