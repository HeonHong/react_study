import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

const initialState={
    data:{},
    error:null,
    loading:true
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'SUCCESS':
            return{
                data:action.payload,
                error:null,
                loading:false
            }
        case 'ERROR':
            return{
                data:{},
                error:'에러...',
                loading:true
            }
        default:
            return state
    }
}
const Test05_1 = () => {
    const[id,setId]=useState('1');
    const[search,setSearch]=useState(1);

    const[state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/photos/${id}`
        axios.get(url)
            .then(res=>{
                dispatch({ type:'SUCCESS',payload:res.data })
            }).catch(error=>{
                dispatch({type:'ERROR'})
            })
    },[search])

    const onSearch=(id)=>{
        setSearch(id)
    }
    return (
        <div>
        <h3>ID입력 (1~5000)<input type="text" value={id} onChange={e =>setId(e.target.value)}></input></h3>
        <button onClick={onSearch}>검색</button>
        <h3>
            {
                state.loading||<img src={state.data.thumbnailUrl}></img>
            }
        </h3>
        <p>
            {
                state.error? state.error:null
            }
        </p>
    </div>
    );
};

export default Test05_1;