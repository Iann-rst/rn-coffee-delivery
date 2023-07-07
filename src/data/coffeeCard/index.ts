import { ImageSourcePropType } from 'react-native'

import Irlandes from '../../assets/coffees/irlandes.png'
import Latte from '../../assets/coffees/latte.png'
import Mocaccino from '../../assets/coffees/mochaccino.png'

export const coffeeCard = [
  {
    id: 4,
    tag: 'tradicional',
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa.',
    price: 9.90,
    image: Latte as ImageSourcePropType
  },
  {
    id: 7,
    tag: 'Doce',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma.',
    price: 9.90,
    image: Mocaccino as ImageSourcePropType
  },
  {
    id: 12,
    tag: 'Especial',
    name: 'Irlandês',
    description: 'Bebida a base de café, úisque irlandês, açúcar e chantily.',
    price: 9.90,
    image: Irlandes as ImageSourcePropType
  }
]