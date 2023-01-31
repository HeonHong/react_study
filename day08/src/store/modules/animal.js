//1.action생성
const TIGER='animal/Tiger';
const DOG='animal/DOG';
const CAT='animal/CAT';
const CHICK='animal/CHICK';

//2.action내보내기
export const tiger=()=>({type:TIGER})
export const dog=()=>({type:DOG})
export const cat=()=>({type:CAT})
export const chick=()=>({type:CHICK})

//3.초기값
const initialState = {
    animal:'',
    crying:''
};
//4.reducer
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case TIGER : 
            return {animal:'호랑이',crying:'어흥'}
        case DOG : 
            return {animal:'개',crying:'왈왈'}
        case CAT :
             return {animal:'고양이',crying:'야옹'}
        case CHICK : 
            return {animal:'병아리',crying:'삐약'}
        default:
            return state
    }
}

export default reducer