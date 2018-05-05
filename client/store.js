import { createStore } from 'redux';
import rootReducer from './reducers/index';

const defaultState = {
  userDetails: {  
    firstName: {
      value: '',
      isValid: true
    },
    lastName:{
      value: '',
      isValid: true
    },
    email: {
      value: '',
      isValid: true
    }
  },
  bankDetails: [
  ],
};

const store = createStore(rootReducer, defaultState);

export default store;