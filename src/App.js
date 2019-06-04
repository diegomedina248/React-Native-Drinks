import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './components/navigation';
import store from './reducers';

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
