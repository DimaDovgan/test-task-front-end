import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit';
//import { rootReduser } from './redusers/reduser'
import dashBoardSliceReduser from './redusers/reduser';
import storage from 'redux-persist/lib/storage' 
import { combineReducers } from '@reduxjs/toolkit'; 
import loger from 'redux-logger'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

//const middlewareLoger = [...getDefaultMiddleware(),loger]

//const rootReducer = combineReducers({Person: PersonSliceReduser, phone: PhoneSliceReduser})


const persistConfig = {
  key: 'root',
  storage,
} 

const persistedReducer = persistReducer(persistConfig)



const store = configureStore({
  reducer: {
    dashBoard: dashBoardSliceReduser
    

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // middleware,
})
export const persistor=persistStore(store)

export default store;

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: middlewareLoger,
  
// })
