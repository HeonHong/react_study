import React, { useRef, useState } from 'react';
import styles from '../css/TodoForm.module.css';

const TodoForm = ({onAdd}) => {
    // text 상태변수 잡기 - 기본값''
    // 입력상자 포커스 textref객체 생성
    // onInput함수 작성

    const [text,setText]=useState('');
    const textRef=useRef();
    
    const onInput=(e)=>{
        const {value} = e.target;
        setText(value);
       
    }

    
    const onSubmit = (e)=>{
        e.preventDefault();
        if(!text) return;
        onAdd(text);
        setText('');
        textRef.current.focus();
    }

    return (
        <form className={styles.TodoForm} onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onInput} placeholder='해야할 일을 입력하시오.' ref={textRef}></input>
            <button type="submit">추가</button>
        </form>
    );
};
export default TodoForm;