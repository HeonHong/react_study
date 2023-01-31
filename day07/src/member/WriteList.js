import React from 'react';

const WriteList = ({data}) => {
    const {id, name, pwd}= data;
    return (
        <div>
            <h1>회원목록</h1>
            <table style={{border:'1px solid black' }}>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>비밀번호</th>
                </tr>
                {
                    data.map((item,index)=><tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.pwd}</td>
                    </tr>)
                }
            </table>
        </div>
    );
};

export default WriteList;