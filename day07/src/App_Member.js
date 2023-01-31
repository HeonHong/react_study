import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './member/LoginForm';
import Main from './member/Main';
import WriteForm from './member/WriteForm';
import WriteList from './member/WriteList';

const App_Member = () => {
    const [data ,setData ] =useState (()=>JSON .parse (localStorage .getItem ('data')) || []);
    
    
    //local storage 저장하기
    useEffect (()=>{
    localStorage.setItem ('data',JSON .stringify (data ))
        },[data ]);

    const[form,setForm]=useState({
        id:'',
        name:'',
        pwd:''
    });
   
    const onAdd=(e)=>{
        const{name, value }= e.target;
        setForm({
            ...form,
            [name]:value
        })
    }; 
    
    const onSubmit=()=>{
        setData([
            ...data,
            {...form}
        ])

        setForm({
            ...form,
            name:'',
            id:'',
            pwd:''
        })
        
    }

    const onLogin=()=>{
        const idCheck=data.find(item=>item.id===form.id);
        const pwdCheck=data.find(item=>item.pwd===form.pwd);
        if(idCheck&&pwdCheck) alert('로그인됨');
        else alert('로그인 정보를 확인하세요.');
    }

    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        <li><Link to='/writeForm'>회원가입</Link></li>
                        <li><Link to='/loginForm'>로그인</Link></li>
                        <li><Link to='/writeList'>회원목록</Link></li>
                    </ul>
                </nav>

                {/* 화면에 보이는 영역 */}
                <Routes>
                    <Route path='/' element={<Main></Main>}></Route>
                    <Route path='/writeForm' element={<WriteForm data={data} form={form} onAdd={onAdd} onSubmit={onSubmit}></WriteForm>}></Route>
                    <Route path='/loginForm' element={<LoginForm onAdd={onAdd} onLogin={onLogin} form={form}></LoginForm>}></Route>
                    <Route path='/writeList' element={<WriteList data={data}></WriteList>}></Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App_Member;