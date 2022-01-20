import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const HomeStyle =  StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  innerContainerStyle: {
    flex: 1,
    backgroundColor: colors.primaryBlue,
  },
  titleTextStyle: {
    marginTop: 41,
    marginLeft: 24,
  },
});

export default HomeStyle;
