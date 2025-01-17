import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../features/counterSlice";

const Count = ()=>{
    // Access the current count from the redux store /*  */
    const counter = useSelector(state=>state.counter.count);

    // get the dispatch function to dispatch actions
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Redux Counter: { counter }</h1>
            <button onClick={(() => dispatch( increment() ) )}> Increase </button>
            <button onClick={(() => dispatch( decrement() ) )}> Decrease </button>
        </div>
    )
}

export default Count;