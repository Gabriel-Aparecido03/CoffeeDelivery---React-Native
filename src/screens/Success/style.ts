import { StyleSheet } from "react-native";
import { theme } from "../../style/theme/default";

export const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems : 'center',
    flex : 1,
  },
  title : {
    fontFamily : theme.fontFamily.heading,
    color : theme.colors.yellow.medium,
    fontSize : 24,
    textAlign : 'center',
    marginTop : 32
  },
  subtitle : {
    textAlign : 'center',
    width : '60%',
    marginHorizontal : 'auto',
    marginBottom : 32,
    marginTop : 12,
    fontSize : 16
  },
  button : {
    borderRadius : 6,
    backgroundColor : theme.colors.purple.medium,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 12,
    width : '50%'
  },
  buttonText : {
    fontFamily : theme.fontFamily.bold,
    color : theme.colors.white,
    fontSize : 12,
    textAlign : 'center',
    textTransform : 'uppercase'
  }
})