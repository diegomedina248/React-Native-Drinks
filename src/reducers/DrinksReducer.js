import {actionTypes} from '../actions/DrinkActions';
import createReducer from './createReducer';

const initialState = {
  drinks: [],
};

const fetchDrinksSuccess = (state, {drinks}) => ({
  ...state,
  drinks,
});

const handlers = {
  [actionTypes.FETCH_DRINKS_SUCCESS]: fetchDrinksSuccess,
}

export default createReducer(initialState, handlers);
