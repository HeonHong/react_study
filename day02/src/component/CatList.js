import React from 'react';
import CatItem from './CatItem';



//map으로 돌릴 것
const CatList = ({data}) => {
    return (
        <ul className='list2'>
            {
                data.map(item => <CatItem key={item.id} item={item}></CatItem>)
            }

        </ul>
    );
};

export default CatList;