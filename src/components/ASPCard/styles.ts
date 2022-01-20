import { StyleSheet } from "react-native";
import { colors } from "../../theme";

const ASPCardStyle = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.primaryGreen,
    padding: 24,
    borderRadius: 10,
  },
  hideContainerStyle: {
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
    width: 150,
    marginBottom: -10,
    paddingTop: 8,
    paddingBottom: 15,
    paddingHorizontal: 12,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  hideTextContainerStyle: {
    flexDirection: 'row',
  },
  hideImageStyle: {
    height: 16,
    width: 16,
  },
  hideTextStyle: {
    marginLeft: 6,
    color: colors.primaryGreen,
  },
  aspireLogoStyle: {
    height: 21,
    width: 74,
  },
  aspireLogoContainerStyle: {
    alignItems: 'flex-end'
  },
  nameTextStyle: {
    marginTop: 24,
  },
  cardNumberContainerStyle: {
    flexDirection:'row',
    marginTop: 24,
  },
  cardNumberTextStyle: {
    letterSpacing: 3.64,
    flex: 0.3,
  },
  dateStyle:{
    flexDirection:'row',
    marginTop:15, 
  },
  cvvStyle: {
    marginLeft: 32,
  },
  visaLogoContainerStyle: {
    marginTop:4,
    alignItems: 'flex-end',
  },
  visaLogoStyle: {
    height: 20,
    width: 59,
  }
});

export default ASPCardStyle;
