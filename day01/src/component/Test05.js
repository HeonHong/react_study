import React from 'react';
import Test05Sub from './Test05Sub';

const Test05 = () => {
    return (
        <div>
            <Test05Sub name='홍길동' age={19} addr='서울' tel='010-1234-5678' color='tomato' bgcolor='pink' done={true}/>
            <hr></hr>
            <Test05Sub name='코난' addr='부산' color='skyblue' bgcolor='pink' />
            <hr></hr>

        </div>
    );
};

export default Test05;