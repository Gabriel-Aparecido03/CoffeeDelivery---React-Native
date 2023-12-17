import { StyleSheet } from "react-native";
import { theme } from "../../style/theme/default";

export const styles = StyleSheet.create({
  header : {
    width : '100%',
    height : 160,
    borderBottomWidth : 1,
    borderBottomColor : theme.colors.gray[900],
    borderStyle : 'solid',
    justifyContent : 'space-between',
    alignItems : 'center',
    flexDirection : 'row',
    paddingHorizontal : '5%'
  },
  containerButtonHeader : {
    justifyContent : 'flex-start',
  },
  containerTitleHeader : {
    flex : 1,
    textAlign : 'center',
    fontFamily : theme.fontFamily.heading,
    fontSize : 16,
  },
  containerActionsButtonFooter : {
    position : 'absolute',
    bottom : 0,
    width : '100%',
    padding : '5%',
    backgroundColor : theme.colors.white
  },
  containerActionsButtonFooterTotalPrice : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  totalText : {
    color : theme.colors.gray[200],
    fontFamily : theme.fontFamily.normal,
    fontSize : 16
  },
  totalPriceText : {
    fontFamily : theme.fontFamily.heading,
    fontSize : 24,
    color : theme.colors.gray[200]
  },
  buttonHandleBuy : {
    backgroundColor : theme.colors.yellow.dark,
    flex : 1,
    borderRadius : 6,
  },
  buttonHandleBuyText : {
    color : theme.colors.white,
    fontSize : 20,
    fontFamily : theme.fontFamily.bold,
    textAlign : 'center',
    paddingVertical : 12
  },
  swipeableRemove : {
    width : 120,
    borderRadius : 6,
    backgroundColor : theme.colors.red.medium,
    alignItems : 'center',
    justifyContent : 'center',
    height : '100%'
  },
  swipeableContainer : {
    width : '100%',
    backgroundColor : theme.colors.red.medium,
    borderRadius : 6,
    height : 90,
    marginBottom : 12
  }
})