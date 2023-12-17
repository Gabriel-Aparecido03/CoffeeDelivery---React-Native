import { StyleSheet } from "react-native";
import { theme } from "../../style/theme/default";

export const styles = StyleSheet.create({
  containerCoffee : {
    backgroundColor : theme.colors.gray[100],
    paddingHorizontal : '5%',
    flex : 1,
    height : '40%'
  },
  tag : {
    backgroundColor : theme.colors.gray[200],
    borderRadius : 36,
    alignItems : 'center',
    justifyContent : 'center',
    minWidth: 70,
    padding : 4,
    maxWidth : 120
  },
  tagText : {
    textTransform : 'uppercase',
    fontFamily : theme.fontFamily.bold,
    color : theme.colors.white
  },
  containerTitleAndPrice : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'baseline',
    marginVertical : 30
  },
  titleText : {
    fontFamily : theme.fontFamily.heading,
    color : theme.colors.white,
    fontSize : 24
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
  },
  descriptionText : {
    color : theme.colors.gray[500],
    fontFamily : theme.fontFamily.normal,
    width : '70%'
  },
  specsContainer : {
    paddingHorizontal : '5%',
    justifyContent : 'flex-end',
    flex : 1,
    gap : 12,
    paddingBottom : '10%'
  },
  sizeText : {
    fontFamily : theme.fontFamily.normal,
    color : theme.colors.gray[400],
    fontSize : 14,
  },
  sizeOptions : {
    flexDirection : 'row',
    justifyContent : 'center',
    gap : 16,
    alignItems : 'center'
  },
  pressableSelected : {
    borderRadius : 6,
    backgroundColor : theme.colors.white,
    borderWidth : 1,
    borderStyle : 'solid',
    borderColor : theme.colors.purple.medium,
    flex : 1,
    padding : 10
  },
  pressableUnselected : {
    borderRadius : 6,
    backgroundColor : theme.colors.gray[700],
    borderWidth : 1,
    borderStyle : 'solid',
    borderColor : theme.colors.gray[700],
    flex : 1,
    padding : 10
  },
  pressableTextSelected : {
    textTransform : 'uppercase',
    fontFamily : theme.fontFamily.bold,
    color : theme.colors.purple.medium,
    textAlign : 'center'
  },
  pressableTextUnselected : {
    textTransform : 'uppercase',
    fontFamily : theme.fontFamily.bold,
    color : theme.colors.gray[300],
    textAlign : 'center'
  },
  quantityContainer : {
    backgroundColor : theme.colors.gray[700],
    borderRadius : 4,
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 5,
    gap : 20
  },
  touchableQuantity : {
    flexDirection : 'row',
    justifyContent : 'center',
    flex : 1,
    gap : 20,
    alignItems : 'center'
  },
  buttonAddToCart : {
    backgroundColor : theme.colors.purple.medium,
    borderRadius : 6,
    width : '70%',
    paddingVertical : 20,
  },
  buttonAddToCartText : {
    color : theme.colors.white,
    fontFamily : theme.fontFamily.bold,
    textAlign : 'center'
  }
})