import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme';

const { height } = Dimensions.get('window');

const DebitCardStyle =  StyleSheet.create({
  containerStyle: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
  },
  scrollViewContainerStyle: {
    flex: 1,
    height: height * 0.9,
  },
  scrollViewContentStyle: {
    flexGrow: 1,
  },
  topViewHeight: {
    height: height * 0.35,
    width: 400,
  },
  reserveContainerStyle: {
    height: 160,
  },
  cardContainerStyle: {
    marginTop: -100,
    position: 'absolute',
    left: 24,
    right: 24,
  },
  innerContainerStyle: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  actionContainerStyle: {
    marginHorizontal: 24,
    marginBottom: 24,
  },
  innerActionContainerStyle: {
    flexDirection: 'row',
    marginTop: 34,
  },
  rightActionContainerStyle: {
    flex: 1,
    marginLeft: 12,
  },
  actionTitleStyle: {
    color: colors.actionBlue,
  },
  actionDescriptionStyle: {
    color: colors.actionGrey,
  },
});

export default DebitCardStyle;
