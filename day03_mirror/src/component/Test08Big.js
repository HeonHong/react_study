import React from 'react';

const Test08Big = ({one}) => {
    const{id, img, title} = one;//0번 방에 3가지 data가 있으니까.
    return (
        <div className='bigimg'>
            <h2>{title}</h2>
            <img src={img}></img>
        </div>
    );
};

export default Test08Big;