import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

const WIDTH = Dimensions.get('window').width

export const styles = StyleSheet.create({
  container: {
    width: WIDTH * 0.55,
    
    paddingHorizontal: 16,
    paddingBottom: 20,


    backgroundColor: THEME.COLORS.GRAY_800,

    alignItems: 'center',
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_800,
    borderRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    gap: 14,

    marginTop: 32,
    marginBottom: 32,


    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 2
  },

  image: {
    width: 120,
    height: 120,
    marginTop: -32
  },

  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: THEME.COLORS.PURPLE_LIGHT,
    alignItems: 'center',
    justifyContent: 'center'
  },

  tagText: {
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.SIZES.TAG,
    color: THEME.COLORS.PURPLE_DARK,
    textTransform: 'uppercase'
  },

  info: {
    alignItems: 'center',
    gap: 4
  },

  title: {
    fontFamily: THEME.FONTS.TITLE_BOLD,
    fontSize: THEME.SIZES.TITLE_MD,
    color: THEME.COLORS.GRAY_200
  },

  description: {
    textAlign: 'center',
    fontSize: THEME.SIZES.TEXT_XS,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GRAY_400
  },

  price: {
    fontSize: THEME.SIZES.TITLE_LG,
    fontFamily: THEME.FONTS.TITLE_BOLD,
    color: THEME.COLORS.YELLOW_DARK
  }
})