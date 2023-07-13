import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from "react-native";

import { ArrowLeft } from 'phosphor-react-native';
import { useCart } from '../../hooks/useCart';
import { AppNavigatorRoutesProps } from '../../routes/app.routes';
import { CoffeeProps } from '../../storage/storageCart';
import { Cart } from '../Cart';


import { THEME } from '../../styles/theme';
import { styles } from "./styles";


export function Header(){
  const {navigate} = useNavigation<AppNavigatorRoutesProps>()
  const {fetchCoffeesCart} = useCart()

  const[ cart, setCart] = useState<CoffeeProps[]>([])

  async function getCoffeesCart(){
    try {
      const coffees = await fetchCoffeesCart() 
      setCart(coffees)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getCoffeesCart()
  }, [])

  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigate('home')}>
        <ArrowLeft size={24} color={THEME.COLORS.WHITE}/>
      </TouchableOpacity>
      <Cart onPress={()=> navigate("cart")} quantityItemsCart={cart.length}/>
    </View>
  )
}