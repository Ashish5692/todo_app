// const redux = require("redux");

//without bracket you can only import when you are exporting as default
//import * as redux from "redux";
//import  { combineReducers} from "redux"; //coming from redux to comine reducers
import {todoReducer} from "./reducers/todoReducer";
import {noteReducer} from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducer";

//using combine reducers 
//in this we have reducer map object we basically have keys and values where key will be  name of reducer and  then exact reducer you want to map with it

// const result = combineReducers({
//     //combining todo and note reducers
//     //todo will be key and todoReducer as value which we have imported
//     todoReducer,
//     noteReducer
// }) 
//export const store = redux.createStore(result); //now store will configure both of our reducers



//using Redux Toolkit to create our store
//Redux Toolkit gives function called configure store
export const store = configureStore({
    ///defining reducer inside configureStore as it accepts Reducers in options
    //It can take multiple reducers insdie single Reducer object
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer

    }
})


