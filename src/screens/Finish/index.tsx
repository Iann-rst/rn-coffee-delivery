import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import Animated, { Keyframe, SlideInLeft, runOnJS } from "react-native-reanimated";

import { Button } from "../../components/Button";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { cartRemoveAll } from "../../storage/storageCart";

import MotoSvg from '../../assets/delivery.svg';
import { styles } from "./styles";


const SCREEN_WIDTH = Dimensions.get('window').width

export function Finish(){
  const [visible, setVisible] = useState(false)
  
  const {navigate} = useNavigation<AppNavigatorRoutesProps>()

  const enteringKeyframeSVG = new Keyframe({
    0: {
      opacity: 0,
      transform: [
        {translateX: SCREEN_WIDTH * -1},
      ]
    },
    70: {
      opacity: 0.3
    },
    100: {
      opacity: 1,
      transform: [
        {translateX: 0}
      ]
    }
  })

  const enteringKeyframe = new Keyframe({
    0: {
      opacity: 0,
      transform: [
        {translateX: SCREEN_WIDTH * -1},
      ]
    },
    70: {
      opacity: 0.3
    },
    100: {
      opacity: 1,
      transform: [
        {translateX: 0}
      ]
    }
  })

  async function handleFinish(){
    try {
      await cartRemoveAll()
      navigate("home")
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <Animated.View entering={enteringKeyframeSVG.duration(600)}>
          <MotoSvg />
        </Animated.View>
        <Animated.View entering={enteringKeyframe.delay(600).duration(800).withCallback((finished)=> {
          'worklet';
          if(finished){
            runOnJS(setVisible)(true)
          }
        })}>

          <Text style={styles.title}>Uhu! Pedido confirmado</Text>
          <Text style={styles.subTitle}>Agora é só aguardar que logo o café chegará até você!</Text>
        </Animated.View>
        
        {
        visible && (
          <Animated.View entering={SlideInLeft.duration(300)}>
            <Button 
              title="ir para a home" 
              type="PURPLE"
              onPress={handleFinish}
            />
          </Animated.View>
        )}
      </View>
    </View>
  )
}