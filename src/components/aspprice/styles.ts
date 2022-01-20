import { StyleSheet } from "react-native";
import { colors } from "../../theme";

const ASPPriceStyle = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 20,
    fontFamily: "Avenir Next",
  },
  availableBalanceValueContainerStyle: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  currencyContainerStyle: {
    paddingVertical: 3,
    paddingHorizontal: 13,
    borderRadius: 4,
    backgroundColor: colors.primaryGreen,
  },
  availableBalanceTextStyle: {
    marginTop: 2,
    marginLeft: 10,
    height: 34,
    color: colors.black,
  },
});

export default ASPPriceStyle;
