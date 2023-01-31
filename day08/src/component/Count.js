import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment,decrement,reset } from '../store/modules/count';
const Count = () => {
    //countReducer 필요 ----count.js연결
    //액션 : INCERMENT/DECREMENT/RESET

    const count = useSelector(state => state.countReducer.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>
                <button onClick={()=>dispatch(increment())}>증가</button>
                <button onClick={()=>dispatch(decrement())}>감소</button>
                <button onClick={()=>dispatch(reset())}>리셋</button>
                
            </p>
        </div>
    );
};

export default Count;