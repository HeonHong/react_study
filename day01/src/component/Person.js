import React from 'react';

const Person = ({name, age}) => {
    //var {name,age} = props
    return (
        
        <div>
            나의 이름은 {name} 나이는 {age}
        </div>
    );
};

export default Person;