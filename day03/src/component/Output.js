import React from 'react';

const Output = (props) => {
    return (
        <div>
            <h1>내 이름은 {props.name}이고 {props.fruit}을 좋아합니다.</h1>
        </div>
    );
};

export default Output;