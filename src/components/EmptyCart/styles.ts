import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingTop: 90,
    paddingHorizontal: 52 
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 32
  },

  title: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: THEME.SIZES.TEXT_MD,
    color: THEME.COLORS.GRAY_400
  }

})