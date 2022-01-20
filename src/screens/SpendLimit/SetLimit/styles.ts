import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

const SpendLimitStyle =  StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  innerContainerStyle: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  limitTitle: {
    color: colors.primaryBlue,
    fontSize: 14
  },
  calendarTitle: {
    color: colors.alphaGrey,
    marginTop: 18
  },
  saveText: {
    color: colors.white,
    fontSize: 16,
    alignSelf: 'center'
  },
  btnCodeTitle: {
    color: colors.primaryGreen,
    alignSelf: 'center',
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  buttonContainer: {
    height: 40,
    flex: 0.30,
    backgroundColor: colors.bgGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    borderRadius: 4,
  },
  debitCardTitleContainerStyle: {
    marginTop: 41,
  },
  aspireIconContainerStyle: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 32
  },
  aspireIconStyle: {
    height: 16,
    width: 16,
    marginRight: 12
  },
  priceContainer: {
    marginHorizontal: 24
  },
  separatorStyle: {
    marginTop: 2,
    marginHorizontal: 0,
    height: 0.5,
    backgroundColor: colors.secondaryGrey,
  },
  saveContentContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  saveContainer: {
    marginHorizontal: 57,
    marginBottom: 24,
    height: 56,
    borderRadius: 30,
    backgroundColor: colors.primaryGreen,
    justifyContent: 'center',
  },
  disableSaveContainer: {
    backgroundColor: colors.disableGrey,
  },
});

export default SpendLimitStyle;
