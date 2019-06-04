import drinksController from '../controllers/DrinksController';

export const actionTypes = {
  FETCH_DRINKS_REQUEST: 'FETCH_DRINKS_REQUEST',
  FETCH_DRINKS_ERROR: 'FETCH_DRINKS_ERROR',
  FETCH_DRINKS_SUCCESS: 'FETCH_DRINKS_SUCCESS',
  FETCH_DRINKS_RESET: 'FETCH_DRINKS_RESET',
};

export const resetDrinksStatus = () => ({
  type: actionTypes.FETCH_DRINKS_RESET,
});

export const drinksRequest = () => ({
  type: actionTypes.FETCH_DRINKS_REQUEST,
});

export const drinksSuccess = drinks => ({
  type: actionTypes.FETCH_DRINKS_SUCCESS,
  drinks,
});

export const drinksError = error => ({
  type: actionTypes.FETCH_DRINKS_ERROR,
  error,
});

export const fetchDrinks = () => async (dispatch) => {
  dispatch(drinksRequest());
  try {
    const {data} = await drinksController.getDrinks();
    if (!data || !data.drinks) throw "Error communicating with API";

    const {drinks} = data;
    dispatch(drinksSuccess(drinks));
  } catch (error) {
    dispatch(drinksError(error));
  }
};
