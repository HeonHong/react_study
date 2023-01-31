import { combineReducers } from 'redux';
import color from './modules/color.js';//이 파일이 reducer 파일이라고 알려주는 것이다.
import count from './modules/count.js';
import animal from './modules/animal.js'

export default combineReducers({
    //이름:reducer 파일 
    colorReducer:color,
    countReducer:count,
    animalReducer:animal
})