import { createAction,handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import { startLoading, finishLoading } from "./loading";

const GET_POST = 'testApi/GET_POST';
const GET_POST_SUCCESS = 'testApi/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'testApi/GET_POST_FAILURE';

const GET_USERS = 'testApi/GET_USERS';
const GET_USERS_SUCCESS = 'testApi/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'testApi/GET_USERS_FAILURE';

// 어떤 id로 조회할지 두번째 인수로 전달
export const getPost = createAction(GET_POST, id=> id);
export const getUsers = createAction(GET_USERS);


// 사가 생성
function* getPostSaga(action){
    yield put(startLoading(GET_POST)); // 시작

    try{
        //call은 Promise를 반환하는 함수를 호출하고 기다릴 수 있음
        //첫 번째 파라매터는 함수, 나머지는 해당 함수에 넣을 인수
        const post = yield call(api.getPost, action.payload); // api.getPost(actions.payload)와 같음.. post 요청 시 ID가 필요하기 때문!!

        yield put({
            type : GET_POST_SUCCESS,
            payload : post.data
        });
    } catch (e){
        yield put({
            type : GET_POST_FAILURE,
            payload : e,
            error : true
        })
    }
    yield put(finishLoading(GET_POST)); // 완료
}


function* getUsersSaga(){
    yield put(startLoading(GET_USERS)); // 시작

    try{
        //call은 Promise를 반환하는 함수를 호출하고 기다릴 수 있음
        //첫 번째 파라매터는 함수, 나머지는 해당 함수에 넣을 인수
        const users = yield call(api.getUsers);

        yield put({
            type : GET_USERS_SUCCESS,
            payload : users.data
        });
    } catch (e){
        yield put({
            type : GET_USERS_FAILURE,
            payload : e,
            error : true
        })
    }
    yield put(finishLoading(GET_USERS)); // 완료
}

export function* testApiSaga(){
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS,getUsersSaga);
}


// 초기 상태
// 로딩 중 상태는 loading 객체에서 관리함

const initState ={
    post:null,
    users:null
}

const testApi = handleActions(
    {
        [GET_POST_SUCCESS] : (state, action) =>({
            ...state,
            post : action.payload
        }),
        [GET_USERS_SUCCESS] : (state, action) =>({
            ...state,
            users : action.payload
        })
    },
    initState
)

export default testApi;