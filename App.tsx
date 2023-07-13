import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Baloo2_700Bold, useFonts } from '@expo-google-fonts/baloo-2';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading';
import { CartContextProvider } from './src/context/cart';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    return (
      <Loading />
    )
  }
  
  return (
  <GestureHandlerRootView style={{flex: 1}}>
    <CartContextProvider>
      <StatusBar 
        backgroundColor="transparent"
        translucent 
        barStyle="light-content"
      />
      
      <Routes />
    </CartContextProvider>
  </GestureHandlerRootView>
  );
}
