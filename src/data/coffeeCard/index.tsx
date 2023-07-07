import { ImageSourcePropType } from 'react-native'
import irlandesIcon from '../../assets/coffees/irlandes.png'
import latteIcon from '../../assets/coffees/latte.png'
import mocaccinoIcon from '../../assets/coffees/mochaccino.png'

export const coffeeCard = [
  {
    id: 1,
    tag: 'tradicional',
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa.',
    price: 9.90,
    image: latteIcon as ImageSourcePropType
  },
  {
    id: 2,
    tag: 'Doce',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma.',
    price: 9.90,
    image: mocaccinoIcon as ImageSourcePropType
  },
  {
    id: 3,
    tag: 'Especial',
    name: 'Irlandês',
    description: 'Bebida a base de café, úisque irlandês, açúcar e chantily.',
    price: 9.90,
    image: irlandesIcon as ImageSourcePropType
  }
]