import { Image, Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";

import { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { coffeeCard } from "../../data/coffeeCard";

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

type Props = PressableProps & {
  index: number
  currentIndex: number | null
  coffee: typeof coffeeCard[0]
}

export function CoffeeCard({index, currentIndex, coffee, ...rest}: Props){
  const scale = useSharedValue(1)

  const animatedContainerStyle = useAnimatedStyle(()=>{
    return {
      transform: [
        {
          scale: scale.value
        }
      ]
    }
  })

  useEffect(()=>{
   scale.value = withSpring(index===currentIndex ? 1 : 0.8)
  }, [currentIndex])

  return(
    <PressableAnimated 
      style={[styles.container, animatedContainerStyle]}
      {...rest}
    >
      <Image source={coffee.image} style={styles.image} resizeMode="cover"/>

      <View style={styles.tag}>
        <Text style={styles.tagText}>{coffee.tag}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{coffee.name}</Text>
        <Text style={styles.description}>{coffee.description}</Text>
      </View>

      <Text style={styles.price}>R$ {coffee.price}</Text>
    </PressableAnimated>
  )
}