import { createStackNavigator } from 'react-navigation';

import Drinks from '../Drinks';

const AppStack = createStackNavigator(
  {
    Drinks,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

export default AppStack;
