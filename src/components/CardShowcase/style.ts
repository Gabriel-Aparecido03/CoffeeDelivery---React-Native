import { StyleSheet } from "react-native";
import { theme } from "../../style/theme/default";

export const styles = StyleSheet.create({
  container : {
    backgroundColor : theme.colors.white,
    borderRadius : 6,
    borderTopRightRadius : 36,
    borderBottomLeftRadius : 36,
    padding : 6,
    justifyContent : "center",
    alignItems : "center",
    position : "relative",
    borderWidth : 1,
    borderColor : theme.colors.gray[700],
    borderStyle : 'solid',
    width : 300,
    height : 330
  },
  tagsContainer : {
    flexDirection : 'row',
    gap : 4,
    alignItems : 'center',
    justifyContent : 'center',
    marginVertical : 10
  },
  tag : {
    borderRadius : 36,
    backgroundColor : theme.colors.purple.light,
    justifyContent : 'center',
    alignItems : 'center',
    paddingVertical : 4,
    paddingHorizontal : 8,
  },
  tagText : {
    textTransform : 'uppercase',
    color : theme.colors.purple.dark,
    fontFamily : theme.fontFamily.bold,
    textAlign : 'center'
  },
  titleText : {
    fontSize : 24,
    fontFamily : theme.fontFamily.heading,
    textAlign : 'center',
    color : theme.colors.gray[200],
    marginVertical : 10
  },
  descriptionText : {
    fontSize : 14,
    fontFamily : theme.fontFamily.normal,
    color : theme.colors.gray[400],
    width : '60%',
    marginHorizontal : 'auto',
    textAlign : 'center',
    marginVertical : 10
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