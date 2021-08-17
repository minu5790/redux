import { createAction, handleActions } from "redux-actions";
// 액션 타입 설정
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 1. 일반적인 방법
// export const increase = () => ({type:INCREASE});
// export const decrease = () => ({type:DECREASE});

// 2. redux-actions의 createAction 메서드 이용하는 방법
export const increase = () =>createAction(INCREASE);
export const decrease = () =>createAction(DECREASE);

// 초기 상태 설정
const initState ={
    number : 0
}


// 리듀서 함수
// 1. 일반적인 방법
// const counter=(state=initState, action)=>{
//     switch(action.type){
//         case INCREASE:
//             return{
//                 number : state.number +1
//             };
//         case DECREASE:
//             return{
//                 number : state.number -1
//             };
//         default:
//             return state;
//     }
// }
// 2. redux-actions의 handleActions 메서드 이용하는 법
const counter = handleActions(
    {
        [INCREASE] : state=>state +1,
        [DECREASE]: state=> state-1
    },
    initState
)
export default counter;