import React from 'react';

const LoginForm = ({onAdd,onLogin, form}) => {
    const{id,pwd}=form
    

    return (
        <div>
            <h1>로그인</h1>
            <h3>아이디 : <input type='text' name='id' value={id} onChange={onAdd} ></input></h3>
            <h3>비밀번호 : <input type='password' name='pwd' value={pwd} onChange={onAdd}></input></h3>
            <button onClick={onLogin}>로그인</button>
        </div>
    );
};

export default LoginForm;