import React from 'react';

const Test01 = () => {
    

    const Test01 =() => {
        alert('test1')
    }

    const Test02=() =>{
        alert('test2')
    }

    const Test03=(num) =>{
        alert('num=' + num)
    }

    const Test04=(num) =>{
        alert(`num=  ${num}`)
    }

    return (
        <div>
            <h2>이벤트 : on+첫글자 대문자</h2>
            <p>
                <button onClick={Test01}>클릭</button>
                {/*Test01()이런식으로 적지 않는 이유는 onload현상처럼 바로 떠버리기 때문이다*/}
                <button onClick={Test02}>클릭</button>
                <button onClick={() => Test03(10)}>클릭</button>
                <button onClick={() => Test04(20)}>클릭</button>
            </p>
            <p>
                <button onClick={()=>{
                    console.log('사자');
                    console.log('호랑이');
                    console.log('기린');
                }}>클릭</button>

                <button onClick={()=>console.log('빨간 사과')}>클릭</button>

            </p>
        </div>
    );
};

export default Test01;
/*
리액트는 순수 자바스크립트가 아니다. > 베이스가 자바스크립트일 뿐이다.
함수 뒤에 ()를 붙이면 새로고침 하자마자 무조건 실행된다.
ex) <button onClick={Test01()}>클릭</button> 이러면 바로 넘어감.
=> 해결하려면 함수로 한 번 묶어준다.
=> 값을 넘길때는 함수 ex) () => 함수(값)
*/