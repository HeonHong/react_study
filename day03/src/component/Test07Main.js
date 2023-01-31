import React, { useState } from 'react';
import Test07Input from './Test07Input';
//import '../css/Test07.css';
import Test07Output from './Test07Output';
import Test07Print from './Test07Print';



const Test07Main = () => {

    const [count, setCount]=useState(1)
    const [form, setForm] = useState({
        name:'',
        age :'',
        addr:'',
        phone:''

    });//form 태그 아님. 여기선 굳이 비구조 할당해서 안넘겨도 된다.

    
const onInput =(e) =>{
    const {name, value }= e.target
    setForm({
        ...form,
        [name]: value//name키를 가진 값을 value로 설정
    })
}

const onPrev=()=>{
    setCount(count-1)
}
const onNext=()=>{
    setCount(count+1)
}

    return (
     <div className='wrap'>
       {
        count === 1 &&  <Test07Input form={form} onInput={onInput}  onNext={onNext}></Test07Input>
       }
       {
        // count === 2 &&  <Test07Print form={form} onNext={onNext} onPrev={onPrev}></Test07Print>
        count === 2 &&  <Test07Print {...form} onNext={onNext} onPrev={onPrev}></Test07Print>
        //form={...form}이거 아님. 왜냐면 위는 변수명으로 주소값을 넘기는건데  아래는 값을 그대로 보내는 것이기 때문에.
       }
       {
        count === 3 &&  <Test07Output name={form.name}></Test07Output>
       }
     </div>
    );
};

export default Test07Main;