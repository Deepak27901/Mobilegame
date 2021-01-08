import {ADD_TEXT} from './todoType';
const initialState = {
  Todos:[]

};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        Todos:[...state.Todos,action.payload]

      };
    default:
      return state;
  }
};
export default todoReducer;