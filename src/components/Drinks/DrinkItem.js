import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const DrinkItem = ({ idDrink, strDrink, strDrinkThumb }) => (
  <View style={styles.item}>
    <Image
      style={styles.itemImage}
      source={{uri: strDrinkThumb}}
    />
    <Text style={styles.itemName}>{strDrink}</Text>
  </View>
);

DrinkItem.propTypes = {
  idDrink: PropTypes.string,
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
};

export default DrinkItem;
