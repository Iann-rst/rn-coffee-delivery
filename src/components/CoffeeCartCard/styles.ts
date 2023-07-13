import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 16,
    gap: 20,
    backgroundColor: THEME.COLORS.GRAY_900,
  },

  image: {
    width: 64,
    height: 64
  },

  about: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },

  title: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.SIZES.TEXT_MD,
    color: THEME.COLORS.GRAY_100
  },

  size: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.SIZES.TEXT_SM,
    color: THEME.COLORS.GRAY_400
  },

  price: {
    fontFamily: THEME.FONTS.TITLE_BOLD,
    fontSize: THEME.SIZES.TITLE_SM,
    color: THEME.COLORS.GRAY_200
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  button: {
    width: 36,
    height: 36,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.GRAY_700,
    padding: 8
  }
})