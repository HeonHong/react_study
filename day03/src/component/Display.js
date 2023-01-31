import React from 'react';

const Display = (props) => {//{name}아님 this.props로 받아도 된다.
    return (
        <div>
            <h2>Display컴포넌트</h2>
            <h1>내가 좋아하는 동물은 {props.name}입니다.</h1>
        </div>
    );
};

export default Display;