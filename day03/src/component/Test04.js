import React, { useState } from 'react';
import Animal from './Animal';
import Display from './Display';

const Test04 = () => {
    const [name,setName] = useState('호랑이');//상태변수

    //상태값이 있는 곳에 함수도 같이 있어야한다.
    const onInputName = (e) =>{
        const {value}  = e.target;
        setName(value);
    }

    return (
        <div>
            {/* 상태변수는 항상 부모가 가지고 있어야한다. */}
            <Animal name= {name} onInputName={onInputName}></Animal>
            <hr></hr>
            <Display name={name}></Display>
        </div>
    );
};

export default Test04;