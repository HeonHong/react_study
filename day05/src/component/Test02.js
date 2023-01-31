import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test02 = () => {
    const [id,setId]=useState('1');
    const [dto,setDto] = useState({});
    const [search, setSearch] = useState(1);

    // const onInput=(e)=>{
    //     const {value} = e.target;
    //     setId(value);
    // }

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${id}`
        axios.get(url).then(res=>setDto(res.data))
    },[search])  //[id]면 id의 값이 바뀔때마다 실행

    const onSearch=()=>{
        setSearch(id)
    }

    return (
        <div>
            <input type='text' value={id} /*onChange={onInput}*/ onChange={e=>setId(e.target.value)}></input>
            <button onClick={onSearch}>검색</button>
            <h3>{dto.id}:{dto.title}</h3>
        </div>
    );
};

export default Test02;