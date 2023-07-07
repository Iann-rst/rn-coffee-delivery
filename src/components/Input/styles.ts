import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_200,
    borderRadius: 4,

    padding: 12, 
    gap: 8,
  },

  title: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.SIZES.TEXT_SM,
    color: THEME.COLORS.GRAY_700
  }
})