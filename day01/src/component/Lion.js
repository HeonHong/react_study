import React from 'react';

const Lion = (props) => {
    //비구조 할당
    const {name} = props
    return (
        <div>
            나는 {name} 컴포넌트
        </div>
    );
};

export default Lion;