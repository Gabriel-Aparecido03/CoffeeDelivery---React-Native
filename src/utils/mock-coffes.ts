import expressoSvg from '../../assets/coffees/ExpressoCremoso.png'
import expressoAmericano from '../../assets/coffees/Americano.png'
import expressoCremoso from '../../assets/coffees/ExpressoCremoso.png'
import expressoGelado from '../../assets/coffees/CafeGelado.png'
import cafeComLeite from '../../assets/coffees/CafeComLeite.png'
import latte from '../../assets/coffees/Latte.png'
import capuccino from '../../assets/coffees/Capuccino.png'
import macchiato from '../../assets/coffees/Macchiato.png'
import chocolateQuente from '../../assets/coffees/ChocolateQuente.png'
import cubano from '../../assets/coffees/Cubano.png'
import havaino from '../../assets/coffees/Havaino.png'
import arabe from '../../assets/coffees/Arabe.png'
import irlandes from '../../assets/coffees/Irlandes.png'

export const coffees = [
  { 
    name : "Traditional Espresso",
    description : "The traditional coffee made with hot water and ground beans",
    price : 9.90,
    tags : ["Traditional"],
    image : expressoSvg,
    id:1
  },
  { 
    name : "American Espresso",
    description : "Diluted espresso, less intense than the traditional one",
    price : 9.90,
    tags : ["Traditional"],
    image : expressoAmericano,
    id:2
  },
  { 
    name : "Creamy Espresso",
    description : "Traditional espresso with creamy foam",
    price : 9.90,
    tags : ["Traditional"],
    image : expressoCremoso,
    id:3
  },
  { 
    name : "Iced Espresso",
    description : "Drink prepared with espresso and ice cubes",
    price : 9.90,
    tags : ["Traditional"],
    image : expressoGelado,
    id:4
  },
  { 
    name : "Coffee with Milk",
    description : "Half and half of traditional espresso with steamed milk",
    price : 9.90,
    tags : ["Traditional"],
    image : cafeComLeite,
    id:5
  },
  { 
    name : "Latte",
    description : "A shot of espresso with double the amount of milk and creamy foam",
    price : 9.90,
    tags : ["Traditional"],
    image : latte,
    id:6
  },
  { 
    name : "Cappuccino",
    description : "Drink with cinnamon made from equal parts of coffee, milk, and foam",
    price : 9.90,
    tags : ["Sweet"],
    image : capuccino,
    id:7
  },
  { 
    name : "Macchiato",
    description : "Espresso mixed with a little hot milk and foam",
    price : 9.90,
    tags : ["Sweet"],
    image : macchiato,
    id:8
  },
  { 
    name : "Hot Chocolate",
    description : "Drink made with chocolate dissolved in hot milk and coffee",
    price : 9.90,
    tags : ["Sweet"],
    image : chocolateQuente,
    id:9
  },
  { 
    name : "Cuban",
    description : "Iced espresso drink with rum, cream, and mint",
    price : 9.90,
    tags : ["Special"],
    image : cubano,
    id:10
  },
  { 
    name : "Hawaiian",
    description : "Sweetened drink made with coffee and coconut milk",
    price : 9.90,
    tags : ["Special"],
    image : havaino,
    id:11
  },
  { 
    name : "Arabic",
    description : "Drink made with Arabian coffee beans and spices",
    price : 9.90,
    tags : ["Special"],
    image : arabe,
    id:12
  },
  { 
    name : "Irish",
    description : "Drink based on coffee, Irish whiskey, sugar, and whipped cream",
    price : 9.90,
    tags : ["Special"],
    image : irlandes,
    id:13
  }
]
