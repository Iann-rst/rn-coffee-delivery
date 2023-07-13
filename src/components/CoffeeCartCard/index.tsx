import { Trash } from "phosphor-react-native";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { CoffeeProps } from "../../storage/storageCart";
import { THEME } from "../../styles/theme";
import { Counter } from "../Counter";
import { styles } from "./styles";

const TYPE_SIZE = {
  SMALL: '114',
  MEDIUM: '140',
  BIG: '227'
}

type Props = {
  coffee: CoffeeProps
  remove: ()=>void;
}

export function CoffeeCartCard({coffee, remove}:Props){
  const size = TYPE_SIZE[coffee.size]
  const price = coffee.price.toFixed(2).toString().replace('.', ',')

  const [counter, setCounter] = useState(coffee.qtd)

  // function handleIncrement(){
  //   setCounter(prevState => prevState + 1)
  // }

  // function handleDecrement(){
  //   setCounter(prevState => prevState - 1)
  // }

  return(
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={coffee.image} 
        resizeMode="center"
      />
      <View style={{flex: 1, gap: 8}}>
        <View style={styles.about}>
          <View style={{gap: 2}}>
            <Text style={styles.title}>{coffee.name}</Text>
            <Text style={styles.size}>{size}ml</Text>
          </View>
            <Text style={styles.price}>R$ {price}</Text>
        </View>
        <View style={styles.actions}>
          <Counter 
            count={counter} 
            decrement={()=>{}} 
            increment={()=>{}}
            variant="secondary"
            />
            <Pressable style={styles.button} onPress={remove}>
              <Trash size={20} color={THEME.COLORS.PURPLE}/>
            </Pressable>
        </View>
      </View>
    </View>
  )
}