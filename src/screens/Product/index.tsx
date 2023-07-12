import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Coffee } from "../../components/Coffee";
import { Counter } from "../../components/Counter";
import { Loading } from "../../components/Loading";
import { Options } from "../../components/Options";
import { coffeeList } from "../../data/coffeeList";

interface ProductParams {
  productId: number
}

type ProductProps = {
  id: number;
  type: number;
  name: string;
  description: string;
  price: number;
}

const TYPE_COFFEE = ['tradicional', 'doce', 'especial']


export function Product(){
  const [isLoading, setIsLoading] = useState(true);
  const [coffee, setCoffee] = useState({} as ProductProps)
  const label = TYPE_COFFEE[coffee.type - 1]

  const [options, setOptions] = useState<'SMALL' | 'MEDIUM' | 'BIG' | null>(null)
  const [count, setCount] = useState(1)

  const {params} = useRoute()
  const {productId} = params as ProductParams

  function handleIncrement(){
    setCount(prevState => prevState + 1)
  }

  function handleDecrement(){
    setCount(prevState => prevState - 1)
  }

  useEffect(()=> {
   setIsLoading(true)
    const response = coffeeList.reduce((accumulator, currentValue)=> {
      const coffee = currentValue.coffees.find(coffee=>coffee.id===productId)
      if(coffee){
        accumulator = coffee;
      }
      return accumulator
    }, {} as ProductProps)

   setCoffee(response)
   setIsLoading(false)
   
  }, [productId])
  
  return(
    <>
    {isLoading ? (
    <Loading />
    ) : (
      <View style={styles.container}>
      <Header />
        <View style={styles.content}>
          <View style={styles.info}>
            <View style={styles.main}>
              <View style={styles.title}>
                <Tag label={label}/>
                <Text style={styles.name}>
                  {coffee.name}
                </Text>
              </View>
              <Text style={{
                color: THEME.COLORS.YELLOW,
                fontSize: THEME.SIZES.TEXT_SM,
                fontFamily: THEME.FONTS.REGULAR,
                }}>R${" "}
              <Text style={{
                fontSize: THEME.SIZES.TITLE_XL,
                fontFamily: THEME.FONTS.TITLE_BOLD
              }}>
                {coffee.price.toFixed(2)}
                </Text>
            </Text>
            </View>
            <Text style={styles.description}>
             {coffee.description}
            </Text>
          </View>
          
          <Coffee />
        </View>

        <View style={styles.footer}>

          <View style={styles.selection}>
            <Text style={{
              marginTop: 10,
              color:THEME.COLORS.GRAY_400,
              fontFamily: THEME.FONTS.REGULAR,
              fontSize: THEME.SIZES.TEXT_SM
              }}>
                Selecione o tamanho:
            </Text>

            <View style={styles.options}>
              <Options text="114ml" onPress={()=>setOptions('SMALL')} isChecked={options==='SMALL'}/>
              <Options text="140ml" onPress={()=>setOptions('MEDIUM')} isChecked={options==='MEDIUM'}/>
              <Options text="227ml" onPress={()=>setOptions('BIG')} isChecked={options==='BIG'}/>
            </View>
          </View>

          <View style={styles.addToCart}>
            <Counter 
              decrement={handleDecrement} 
              increment={handleIncrement}
              count={count}
            />
            <Button 
              title="adicionar" 
              type="PURPLE"
              disabled={options===null}
              isChecked={options!==null}
            />
          </View>
        </View>
    </View>
    )}
    </>
  )
} 