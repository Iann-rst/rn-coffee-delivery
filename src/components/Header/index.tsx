import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity, View } from "react-native";
import { AppNavigatorRoutesProps } from '../../routes/app.routes';
import { THEME } from '../../styles/theme';
import { Cart } from '../Cart';
import { styles } from "./styles";

export function Header(){
  const {navigate} = useNavigation<AppNavigatorRoutesProps>()

  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigate('home')}>
        <ArrowLeft size={24} color={THEME.COLORS.WHITE}/>
      </TouchableOpacity>
      <Cart />
    </View>
  )
}