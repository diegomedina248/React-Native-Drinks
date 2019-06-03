import { combineReducers } from 'redux';
import drinks from './DrinksReducer';
import status from './StatusReducer';
import error from './ErrorReducer';

const rootReducer = combineReducers({
  status,
  error,
  drinks,
});

export default rootReducer;
