import {} from '../Acions/Actions'
import customers from "../../date"
import {FilterValueState} from '../Acions/Actions'
// import {createReducer} from '@reduxjs/toolkit';
// import { combineReducers } from 'redux'
//import PhoneSlice from '../Acions/Actions'
import {createSlice} from '@reduxjs/toolkit'


const dashBoardSlice = createSlice({
  name: 'dashBoard',
  initialState: {
    customers:customers,
    filter: '',
  },
  reducers: {
    resetItem: (state) => {
      state.customers = [];
    }
    
  },
  extraReducers: {
    [FilterValueState.fulfilled]: (state, { payload }) => {
      state.filter = payload;
    },
  }
})
// const { action, reducers } = PhoneSlice;
export const reduserff= dashBoardSlice.reducers;
 const dashBoardSliceReduser = dashBoardSlice.reducer;
export default dashBoardSliceReduser;





























// const itemsReduser = createReducer([], {
//   [addItems.fulfilled]: (state, {payload}) => {
//     //console.log("meta",meta)
//     // console.log("itemsReduser = createReducer",name, number, id )
//     //  const obj = { name, number, id }
//     //  console.log("obj",obj)
//     console.log("Pauloude reduser",payload)
//     // if (state.contacts.items.some(contact => contact.name.toLocaleLowerCase() === obj.name.toLocaleLowerCase())) {
//     //    alert(`${obj.name} is anlready in contacts npm run build`)
//     //        return [...state]
//     // }
//     return [...state,payload]
//   },
//   [items]: (state, action) => {console.log("ITEMS")
//     return [...state, action.payload]
//   },
//   [deleteContact]: (state, action) => {
//     let delateContacts = state.filter(contact => (contact.id !== action.payload));
//     return [...delateContacts]
//   },
//   [readingLocalHost]: (state, action) => {
//     if (!action.payload) { 
//     return [...state]
//     }
//     return [...action.payload]
//   },
  
// });
// const filterReduser = createReducer("", {
//   [filter().type]: (state, action) => {
//     return action.payload
//   }
// });


// const reduser = combineReducers({
//   items: itemsReduser,
//   filter:filterReduser,
// })
// export const rootReduser = combineReducers({
//   contacts:reduser
// })