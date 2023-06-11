// const redux = require("redux");

//without bracket you can only import when you are exporting as default
import * as redux from "redux";
import  { combineReducers} from "redux"; //coming from redux to comine reducers
import {todoReducer} from "./reducers/todoReducer";
import {noteReducer} from "./reducers/noteReducer";

//using combine reducers 
//in this we have reducer map object we basically have keys and values where key will be  name of reducer and  then exact reducer you want to map with it

const result = combineReducers({
    //combining todo and note reducers
    //todo will be key and todoReducer as value which we have imported
    todoReducer,
    noteReducer
}) 
export const store = redux.createStore(result); //now store will configure both of our reducers
