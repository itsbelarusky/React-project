import {combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import authReducer from "./auth-reducer";




let reducers = combineReducers({
    mainPage: mainReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    auth: authReducer

});

let store = createStore(reducers);

window.store = store

export default store;