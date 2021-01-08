import {BUY_APPLE} from './appleType';
const initialState = {
  numOfApple: 0,
  apple_rate:0,

};

const appleReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_APPLE:
      return {
        ...state,
        numOfApple: state.numOfApple + 1,
        apple_rate:state.apple_rate+100,
       

      };
    default:
      return state;
  }
};
export default appleReducer;
