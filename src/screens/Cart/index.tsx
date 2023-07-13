import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";


import { Loading } from "../../components/Loading";

import { useCart } from "../../hooks/useCart";
import { CoffeeProps } from "../../storage/storageCart";

import Animated, { Layout, SlideInRight, SlideOutRight } from "react-native-reanimated";
import { Button } from "../../components/Button";
import { CoffeeCartCard } from "../../components/CoffeeCartCard";
import { EmptyCart } from "../../components/EmptyCart";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

export function Cart(){
  const {fetchCoffeesCart, removeCoffeeCart} = useCart()
  const {navigate} = useNavigation<AppNavigatorRoutesProps>()

  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  const amount = useMemo(() => {
    return coffees.reduce((accumulator, item) => {
      return accumulator + (item.price * item.qtd);
    }, 0);
  }, [coffees]);

  async function fetchData(){
    try {
      const data = await fetchCoffeesCart() 
      setCoffees(data)
    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false)
    }
  }

  async function handleRemove(id: string){
    await removeCoffeeCart(id)
    await fetchData()   
  }

  useEffect(()=>{
    fetchData()
  }, [])


  if(isLoading){
    return <Loading />
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigate("home")}>
          <ArrowLeft size={24} color={THEME.COLORS.GRAY_100}/>
        </TouchableOpacity>

        <Text style={styles.title}>Carrinho</Text>
        <View />
      </View>
      
     {
      coffees.length===0 ? (
        <EmptyCart />
      ): (
        <>
          <ScrollView
            style={{flex: 1}}
            contentContainerStyle={{flexGrow: 1, paddingBottom: 120}}
            showsVerticalScrollIndicator={false}
          >
            {
              coffees.map((coffee, index)=> (
                <Animated.View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: THEME.COLORS.GRAY_700
                  }}
                  key={coffee.id} 
                  entering={SlideInRight.delay(index*100)} 
                  exiting={SlideOutRight} 
                  layout={Layout.springify()}
                >
                  <CoffeeCartCard 
                    coffee={coffee} 
                    remove={()=>handleRemove(coffee.id)}
                  />
                </Animated.View>
             ))
            }
          </ScrollView>
          <View style={styles.footer}>
            <View style={{
              flexDirection: 'row', 
              alignItems: 'center', 
              justifyContent: 'space-between'
            }}>
              <Text style={styles.amount}>
                Valor total
              </Text>
            
              <Text style={styles.price}>
                R$ {amount.toFixed(2)}
              </Text>
            </View>
            <Button 
              title="Confirmar pedido" 
              type="YELLOW" 
              activeOpacity={0.6}
            />
          </View>
        </>
      )
     }
    </View>
  )
}