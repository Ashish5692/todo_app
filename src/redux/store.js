// const redux = require("redux");

import { createStore } from "redux";
import {todoReducer} from "./reducers/todoReducer";

export const store = createStore(todoReducer);
