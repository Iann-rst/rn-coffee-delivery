import { StatusBar } from 'react-native';

import { Baloo2_700Bold, useFonts } from '@expo-google-fonts/baloo-2';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Home } from './src/screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    return null
  }
  
  return (
  <>
    <StatusBar 
      backgroundColor="transparent"
      translucent 
      barStyle="light-content"
    />
    
    <Home />
  </>
  );
}
