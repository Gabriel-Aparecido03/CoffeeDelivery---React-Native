import { StyleSheet } from "react-native";
import { theme } from "../../style/theme/default";

export const styles = StyleSheet.create({
  container : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  button : {
    borderRadius : 6,
    padding : 12,
    width : '50%',
    marginHorizontal : 'auto',
    backgroundColor : theme.colors.purple.dark,
  },
  buttonText : {
    color : theme.colors.white,
    fontFamily : theme.fontFamily.bold,
    fontSize : 16
  },
  text : {
    color : theme.colors.gray[400],
    fontFamily : theme.fontFamily.normal,
    fontSize : 16
  }
})