import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_900,
    paddingTop: 18,
  },

  header: {
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GRAY_700,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 26
  },

  title: {
    fontFamily: THEME.FONTS.TITLE_BOLD,
    fontSize: THEME.SIZES.TITLE_SM,
    color: THEME.COLORS.GRAY_200
  },

  footer: {
    width: '100%',
    backgroundColor: THEME.COLORS.WHITE,
    gap: 20,
    paddingHorizontal: 32,
    paddingTop: 28,
    paddingBottom: 40,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 10
  },

  amount: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.SIZES.TEXT_MD,
    color: THEME.COLORS.GRAY_200
  },

  price: {
    fontFamily: THEME.FONTS.TITLE_BOLD,
    fontSize: THEME.SIZES.TEXT_MD,
    color: THEME.COLORS.GRAY_200
  }
})