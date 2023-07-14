import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_900,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 64
  },
  
  title: {
    marginTop: 44,
    fontFamily: THEME.FONTS.BOLD,
    fontSize: THEME.SIZES.TITLE_LG,
    color: THEME.COLORS.YELLOW_DARK,
    textAlign: 'center'
  },
  subTitle: {
    marginTop: 8,
    marginBottom: 64,
    textAlign: 'center',
    color: THEME.COLORS.GRAY_200,
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.SIZES.TEXT_SM
  }
})