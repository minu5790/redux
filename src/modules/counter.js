import {createAction, createActions, handleActions} from 'redux-actions'
// 액션 타입 설정
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => createAction(INCREASE)();
export const decrease = () => createAction(DECREASE)();


// 초기 상태 설정
const initState ={
    number : 0
}


// 리듀서 함수
const counter=handleActions(
    {
        [INCREASE]: state => ({number:state.number+1}),
        [DECREASE]: state => ({number:state.number+-1})
    },
    initState
)

export default counter;