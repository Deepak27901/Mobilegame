import {BUY_APPLE} from './appleType';

export const buyApple = (data) => {
  console.log(data, 'data....');
  return {
    type: BUY_APPLE,
    payload: data,
  };
};
