import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import {applyMiddleware, compose} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;

export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type AppDispatch = typeof store.dispatch;

export default store