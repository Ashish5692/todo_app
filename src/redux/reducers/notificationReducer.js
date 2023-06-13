import {createSlice} from '@reduxjs/toolkit'

// create initial State that will be an object having message property
const initialState ={
    message:""     //no notification initially
}

//create Slice
const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        reset: (state,action)=>{
            state.message="";
        }
    }, 
    //we want to do something when  add action of todo reducer is completed --for that we use extraReducers
    //extraReducers is object refering to action which is from different Slice/reducer .On that action it is taking state and modifying its own state (message) which can be used by any component needed
    extraReducers:{
        "todo/add":(state, action)=>{
            state.message= "Todo is created"; //when todo/add function is completed then it is going to modify the state of notification ..state of notification will be new message -todo is created
        }
    }
});

//exporting the extra reducer
export const notificationReducer = notificationSlice.reducer;

//export reset notification action so that todoForm can call this to reset notification
export const resetNotification = notificationSlice.actions.reset;

//selector---every selector gives us access to the state
export const notificationSelector = (state) =>state.notificationReducer.message;
