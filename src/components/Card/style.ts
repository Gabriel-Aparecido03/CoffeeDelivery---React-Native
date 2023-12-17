import { StyleSheet } from "react-native";
import { theme } from "../../style/theme/default";

export const styles = StyleSheet.create({
  containerCard : {
    borderWidth : 1,
    borderColor : theme.colors.gray[700],
    borderStyle : 'solid',
    backgroundColor : theme.colors.white,
    borderRadius : 6,
    borderTopRightRadius : 36,
    borderBottomLeftRadius : 36,
    padding : 6,
    justifyContent : "center",
    alignItems : "center",
    position : "relative",
    flexDirection : "row",
    gap : 12,
    marginVertical : 12,
  },
  titleText : {
    fontSize : 24,
    fontFamily : theme.fontFamily.heading,
    color : theme.colors.gray[200],
    marginVertical : 3
  },
  descriptionText : {
    fontSize : 14,
    fontFamily : theme.fontFamily.normal,
    color : theme.colors.gray[400],
    width : '60%',
    marginHorizontal : 'auto',
    marginVertical : 3
  },
  priceText : {
    fontFamily : theme.fontFamily.heading,
    color : theme.colors.yellow.dark,
    fontSize : 24
  } ,
  auxPriceText : {
    fontFamily : theme.fontFamily.heading,
    color : theme.colors.yellow.dark,
    fontSize : 16
  }
})