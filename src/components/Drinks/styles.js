import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.VIOLET,
  },
  title: {
    fontWeight: 'bold',
    color: colors.WHITE,
    fontSize: 16,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginVertical: 30,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    padding: 20,
    color: colors.PINK,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    flexGrow: 1,
  },
  item: {
    marginHorizontal: 15,
    marginBottom: 20,
    backgroundColor: colors.SOFT_GREY,
    padding: 20,
    alignSelf: 'stretch',
    borderRadius: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemName: {
    color: colors.DARK_GREY,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 20,
    flex: 1,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    flex: 0,
  },
});
