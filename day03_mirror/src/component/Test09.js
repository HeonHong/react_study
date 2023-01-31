import React from 'react';
import image01 from '../img/cat01.jpg';
import image02 from '../img/chair.jpg';
import image03 from '../img/cafe.jpg';
import image04 from '../img/photo1.jpg';
const Test09 = () => {
    return (
        <div>
            <img src={image01} style={{width:200, height:200}}></img>
            <img src={image02} style={{width:200, height:200}}></img>
            <img src={image03} style={{width:200, height:200}}></img>
            <img src={image04} style={{width:200, height:200}}></img>
            <hr></hr>
        </div>
    );
};

export default Test09;

/* 
src안에 있는 이미지 파일 처리는 참조변수를 사용한다.
*/