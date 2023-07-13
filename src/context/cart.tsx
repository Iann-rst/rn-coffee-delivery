import { createContext, ReactNode, useState } from 'react';
import { cartGetAll, cartRemove, cartSave, CoffeeProps } from '../storage/storageCart';

export type CartContextDataProps = {
  coffees: CoffeeProps[]
  saveCoffeeCart: (coffee: CoffeeProps)=> Promise<void>;
  fetchCoffeesCart: () => Promise<CoffeeProps[]>;
  removeCoffeeCart: (coffeeId: string)=> Promise<void>;
  isLoadingCart: boolean
}

type CartContextProviderProps = {
  children: ReactNode
}

export const CartContext = createContext<CartContextDataProps>({} as CartContextDataProps)

export function CartContextProvider({children}:CartContextProviderProps){
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])
  const [isLoadingCart, setIsLoadingCart] = useState(true)

  async function fetchCoffeesCart(){
    try {
      const coffees = await cartGetAll()

      return coffees;
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async function saveCoffeeCart(coffee: CoffeeProps){
    try {

      await cartSave(coffee)

    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async function removeCoffeeCart(coffeeId: string){
    try {
      await cartRemove(coffeeId)
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  // useEffect(()=> {
  //   async function loadCart(){
  //     try {
  //       setIsLoadingCart(true)
  //       const coffees = await fetchCoffeesCart()
  //       setCoffees(coffees)
  //     } catch (error) {
  //       throw error
  //     }finally{
  //       setIsLoadingCart(false)
  //     }
  //   }

  //   loadCart()
  // }, [])

  return(
    <CartContext.Provider
      value={{
        coffees,
        fetchCoffeesCart,
        removeCoffeeCart,
        saveCoffeeCart,
        isLoadingCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}