import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },

  button: {
    borderRadius: 6,
    padding: 8,
    width: 36, 
    height: 36, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  counter: {
    color: THEME.COLORS.GRAY_100,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.SIZES.TEXT_MD
  }
})