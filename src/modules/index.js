import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import counter,{counterSaga} from './counter';
import testApi,{testApiSaga} from './testApi';
import loading from './loading';
const rootReducer = combineReducers({
    counter,
    testApi,
    loading
})
export function* rootSaga(){
    
    yield all([counterSaga(), testApiSaga()]); // all은 배열안의 사가들을 합침

}
export default rootReducer;