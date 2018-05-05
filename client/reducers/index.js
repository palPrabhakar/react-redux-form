
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import formSumbit from './forms';
import { userDetails } from './userDetail';
import { bankDetails } from './bankDetails';

const rootReducer = combineReducers({userDetails, bankDetails});

export default rootReducer;