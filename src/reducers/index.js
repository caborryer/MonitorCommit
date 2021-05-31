import {combineReducers} from 'redux';
import authReducer from './authReducer';
import allKnowAssignQuestionByLevelReducer from "./allKnowAssignQuestionByLevelReducer";
import layoutReducer from "./layoutReducer";
import cardBanksListReducer from './cardBanksListReducer';


export default combineReducers({
  auth: authReducer,
  allKnowAssignQuestionByLevel: allKnowAssignQuestionByLevelReducer,
  layout: layoutReducer,
  cardBanksList: cardBanksListReducer,

});
