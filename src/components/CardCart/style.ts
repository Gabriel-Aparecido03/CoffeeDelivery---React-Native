import { StyleSheet } from "react-native";
import { theme } from "../../style/theme/default";

export const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    alignItems : 'center',
    borderTopColor : theme.colors.gray[700],
    borderTopWidth : 1,
    borderStyle : 'solid',
    borderBottomColor : theme.colors.gray[700],
    borderBottomWidth : 1,
    padding : '5%',
    gap : 21,
    backgroundColor : theme.colors.gray[900]
  },
  specsContainer : {
    justifyContent : 'flex-start',
    gap : 21,
    flex : 1
  },
  priceAndNameContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'flex-start',
  },
  titleAndSizeContainer : {
    flex : 1,
  },
  titleText : {
    fontFamily : theme.fontFamily.normal,
    color : theme.colors.gray[100],
    fontSize : 16,
  },
  sizeText : {
    fontFamily :theme.fontFamily.normal ,
    color : theme.colors.gray[400],
    fontSize : 14
  },
  containerActions : { 
    flexDirection : 'row',
    justifyContent : 'flex-start',
    gap : 12,
    alignItems : 'center',
  },
  touchableQuantity : {
    borderRadius : 6,
    justifyContent : 'center',
    alignItems : 'center',
    gap : 16,
    borderWidth : 1,
    borderColor : theme.colors.gray[700],
    borderStyle : 'solid',
    flexDirection : 'row',
    padding : 12
  },
  touchableDelete : {
    backgroundColor : theme.colors.purple.light,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 6,
    padding : 12
  },
  priceText : {
    fontFamily : theme.fontFamily.heading,
    fontSize : 16,
    color : theme.colors.gray[100]
  }
})