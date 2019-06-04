import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import strings from '../../localization';

import { fetchDrinks } from '../../actions/DrinkActions';
import * as actionTypes from '../../constants/ActionTypes';

import DrinkItem from './DrinkItem'
import colors from '../../constants/colors'
import styles from './styles';

const isLoading = status => !status || status === actionTypes.NOT_STARTED || status === actionTypes.LOADING;
const errorFound = status => status === actionTypes.ERROR;
const finishedLoading = status => status === actionTypes.SUCCESS;

const LoadingView = () => (
  <View style={styles.contentContainer}>
    <ActivityIndicator size='large' color={colors.WHITE} />
  </View>
);

const MessageView = ({ message }) => (
  <View style={styles.contentContainer}>
    <Text style={styles.messageText}>{message}</Text>
  </View>
);

const DrinkList = ({ drinks }) => {
  const keyExtractor = drink => drink.idDrink;
  const renderItem = ({ item }) => <DrinkItem {...item} />;

  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      data={drinks}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={<MessageView message={strings.noDrinksFound} />}
    />
  );
};

export default () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.status[actionTypes.status.FETCH_DRINKS]);
  const drinks = useSelector(state => state.drinks.drinks);

  useEffect(() => {
    dispatch(fetchDrinks());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{strings.randomDrinks}</Text>
      {isLoading(status) && <LoadingView />}
      {finishedLoading(status) && <DrinkList drinks={drinks} />}
      {errorFound(status) && <MessageView message={strings.errorLoadingDrings}/>}
    </SafeAreaView>
  );
};
