import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: THEME.COLORS.GRAY_100,
      
    paddingHorizontal: 32,
    paddingTop: 56,
    paddingBottom: 20,
  },

  headerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },

  headerCity: {
    fontSize: THEME.SIZES.TEXT_SM,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GRAY_900
  },

  intro: {
    width: '100%',
    paddingHorizontal: 32,
    paddingTop: 20,
    backgroundColor: THEME.COLORS.GRAY_100
  },

  title: {
    fontFamily: THEME.FONTS.TITLE_BOLD,
    fontSize: THEME.SIZES.TITLE_MD,
    color: THEME.COLORS.WHITE,
    marginBottom: 16
  },

  image: {
    position: 'relative',
    right: -28,
    width: 83,
    height: 83,
    alignSelf: 'flex-end',
    marginBottom: 54,
  }
})