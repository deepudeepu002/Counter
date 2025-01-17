    import { createSlice } from "@reduxjs/toolkit"

    //Initial state
    const initialState ={ count: 0 }


    //create the slice
    const counterSlice = createSlice({
        name : 'counter',
        initialState,
        reducers: {
            increment: (state)=>{ state.count += 1 },
            decrement: (state)=>{ state.count -= 1 }
        }
    })

    //export the actions
    export const { increment, decrement } = counterSlice.actions;

    //ecxport the reducer
    export default counterSlice.reducer;