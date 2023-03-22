import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/index.js";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const incrementby5Handler = () => {
    dispatch(counterAction.incrementby5(5));
  };
  const decrementby5Handler = () => {
    dispatch(counterAction.decrementby5(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.showCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementby5Handler}>Increment by 5</button>
        <button onClick={decrementby5Handler}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
