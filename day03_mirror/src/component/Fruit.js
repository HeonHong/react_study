import React from 'react';

const Fruit = ({fruit, changeFruit}) => {
    return (
        <div>
        과일 입력:   <input type="text" value={fruit} onChange={changeFruit}></input>
        </div>
    );
};

export default Fruit;