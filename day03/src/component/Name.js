import React from 'react';

const Name = ({name, onNameChange}) => {
    return (
        <div>
        이름 입력: <input type="text" value={name} onChange={onNameChange}></input>
        </div>
    );
};

export default Name;