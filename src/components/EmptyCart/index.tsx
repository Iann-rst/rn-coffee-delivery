import { useNavigation } from "@react-navigation/native";
import { ShoppingCartSimple } from "phosphor-react-native";
import { Text, View } from "react-native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { THEME } from "../../styles/theme";
import { Button } from "../Button";
import { styles } from "./styles";

export function EmptyCart(){
  const {navigate} = useNavigation<AppNavigatorRoutesProps>()

  return(
    <View style={styles.container}>
       <View style={styles.content}>
       <ShoppingCartSimple size={24} weight="fill" color={THEME.COLORS.GRAY_500}/>
        <Text style={styles.title}>
          Seu carrinho está vazio
        </Text>
       </View>
        <Button title="Ver catálogo" type="PURPLE" onPress={()=>navigate("home")}/>
    </View>
  )
}