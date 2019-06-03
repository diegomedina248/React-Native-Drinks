import drinksController from '../controllers/DrinksController';

export const actionTypes = {
  FETCH_DRINKS_REQUEST: 'FETCH_DRINKS_REQUEST',
  FETCH_DRINKS_ERROR: 'FETCH_DRINKS_ERROR',
  FETCH_DRINKS_SUCCESS: 'FETCH_DRINKS_SUCCESS',
  FETCH_DRINKS_RESET: 'FETCH_DRINKS_RESET',
};

export const resetDrinksStatus = () => ({
  type: FETCH_DRINKS_RESET,
});

export const drinksRequest = () => ({
  type: FETCH_DRINKS_REQUEST,
});

export const drinksSuccess = drinks => ({
  type: FETCH_DRINKS_SUCCESS,
  drinks,
});

export const drinksError = error => ({
  type: FETCH_DRINKS_ERROR,
  error,
});

export const fetchDrinks = () => async (dispatch) => {
  dispatch(drinksRequest());

  try {
    const result = await drinksController.getDrinks();
    if (!result || !result.drinks) throw "";

    const {drinks} = result;
    dispatch(drinksSuccess(drinks));
  } catch (error) {
    dispatch(drinksError(error));
  }
};
