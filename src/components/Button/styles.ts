import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 46,
    maxHeight: 46,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: THEME.SIZES.BUTTON,
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.WHITE,
    textTransform: 'uppercase'
  }
})