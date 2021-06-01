import {combineReducers} from 'redux';
import authReducer from './authReducer';
import layoutReducer from './layoutReducer';




export default combineReducers({
  auth: authReducer,
  layout: layoutReducer,


});
