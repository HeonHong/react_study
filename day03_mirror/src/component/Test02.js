import React, { useState } from 'react';

const Test02 = () => {
    const [chk,isCheck] = useState(false);
    const onChk = (event) =>{
        const {checked} = event.target
        isCheck(checked)
    }
    return (
        <div style={{color: chk? 'blue':'hotpink', margin:30, fontSize:25}}>
            <input type="checkbox" checked={chk} onChange={onChk}></input>Have a nice day!!

        </div>
    );
};

export default Test02;