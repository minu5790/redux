
// 액션 타입 설정
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});


// 초기 상태 설정
const initState ={
    number : 0
}


// 리듀서 함수
const counter=(state=initState, action)=>{
    switch(action.type){
        case INCREASE:
            return{
                number : state.number +1
            };
        case DECREASE:
            return{
                number : state.number -1
            };
        default:
            return state;
    }
}

export default counter;