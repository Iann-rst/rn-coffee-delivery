import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: THEME.COLORS.GRAY_100,
    
    paddingHorizontal: 32,
    paddingTop: 56,
    paddingBottom: 20,

  }
})