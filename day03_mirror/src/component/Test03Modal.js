import React from 'react';

const Test03Modal = ({onClose}) => {
    return (
        <>
            <div className='bg'></div>
            <div className='popup'>
                <p className='closex' style={{cursor:'pointer'}} onClick={onClose}>X</p>
                {/* 이벤트가 발생하는 위치는 현재 js이지만 함수는 부모에서 구현해줘야한다. */}
                <h2>Have a nice day!</h2>
            </div>
        </>
    );
};

export default Test03Modal;