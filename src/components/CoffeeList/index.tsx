import { Image, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

type CoffeeProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: ImageSourcePropType;
}

type Props = TouchableOpacityProps & {
  data: CoffeeProps
}

export function CoffeeList({data, ...rest}:Props){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={styles.image} source={data.image} resizeMode="contain"/>

      <View style={{flex: 1}}>
        <View style={styles.content}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </View>
        <Text style={{
          color: THEME.COLORS.YELLOW_DARK,
          fontFamily: THEME.FONTS.REGULAR,
          fontSize: THEME.SIZES.TEXT_SM
        }}>R${" "}
          <Text style={styles.price}>{data.price.toFixed(2)}</Text>
        </Text>
      </View>

    </TouchableOpacity>
  )
}