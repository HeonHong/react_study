import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const WriteForm = ({data, form, onAdd, onSubmit}) => {
    
   const navigate = useNavigate();
    
    return (
        <div>
            
            <h1>회원가입</h1>
            <h3>아이디 : <input type='text' name='id' value={form.id} onChange={onAdd}></input></h3>
            <h3>이름 : <input type='text' name='name' value={form.name} onChange={onAdd}></input></h3>
            <h3>비밀번호 : <input type='password' name='pwd' value={form.pwd} onChange={onAdd}></input></h3>
            <button onClick={onSubmit}>등록</button>
            
        </div>
    );
};

export default WriteForm;