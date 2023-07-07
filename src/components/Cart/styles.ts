import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: THEME.COLORS.PURPLE,
    position: 'absolute',
    
    top: -15,
    right: -15,
  },

  numberOfItems: {
    fontSize: THEME.SIZES.TEXT_XS,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.WHITE
  }
})