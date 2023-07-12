import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GRAY_200,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    alignSelf: 'flex-start'
  },

  label: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.SIZES.TAG,
    color: THEME.COLORS.WHITE,
    textTransform: 'uppercase'
  }
})