import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert, ImageSourcePropType } from "react-native"

const CART_COLLECTION = '@coffee_delivery:cart'

export type CoffeeProps = {
  id: string
  productId: number
  name: string
  price: number
  size: "SMALL" | "MEDIUM" | "BIG"
  image: ImageSourcePropType
  qtd: number
}


export async function cartSave(newCoffee: CoffeeProps){
  try {
    const response = await cartGetAll();
    const storedCoffee = response ? response : [];

    const existingProduct = storedCoffee.find(
      (coffee)=>coffee.productId===newCoffee.productId && coffee.size === newCoffee.size
    )

    if(existingProduct){
      existingProduct.qtd += newCoffee.qtd
      await AsyncStorage.setItem(CART_COLLECTION, JSON.stringify(storedCoffee))
    }else{
      const storage = JSON.stringify([...storedCoffee, newCoffee])
      await AsyncStorage.setItem(CART_COLLECTION, storage)
    }
     
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export async function cartGetAll(){
  try {
    const storage = await AsyncStorage.getItem(CART_COLLECTION)
    const cart: CoffeeProps[] = storage ? JSON.parse(storage) : []

    return cart
  } catch (error) {
    Alert.alert('Error', 'Não foi possível obter os itens do carrinho.')
    return [];
  }
}

export async function cartRemove(productId: string){
  try {
    const storage = await cartGetAll();

    const filtered = storage.filter(coffee => coffee.id !== productId)
    const coffees = JSON.stringify(filtered);

    await AsyncStorage.setItem(CART_COLLECTION, coffees)
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export async function cartRemoveAll(){
  try {
    await AsyncStorage.removeItem(CART_COLLECTION)
    console.log("REMOVEU TODOS")
  } catch (error) {
    console.log(error)
  }
}