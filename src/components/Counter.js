import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state)=> state.counter)
  // useselector hook auotmaticaaly subscribes the componennt to the redux store and cancels the component subscription when the component is unmounted.
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    
  };

  const incrementby5 = ()=>{
      dispatch({type : 'incrementby5'})
  }

  const decrementby5= ()=>{
        dispatch({type :'decrementby5'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
      <button onClick={incrementby5}>Increment Counter by 5</button>
      <button onClick={decrementby5}>Decrement Counter by 5</button>
      </div>
  
    </main>
  );
};

export default Counter;
