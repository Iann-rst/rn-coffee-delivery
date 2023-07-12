import { Minus, Plus } from "phosphor-react-native";
import { Pressable, Text, View } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";


type Props = {
  increment: ()=>void;
  decrement: ()=>void;
  count: number
}

export function Counter({count, decrement, increment}:Props){
  return(
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={decrement}>
        <Minus size={20} weight="bold" color={THEME.COLORS.PURPLE}/>
      </Pressable>
      <Text style={styles.counter}>{count}</Text>
      <Pressable style={styles.button} onPress={increment}>
        <Plus size={20} weight="bold" color={THEME.COLORS.PURPLE}/>
      </Pressable>
    </View>
  )
}