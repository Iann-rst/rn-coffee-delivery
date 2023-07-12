import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 98,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_700,
    backgroundColor: THEME.COLORS.GRAY_700,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: THEME.COLORS.GRAY_300,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.SIZES.TEXT_SM
  }
})