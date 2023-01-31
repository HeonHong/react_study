import React, { useState } from 'react';
import dataList from './CatData';
import '../css/reset.css'
import '../css/style.css'
import CatList from './CatList';

const Cat = () => {
    const [data, setData] = useState(dataList)
    return (
        <>
            <session className="business">
                <div className="inner">
                    <h2>고양이</h2>
                    <p>고양이들</p>
                    <CatList data ={data}></CatList>
                </div>
            </session>
        </>
    );
};

export default Cat;