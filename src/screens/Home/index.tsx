import React, { useRef, useState } from "react";
import { FlatList, Image, Text, View, ViewToken } from "react-native";

import { MapPin } from "phosphor-react-native";
import Animated, { Extrapolate, SlideInDown, SlideInRight, interpolate, interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { Cart } from "../../components/Cart";
import { Input } from "../../components/Input";

import CoffeeIcon from '../../assets/coffeeBeans.png';
import { CoffeeCard } from "../../components/CoffeeCard";
import { CoffeeList } from "../../components/CoffeeList";
import { coffeeCard } from "../../data/coffeeCard";
import { coffeeList } from "../../data/coffeeList";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

export function Home(){
  const [visibleIndex, setVisibleIndex] = useState<number | null>(0)

  /* Verificar o item que está sendo visível na flatlist */
  const onViewableItemsChanged = (info: {viewableItems: ViewToken[], changed: ViewToken[]})=> {
    if(info.viewableItems.length > 0){
      const visibleItem = info.viewableItems[0]
      if (visibleItem && visibleItem.index !== undefined) {
        setVisibleIndex(visibleItem.index);
      }
    }
  }
  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 70}
  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }])

  /* Pegar o valor do scrollY da ScrollView */
  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event)=>{
      scrollY.value = event.contentOffset.y
    }
  })
  const headerStyles = useAnimatedStyle(()=>{
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 320, 340],
        [1, 0.5, 1],
        Extrapolate.CLAMP
      ),
      backgroundColor: interpolateColor(
        scrollY.value,
        [170, 320],
        [THEME.COLORS.GRAY_100, THEME.COLORS.WHITE],
      ),
    }
  })
  const headerCityStyles = useAnimatedStyle(()=>{
    return {
      color: interpolateColor(
        scrollY.value,
        [0, 320],
        [THEME.COLORS.WHITE, THEME.COLORS.GRAY_200]
      )
    }
  })
  const introStyles = useAnimatedStyle(()=> {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 320, 380],
        [1, 0.5, 0]
      )
    }
  })
  
  return(
    <View style={styles.container}>

      {/** header */}
       <Animated.View style={[styles.header, headerStyles]}>
        <View style={styles.headerLocation}>
          <MapPin size={20} weight='fill' color={THEME.COLORS.PURPLE}/>
          <Animated.Text style={[styles.headerCity, headerCityStyles]}>Barreiras, BA</Animated.Text>
        </View>
        <Cart />
      </Animated.View>
    
      <Animated.ScrollView 
        style={{
          flex: 1,
        }} 
        onScroll={scrollHandler} 
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >

        <Animated.View style={introStyles}>
          <View style={styles.intro}>
            <Text style={styles.title}>Encontre o café perfeito para qualquer hora do dia</Text>
            <Input />
            <Image source={CoffeeIcon} style={styles.image} resizeMode="contain"/>
          </View>

          <Animated.View 
          style={{
            top: -115,
          }}
          entering={SlideInRight.duration(2000)}
          >
            <FlatList 
                contentContainerStyle={{
                  gap: 8,
                  paddingHorizontal: 40, 
                }}
                data={coffeeCard} 
                keyExtractor={(item)=>item.id.toString()}
                viewabilityConfig={viewabilityConfig}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                scrollEventThrottle={16}
                renderItem={({item, index})=> (
                  <CoffeeCard coffee={item} index={index} currentIndex={visibleIndex}/>
                )}
                horizontal 
                showsHorizontalScrollIndicator={false}
              />
          </Animated.View>
        </Animated.View>

        {/* CoffeeList */}
        <Animated.View 
        style={{
          top: -130,
          paddingHorizontal: 32,
          paddingVertical: 16,
          gap: 16
        }}
        entering={SlideInDown.duration(2000)}
        >
          {/* Section Header */}
          <View style={{
            gap: 12
          }}>
            <Text style={{
              fontSize: THEME.SIZES.TITLE_SM,
              fontFamily: THEME.FONTS.TITLE_BOLD,
              color: THEME.COLORS.GRAY_300
            }}>
              Nossos cafés
            </Text>
          </View>

          {/* List */}
          {coffeeList.map((item)=> (
            <View key={item.id}>
              <Text style={{
                color: THEME.COLORS.GRAY_400,
                fontFamily: THEME.FONTS.TITLE_BOLD,
                fontSize: THEME.SIZES.TITLE_XS
                }}>{item.category}</Text>
              {item.coffees.map((coffee)=>(
                <CoffeeList key={coffee.id} data={coffee}/>
              ))}
            </View>
          ))} 
        </Animated.View>

      </Animated.ScrollView>
    </View>
  )
}