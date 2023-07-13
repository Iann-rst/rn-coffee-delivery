import { ShoppingCart } from 'phosphor-react-native';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { THEME } from '../../styles/theme';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  quantityItemsCart: number
}

export function Cart({quantityItemsCart, ...rest}: Props){

  const color = quantityItemsCart === 0 ? THEME.COLORS.YELLOW_DARK : THEME.COLORS.PURPLE



  return(
    <TouchableOpacity activeOpacity={0.6} {...rest}>
      <View style={{position: 'relative'}}>
        <ShoppingCart size={20} weight="fill" color={color}/>
        {quantityItemsCart > 0 && (
          <View style={styles.container}>
            <Text style={styles.numberOfItems}>{quantityItemsCart}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}