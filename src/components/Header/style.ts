import { StyleSheet } from "react-native";
import { theme } from "../../style/theme/default";

export const styles = StyleSheet.create({
  container : {
    width : "100%",
    backgroundColor : "none",
    flexDirection : "row",
    justifyContent : "center",
    alignItems : "center",
    height: 120,
    paddingHorizontal : '5%'
  },
  localizationContainer : {
    flexDirection : "row",
    justifyContent : "flex-start",
    alignItems : "center",
    flex : 1,
    gap : 12
  },
  cartContainer : {
    position : "relative",
  },
  cartIndication : {
    position : "absolute",
    backgroundColor : theme.colors.purple.dark,
    borderRadius : 999999,
    top : -8,
    right : -8,
    width : 16,
    height : 16,
    justifyContent : "center",
    alignItems : "center"
  }
})