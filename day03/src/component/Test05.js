import React, { useState } from 'react';
import Fruit from './Fruit';
import Name from './Name';
import Output from './Output';

const Test05 = () => {
    const [name, setName] = useState('홍길동');
    const [fruit, setFruit] = useState('사과');

    const onNameChange = (event) =>{
        const {value} = event.target;
        setName(value);
    }
    const changeFruit = (event) =>{
        const {value} = event.target;
        setFruit(value);
    }

    return (
        <div>
            <Name name={name} onNameChange={onNameChange}></Name>
            <hr></hr>
            <Fruit fruit={fruit} changeFruit={changeFruit}></Fruit>
            <hr></hr>
            <Output name={name} fruit={fruit}></Output>
            
        </div>
    );
};

export default Test05;