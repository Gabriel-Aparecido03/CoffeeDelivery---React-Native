import { StyleSheet } from "react-native";
import { theme } from "../../style/theme/default";

export const styles = StyleSheet.create({
  showcaseContainer: {
    height: 456,
    backgroundColor: theme.colors.gray[100],
    width: '100%',
    padding: '5%',
    paddingTop: '15%'
  },
  inputContainer: {
    backgroundColor: theme.colors.gray[200],
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 4
  },
  input: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    fontSize: 14,
    color: theme.colors.gray[400],
    flex: 1
  },
  imageBackground: {
    position: 'absolute',
    right: 0,
    bottom: 120
  },
  showcaseItemsContainer: {
    top: -60
  },
  textOurCoffees : {
    fontFamily : theme.fontFamily.heading,
    color : theme.colors.gray[300],
    fontSize : 16,
    marginBottom : 12
  },
  containerFilters : {
    flexDirection : 'row',
    justifyContent : 'flex-start',
    gap : 12,
  },
  pressableSelected: {
    borderRadius: 36,
    backgroundColor: theme.colors.purple.light,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth : 1,
    borderColor : 'transparent',
    borderStyle : 'solid'
  },
  pressableUnselected: {
    borderRadius: 36,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth : 1,
    borderColor :  theme.colors.purple.dark,
    borderStyle : 'solid'
  },
  pressableTextSelected : {
    textTransform : 'uppercase',
    color : theme.colors.purple.dark,
    fontFamily : theme.fontFamily.bold,
    textAlign : 'center'
  },
  pressableTextUnselected : {
    textTransform : 'uppercase',
    color : theme.colors.purple.dark,
    fontFamily : theme.fontFamily.bold,
    textAlign : 'center',
  },
  textHeading : {
    fontFamily : theme.fontFamily.heading,
    color : theme.colors.gray[400],
    fontSize : 16,
    marginVertical : 20
  }

})