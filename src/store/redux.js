import {createStore} from 'redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {counter : 0, showCounter : true};

const countslice = createSlice({
    name : 'counter', //name can be anything as you wish
    initialState : initialState,
    reducers : {
        increment(state,action){
        //    here it seems like we are directly mutating the state but not
          state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload
        },
        incrementby5(state){
             state.counter = state.counter +5;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        },
        decrementby5(state){
            state.counter = state.counter-5;
        }
    }
});

const authstate ={ auth: false}

const authslice = createSlice({
    name : 'authentication',
    initialState : authstate,
    reducers : {
        login(state)
        {
            state.auth = true;
        },
        logout(state)
        {
            state.auth = false;
        }
    }
})

// const counterReducer = ( state=initialState,action)=>{
//    if(action.type ==='increment')
//    {
//           return {
//             counter : state.counter+1,
//             showCounter : state.showCounter
//           }
//    }
//    if(action.type ==='decrement')
//    {
//       return {   counter : state.counter -1,showCounter : state.showCounter}
//    }
//    if(action.type ==='decrementby5')
//    {
//       return {   counter : state.counter -5,showCounter : state.showCounter}
//    }
//    if(action.type ==='incrementby5')
//    {
//       return {   counter : state.counter +5,showCounter : state.showCounter}
//    }
//    if(action.type === 'increase')
//    {
//     return {
//         counter : state.counter + action.payload,showCounter : state.showCounter
//     }
//    }
//    if(action.type ==='toggle')
//    {
//     return{
//         showCounter :!state.showCounter,
//         counter : state.counter
//     }
    
//    }
//    return state
// }

// const store = createStore(counterReducer);
const store = configureStore({
   reducer : {
        counterdata : countslice.reducer,
        authdata : authslice.reducer
    }
    // reducer : countslice.reducer
    // if we have more reducer slice we pass object to reducer
    // reducer :{
        // cou : countslice.reducer,
        // authentication : authslice.reducer
        // property name is our choice
    // }
})
export const counterActions = countslice.actions;
export const authActions = authslice.actions;

export default store;




