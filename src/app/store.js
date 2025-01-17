import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'

//configure the Redux store
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store;