import { StyleSheet } from "react-native";
import { colors } from "../../theme";

const ASPCardStyle = StyleSheet.create({
  cardContainer: {
    marginTop: 16,
    marginHorizontal: 24,
    flexDirection: 'row',
  },
  debitLimitTitleStyle: {
    color: colors.darkGrey,
  },
  limitValueContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  limitDeviderStyle: {
    width: 1,
    marginVertical: 1,
    marginHorizontal: 10,
    backgroundColor: colors.secondaryGrey,
  },
  usedValueTextStyle: {
    color: colors.primaryGreen,
  },
  limitValueTextStyle: {
    color: colors.secondaryGrey,
  },
});

export default ASPCardStyle;
