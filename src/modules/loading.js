import { createAction, handleActions } from "redux-actions";

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
    START_LOADING,
    reqType => reqType
)

export const finishLoading = createAction(
    FINISH_LOADING,
    reqType => reqType
)

const initState = {};

const loading = handleActions(
    {
        [START_LOADING] : (state,action) => ({
            ...state,
            [action.payload] : true
        }),
        [FINISH_LOADING] : (state,action) => ({
            ...state,
            [action.payload] : false
        })
    },
    initState
)

export default loading;