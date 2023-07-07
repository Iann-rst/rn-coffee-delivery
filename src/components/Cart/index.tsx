import { ShoppingCart } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from "react-native";
import { THEME } from '../../styles/theme';
import { styles } from './styles';

export function Cart(){
  const cart = []

  const color = cart.length === 0 ? THEME.COLORS.YELLOW_DARK : THEME.COLORS.PURPLE

  return(
    <TouchableOpacity activeOpacity={0.6}>
      <View style={{position: 'relative'}}>
        <ShoppingCart size={20} weight="fill" color={color}/>
        {cart.length > 0 && (
          <View style={styles.container}>
            <Text style={styles.numberOfItems}>{cart.length}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}