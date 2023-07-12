import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart } from '../screens/Cart';
import { Finish } from '../screens/Finish';
import { Home } from '../screens/Home';
import { Product } from '../screens/Product';

type RootStackParamList = {
  home: undefined;
  product: {productId: number};
  cart: undefined;
  finish: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<RootStackParamList>

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false, animation: "fade"}}>
      <Screen name='home' component={Home}/>
      <Screen name='product' component={Product}/>
      <Screen name='cart' component={Cart}/>
      <Screen name='finish' component={Finish}/>
    </Navigator>
  )
}