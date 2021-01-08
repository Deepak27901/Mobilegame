import {ADD_TEXT} from './todoType';

export const todoList = (data) => {
  console.log(data, 'data....');
  return {
    type: ADD_TEXT ,
    payload: data,
  };
};
