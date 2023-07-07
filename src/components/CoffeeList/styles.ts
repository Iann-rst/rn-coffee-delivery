import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 32,

    backgroundColor: THEME.COLORS.GRAY_800,
    padding: 16,

    gap: 12,
    
    borderRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,

    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_700,

    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 2
  },

  image: {
    width: 96,
    height: 96,
    position: 'relative',
    top: -32
  },

  content: {
    gap: 4,
    marginBottom: 8,
  },

  title: {
    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONTS.TITLE_BOLD,
    fontSize: THEME.SIZES.TITLE_SM
  },

  description: {
    color: THEME.COLORS.GRAY_400,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.SIZES.TEXT_XS,
  },

  price: {
    color: THEME.COLORS.YELLOW_DARK,
    fontFamily: THEME.FONTS.TITLE_BOLD,
    fontSize: THEME.SIZES.TITLE_MD
  }
})