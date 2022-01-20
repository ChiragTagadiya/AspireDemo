import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const DebitCardStyle =  StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  innerContainerStyle: {
    flex: 1,
    backgroundColor: colors.primaryBlue,
  },
  headerContainerStyle: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  debitCardTitleContainerStyle: {
    marginTop: 41,
  },
  aspireIconContainerStyle: {
    flex: 1,
    marginTop: 25,
    marginRight: 0,
    alignItems: 'flex-end',
  },
  aspireIconStyle: {
    height: 25,
    width: 25.59,
  },
  reserveContainerStyle: {
    height: 160
  },
  setLimitContainerStyle: {
    marginTop: 40,
  },
  spendMoneyContainerStyle: {
    marginTop: 24,
    marginHorizontal: 24,
    paddingHorizontal: 10,
    height: 36,
    backgroundColor: colors.white,
    borderRadius: 18,
    color: colors.primaryBlue,
  },
  spendMoneyDescription: {
    marginTop: 18,
    marginHorizontal: 24,
    color: colors.white,
  },
  spendContentContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  spendContainer: {
    marginHorizontal: 57,
    marginBottom: 24,
    height: 56,
    borderRadius: 30,
    backgroundColor: colors.primaryGreen,
    justifyContent: 'center',
  },
  spendTitleStyle: {
    color: colors.white,
    fontSize: 16,
    alignSelf: 'center'
  },
});

export default DebitCardStyle;
