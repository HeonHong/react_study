import React, { useMemo, useState } from 'react';
import Test04Sub from './Test04Sub';

const Test04 = () => {
   

    const[color,setColor]=useState('');
    const[food,setFood]=useState('');
    const onColor =(e)=>{
        const{value}=e.target;
        setColor(value)
    }
    const onFood =(e)=>{
        const{value}=e.target;
        setFood(value)
    }

  
    return (

        

        <div style={{margin : 30}}>
            <h2>당신이 좋아하는 색은?</h2>
            <div>
                <input type='text' value={color} onChange={onColor}></input>
                <p>선택 : hotpink,magenta,skyblue,tomato</p>
            </div>
            <hr></hr>
            <h2>당신이 좋아하는 음식은?</h2>
            <div>
                <p>
                    <input type ='radio' name='food' value='햄버거' onChange={onFood}></input>
                    <label>햄버거</label>
                </p>

                <p>
                    <input type ='radio' name='food' value='삼겹살' onChange={onFood}></input>
                    <label>삼겹살</label>
                </p>

                <p>
                    <input type ='radio' name='food' value='치킨' onChange={onFood}></input>
                    <label>치킨</label>
                </p>

                <p>
                    <input type ='radio' name='food' value='짜장면' onChange={onFood}></input>
                    <label>짜장면</label>
                </p>
            </div>
            <hr></hr>
            <Test04Sub color={color} food={food}></Test04Sub>
        </div>
    );
};

export default Test04;