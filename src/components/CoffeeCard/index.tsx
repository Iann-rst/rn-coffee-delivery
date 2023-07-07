import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import { useEffect } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { coffeeCard } from "../../data/coffeeCard";

type Props = {
  index: number
  currentIndex: number | null
  coffee: typeof coffeeCard[0]
}

export function CoffeeCard({index, currentIndex, coffee}: Props){
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
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <Image source={coffee.image} style={styles.image} resizeMode="cover"/>

      <View style={styles.tag}>
        <Text style={styles.tagText}>{coffee.tag}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{coffee.name}</Text>
        <Text style={styles.description}>{coffee.description}</Text>
      </View>

      <Text style={styles.price}>R$ {coffee.price}</Text>
    </Animated.View>
  )
}