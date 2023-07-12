import { useEffect } from "react";
import { Pressable, PressableProps } from "react-native";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

type Props = PressableProps & {
  isChecked: boolean
  text: string
}

export function Options({text, isChecked = false, ...rest}: Props){

  const BG_COLOR = THEME.COLORS.GRAY_700
  const PURPLE_COLOR = THEME.COLORS.PURPLE
  const TEXT_GRAY_COLOR = THEME.COLORS.GRAY_300

  const scale = useSharedValue(1)
  const checked = useSharedValue(0)

  const animatedContainerStyle = useAnimatedStyle(()=>{
    return {
      backgroundColor: interpolateColor(
        checked.value,
        [0, 1],
        [BG_COLOR, 'transparent']
      ),
      borderColor: interpolateColor(
        checked.value,
        [0, 1],
        [BG_COLOR, PURPLE_COLOR]
      )
    }
  })

  const animatedTextStyle = useAnimatedStyle(()=>{
    return {
      color: interpolateColor(
        checked.value,
        [0, 1],
        [TEXT_GRAY_COLOR, PURPLE_COLOR]
      )
    }
  })

  useEffect(()=> {
    checked.value = withTiming(isChecked ? 1 : 0)
  }, [isChecked])

  return(
    <PressableAnimated style={[styles.container, animatedContainerStyle]} {...rest}>
      <Animated.Text style={[styles.title, animatedTextStyle]}>{text}</Animated.Text>
    </PressableAnimated>
  )
}