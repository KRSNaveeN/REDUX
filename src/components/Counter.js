import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/redux';

const Counter = () => {
  const counter = useSelector((state)=> state.counterdata.counter)
  // useselector hook auotmaticaaly subscribes the componennt to the redux store and cancels the component subscription when the component is unmounted.

  const show = useSelector((state)=> state.counterdata.showCounter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    //  dispatch({type:'toggle'})
    dispatch(counterActions.toggle());
  };

  const incrementby5 = ()=>{
      dispatch(counterActions.incrementby5())
  }

  const decrementby5= ()=>{
        // dispatch({type :'decrementby5'})
        dispatch(counterActions.decrementby5())
  }
   const increase = ()=>{
    // dispatch({type:'increase', payload : 10})
    dispatch(counterActions.increase(10))
   }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show && <div className={classes.value}>{counter}</div>}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
      <button onClick={incrementby5}>Increment Counter by 5</button>
      <button onClick={decrementby5}>Decrement Counter by 5</button>
      </div>

      <div>
        <button onClick={increase}>Increaseby 10</button>
      </div>
  
    </main>
  );
};

export default Counter;
