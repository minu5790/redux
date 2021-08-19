import React, { useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Counter from '../components/counter';
import { decreaseAsync, increaseAsync } from '../modules/counter';


const CounterContainer =  ()=> {
    const number = useSelector(state=>state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=>dispatch(increaseAsync()), [dispatch]);
    const onDecrease = useCallback(()=>dispatch(decreaseAsync()), [dispatch]);
    return <Counter number={number} onIncrease={onIncrease} onDecrease ={onDecrease }/>
}




export default CounterContainer;
