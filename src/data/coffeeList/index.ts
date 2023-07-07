import { ImageSourcePropType } from 'react-native';

// Tradicionais
import ExpressoAmericano from '../../assets/coffees/expresso-americano.png';
import ExpressoCremoso from '../../assets/coffees/expresso-cremoso.png';
import ExpressoGelado from '../../assets/coffees/expresso-gelado.png';
import ExpressoTradicional from '../../assets/coffees/expresso.png';
import Latte from '../../assets/coffees/latte.png';

// Doces
import Capuccino from '../../assets/coffees/capuccino.png';
import ChocolateQuente from '../../assets/coffees/chocolate-quente.png';
import Mocaccino from '../../assets/coffees/mochaccino.png';

// Especiais
import Arabe from '../../assets/coffees/arabe.png';
import Cubano from '../../assets/coffees/cubano.png';
import Havaiano from '../../assets/coffees/havaiano.png';
import Irlandes from '../../assets/coffees/irlandes.png';


export const coffeeList = [
  {
    id: '1',
    category: 'Tradicionais',
    coffees: [
      {
        id: 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos.',
        price: 9.90,
        image: ExpressoTradicional as ImageSourcePropType
      },
      {
        id: 2,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional.',
        price: 9.90,
        image: ExpressoAmericano as ImageSourcePropType
      },
      {
        id: 3,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa.',
        price: 9.90,
        image: ExpressoCremoso as ImageSourcePropType
      },
      {
        id: 4,
        name: 'Latte',
        description: 'Café expresso com o dobro de leite e espuma cremosa.',
        price: 9.90,
        image: Latte as ImageSourcePropType
      },
      {
        id: 5,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo.',
        price: 9.90,
        image: ExpressoGelado as ImageSourcePropType
      },
    ]
  },

  {
    id: '2',
    category: 'Doces',
    coffees: [
      {
        id: 6,
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses de café, leite e espuma.',
        price: 9.90,
        image: Capuccino as ImageSourcePropType
      },
      {
          id: 7,
          name: 'Mocaccino',
          description: 'Café expresso com calda de chocolate, pouco leite e espuma.',
          price: 9.90,
          image: Mocaccino as ImageSourcePropType
      },
      {
        id: 8,
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café.',
        price: 9.90,
        image: ChocolateQuente as ImageSourcePropType
      },
    ]
  },

  {
    id: '3',
    category: 'Especiais',
    coffees: [
      {
        id: 9,
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã.',
        price: 9.90,
        image: Cubano as ImageSourcePropType
      },
      {
        id: 10,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco.',
        price: 9.90,
        image: Havaiano as ImageSourcePropType
      },
      {
        id: 11,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias.',
        price: 9.90,
        image: Arabe as ImageSourcePropType
      },
      {
        id: 12,
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly.',
        price: 9.90,
        image: Irlandes as ImageSourcePropType
      },
    ]
  }
]