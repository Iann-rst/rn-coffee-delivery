import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE
  },
  
  content: {
    backgroundColor: THEME.COLORS.GRAY_100,
    paddingHorizontal: 32,
    paddingTop: 12,
    alignItems: 'center'
  },

  info: {
    width: '100%',
    gap: 20,
    marginBottom: 62
  },

  main: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  title: {
    gap: 12
  },

  name: {
    fontSize: THEME.SIZES.TITLE_LG,
    fontFamily: THEME.FONTS.TITLE_BOLD,
    color: THEME.COLORS.WHITE
  },

  description: {
    fontSize: THEME.SIZES.TEXT_MD,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GRAY_500
  },

  footer: {
    flex: 1,
    paddingTop: 42,
    paddingHorizontal: 32,
    paddingBottom: 32,
    backgroundColor: THEME.COLORS.GRAY_900,
    position: 'relative',
    gap: 20,
    zIndex: -1
  },

  selection: {
    gap: 8
  },

  options: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  addToCart: {
    flexDirection: 'row',
    width: '100%',
    height: 62,
    padding: 8,
    gap: 16,

    borderRadius: 6,
    backgroundColor: THEME.COLORS.GRAY_700
  },

})