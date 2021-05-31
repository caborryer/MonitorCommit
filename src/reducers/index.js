import {combineReducers} from 'redux';
import authReducer from './authReducer';
import cityReducer from './cityReducer';
import usersListReducer from './usersListReducer';
import userDeleteReducer from './userDeleteReducer';
import companyReducer from './companyReducer';
import deleteDialogReducer from './deleteDialogReducer';
import areaReducer from './areaDeleteReducer'
import questionBanksListReducer from "./questionBanksListReducer";
import weAllRespondRankingsListReducer from "./weAllRespondRankingsListReducer";
import questionBankCreateReducer from "./questionBankCreateReducer";
import questionBankEditReducer from "./questionBankEditReducer";
import questionBankDeleteReducer from "./questionBankDeleteReducer";
import questionBankSet5050Reducer from "./questionBankSet5050Reducer";
import questionBankSetEmmaHelpReducer from "./questionBankSetEmmaHelpReducer";
import questionBankAnswerCreateReducer from "./questionBankAnswerCreateReducer";
import questionBankSetCorrectAnswerReducer from "./questionBankSetCorrectAnswerReducer";
import questionBankAnswerEditReducer from "./questionBankAnswerEditReducer";
import questionBankAnswerDeleteReducer from "./questionBankAnswerDeleteReducer";
import gameOneStructureReducer from "./gameOneStructureReducer";
import gameThreeStructureReducer from "./gameThreeStructureReducer";
import assignQuestionByLevelReducer from "./assignQuestionByLevelReducer";
import removeQuestionByLevelReducer from "./removeQuestionByLevelReducer";
import allKnowAssignQuestionByLevelReducer from "./allKnowAssignQuestionByLevelReducer";
import allKnowRemoveQuestionByLevelReducer from "./allKnowRemoveQuestionByLevelReducer";
import weAllConcentrateRankingsListReducer from './weAllConcentrateRankingsListReducer';
import weAllKnowRankingsListReducer from "./weAllKnowRankingsListReducer";
import levelActivatorListReducer from "./levelActivatorReducer";
import layoutReducer from "./layoutReducer";
import cardBanksListReducer from './cardBanksListReducer';
import cardBankEditReducer from './cardBankEditReducer';
import cardBankCreateReducer from './cardBankCreateReducer';
import cardBankUploadImageReducer from './cardBankUploadImageReducer';
import cardBankDeleteReducer from './cardBankDeleteReducer';
import classifiedNumberListReducer from './classifiedNumberListReducer';
import newCardBanksListReducer from './newCardBanksListReducer';
import gameTwoStructureReducer from './gameTwoStructureReducer';
import assignCardByLevelReducer from './assignCardByLevelReducer';
import removeCardByLevelReducer from './removeCardByLevelReducer';

export default combineReducers({
  auth: authReducer,
  city: cityReducer,
  usersList: usersListReducer,
  userDelete: userDeleteReducer,
  company: companyReducer,
  deleteDialog: deleteDialogReducer,
  areaDelete: areaReducer,
  questionBanksList: questionBanksListReducer,
  weAllRespondRankingsList: weAllRespondRankingsListReducer,
  weAllConcentrateRankingsList: weAllConcentrateRankingsListReducer,
  weAllKnowRankingsList: weAllKnowRankingsListReducer,
  questionBankCreate: questionBankCreateReducer,
  questionBankEdit: questionBankEditReducer,
  levelActivatorList: levelActivatorListReducer,
  questionBankDelete: questionBankDeleteReducer,
  questionBankSet5050: questionBankSet5050Reducer,
  questionBankSetEmmaHelp: questionBankSetEmmaHelpReducer,
  questionBankAnswerCreate: questionBankAnswerCreateReducer,
  questionBankSetCorrectAnswer: questionBankSetCorrectAnswerReducer,
  questionBankAnswerEdit: questionBankAnswerEditReducer,
  questionBankAnswerDelete: questionBankAnswerDeleteReducer,
  gameOneStructure: gameOneStructureReducer,
  gameThreeStructure: gameThreeStructureReducer,
  assignQuestionByLevel: assignQuestionByLevelReducer,
  removeQuestionByLevel: removeQuestionByLevelReducer,
  allKnowAssignQuestionByLevel: allKnowAssignQuestionByLevelReducer,
  allKnowRemoveQuestionByLevel: allKnowRemoveQuestionByLevelReducer,
  layout: layoutReducer,
  cardBanksList: cardBanksListReducer,
  cardBankEdit: cardBankEditReducer,
  cardBankCreate: cardBankCreateReducer,
  cardBankUploadImage: cardBankUploadImageReducer,
  classifiedNumberList:classifiedNumberListReducer,
  cardBankDelete: cardBankDeleteReducer,
  newCardBanksList: newCardBanksListReducer,
  gameTwoStructure: gameTwoStructureReducer,
  assignCardByLevel: assignCardByLevelReducer,
  removeCardByLevel: removeCardByLevelReducer,
});
