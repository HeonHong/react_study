import React from 'react';

const Test02 = () => {
    const title = "신상명세서"
    const arr=['홍길동', '코난', '둘리', '라이언', '네오']
    const data=[
        {id:1, name:'홍길동'},
        {id:2, name:"코난"},
        {id:3, name:"둘리"},
        {id:4, name:"라이언"},
        {id:5, name:"네오"},
    ]
    return (//jsx
        <div>
            <h2>{title}</h2>
            <ul style={{ border:'1px solid red' }}> 
                {/* jsx구역이라서 따옴표 필수 */}
                
                {
                //이 부분은 jsx아니고 javascript 구역이다.
                 //반드시 key를 잡아야한다.
                    arr.map((item, index) => {
                        return (<li key={index}>{index}:{item}</li>)
                    })

                    //콜백 함수
                    // (item, index) => {
                    //     return (<li key={index}>{index}:{item}</li>)
                    // }
                }
            </ul>
            <hr/>
            
            <ul style={{border: '1px solid blue'}}>
               { 
                     data.map((item, index) => {
                        return(<li key={item.id}>{item.id}:{item.name}</li>)
                    })
                }

            </ul>
            
        </div>
    );
};

export default Test02;