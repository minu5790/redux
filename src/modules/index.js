import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import counter,{counterSaga} from './counter';

const rootReducer = combineReducers({
    counter
})
export function* rootSaga(){
    
    yield all([counterSaga()]); // all은 배열안의 사가들을 합침

}
export default rootReducer;