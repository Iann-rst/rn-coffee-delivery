import { MagnifyingGlass } from "phosphor-react-native";
import { TextInput, View } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

type Props = {}

export function Input(){
  return(
    <View style={styles.container}>
      <MagnifyingGlass size={16} color={THEME.COLORS.GRAY_400}/>
      <TextInput 
        style={styles.title}
        placeholder="Pesquisar" 
        placeholderTextColor={THEME.COLORS.GRAY_400}
      />
    </View>
  )
}