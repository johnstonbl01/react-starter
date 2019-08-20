export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

export const incrementCount = () => ({ type: COUNTER_INCREMENT });
export const decrementCount = () => ({ type: COUNTER_DECREMENT });
