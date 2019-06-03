import httpClient from './HttpClient';

const COCKTAIL_TYPE = 'Cocktail_glass';

class DrinksController {
  constructor() {
    this.basePath = 'filter.php'
  }

  getDrinks = await httpClient.get(this.basePath, {
    params: {
      g: COCKTAIL_TYPE,
    },
  });
}

export default new DrinksController();
