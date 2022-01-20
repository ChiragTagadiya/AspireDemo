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
  availableBalanceContainerStyle: {
    marginTop: 24,
  },
  availableBalanceTextStyle: {
    color: colors.white,
  },
});

export default DebitCardStyle;
