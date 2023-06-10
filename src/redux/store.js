// const redux = require("redux");

//without bracket you can only import when you are exporting as default
import { createStore } from "redux";
import {todoReducer} from "./reducers/todoReducer";

export const store = createStore(todoReducer);
