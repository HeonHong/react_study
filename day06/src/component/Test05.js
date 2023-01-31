import React, { useEffect, useState } from 'react';
import axios from 'axios';

    //상태변수 id작성-기본값은 1
    const initialState={
        data:{},
        error:null,
        loading:true
    }
    //검색버튼을 누르면 입력한 id의 값들을 가져와서 이미지를 뿌린다.
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

const Test05 = () => {
    const[urlNo,setUrlNo]=useState(1);
    const onSearch=(e)=>{
        const{value}=e.target;
        setUrlNo(value);
    }
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/photos/${urlNo}`
        axios.get(url)
            .then(res=>{
                dispatch({ type:'SUCCESS',payload:res.data })
            }).catch(error=>{
                dispatch({type:'ERROR'})
            })
    },[])
    return (
        <div>
            <h3>ID입력 (1~5000)<input type="text" value={id} onChange={onSearch}></input></h3>
            <button onClick={onSearch}>검색</button>
            <h3>
                {
                    state.loading||<img src={state.data.body}></img>
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

export default Test05;