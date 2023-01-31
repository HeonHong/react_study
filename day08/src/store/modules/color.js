//componentX. 순수 javascript파일이다.

//1. action 생성
//형식 : 파일명 + action명(중복 방지)
const RED='color/RED';
const YELLOW='color/YELLOW';
const GREEN='color/GREEN';
const BLUE='color/BLUE';
const PURPLE='color/PURPLE';
const SKYBLUE='color/SKYBLUE';

//2. action 보내기
export const red=()=>({type:RED})
export const yellow=()=>({type:YELLOW})
export const green=()=>({type:GREEN})
export const blue=()=>({type:BLUE})
export const purple=()=>({type:PURPLE})
export const skyblue=()=>({type:SKYBLUE})
//Color.js에서 dispatch할 때 내보내주는 값이다.

//3. 초기값
const initialState={color:'hotpink'}

//4. 리듀서 함수 만들기-state action 파라미터를 참조하여, 새로운 상태 객체를 만들어서 반환한다.
//                    -state : 현재상태, action: 액션 객체
const reducer =(state=initialState, action) =>{
    switch(action.type){
        case RED:
            return{color:'red'}
        case YELLOW:
            return{color:'yellow'}
        case GREEN:
            return{color:'green'}
        case BLUE:
            return{color:'blue'}
        case PURPLE:
            return{color:'purple'}
        case SKYBLUE:
            return{color:'skyblue'}
        default:
            return state
    }
}

export default reducer