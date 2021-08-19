import {createAction,  handleActions} from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
// 액션 타입 설정
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase =  createAction(INCREASE);
export const decrease =  createAction(DECREASE);

// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
//() => undefined를 두 번째 파라미터로 넣어 줌
export const increaseAsync = createAction(INCREASE_ASYNC, ()=>undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, ()=>undefined);


function* increaseSaga(){
    yield delay(1000); // 1초 기다림
    yield put(increase()); // 특정 액션 디스패치
}

function* decreaseSaga(){
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga(){


    //takeEvery는 들어오는 모든 액션에 대해 특정 작업 처리
    yield takeEvery(INCREASE_ASYNC, increaseSaga);

    //takeLatest는 기존에 진행 중이던 작업이 있으면 취소하고 가장 마지막으로 실행된 작업만 수행
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
// 초기 상태 설정
const initState ={
    number : 0
}


// 리듀서 함수
const counter=handleActions(
    {
        [INCREASE]: state => ({number:state.number+1}),
        [DECREASE]: state => ({number:state.number-1})
    },
    initState
)

export default counter;