import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

const TYPE_COLOR = {
  PURPLE: THEME.COLORS.PURPLE,
  YELLOW: THEME.COLORS.YELLOW
}

type Props = TouchableOpacityProps & {
  title: string
  type: keyof typeof TYPE_COLOR
  isChecked?: boolean
}

export function Button(
{
  title, 
  type, 
  isChecked = false,
  ...rest
}:Props){
  
  const BG_COLOR = TYPE_COLOR[type]

  return(
    <TouchableOpacity 
      style={[
        styles.container, 
        {
          backgroundColor: BG_COLOR,
          opacity: isChecked ? 1 : 0.5
        }
      ]}
        {...rest}
      >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}