// 액션 타입 설정
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});