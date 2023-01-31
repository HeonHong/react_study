//1. action생성
const INCREMENT='count/INCREMENT';
const DECREMENT='count/DECREMENT';
const RESET='count/RESET';
//다른 파일에서 중복되는 것을 방지

//2. action 보내기 Count.js에서 dispatch로 호출할 수 있게 해줌.
export const increment=()=>({type:INCREMENT})
export const reset=()=>({type:RESET})
export const decrement=()=>({type:DECREMENT})

//3.초기값
const initialState={count:0}

//4.reducer
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return{count: state.count+1}
        case DECREMENT:
            return{count: state.count - 1}
        case RESET:
            return{count:1}
        default:
            return state
    }
}

export default reducer