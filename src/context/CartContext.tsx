import { ReactNode, createContext, useEffect, useState } from "react";

type ItemAtCartType = {
  name : string,
  tags : string[],
  image : any,
  size : string,
  priceUnity : number,
  totalPrice : number,
  id : string,
  quantity : number
}


interface CartContextType {
  addItemAtCart : (item : ItemAtCartType) => void,
  deleteItemAtCart : (id : string) => void,
  updateQuantity : (id : string, quantity : number ) => void,
  handleBuy : () => void,
  items : ItemAtCartType[],
  totalPrice : number
}

interface CartContextProviderType {
  children : ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children } : CartContextProviderType) {

  const [ items,setItems ] = useState<ItemAtCartType[]>([])
  const [ totalPrice ,setTotalPrice ] = useState(0)

  function addItemAtCart(item : ItemAtCartType) {
    console.log(item)
    const itemIsExists = items.find(i => i.id === item.id )
    if(!itemIsExists) {
      setItems(prev => [ item , ...prev ])
      calculteTotalPrice()
    }
  }

  function deleteItemAtCart(id : string ) {
    setItems(prev => prev.filter( item => item.id !== id ))
    calculteTotalPrice()
  }

  function updateQuantity(id : string ,quantity : number ) {
    const itemIsExists = items.findIndex(i => i.id === id )
    if(itemIsExists) {
      const updated = items
      updated[itemIsExists].quantity = quantity
      updated[itemIsExists].totalPrice = quantity * updated[itemIsExists].priceUnity
      setItems([...updated])
      calculteTotalPrice()
    }
  }

  function handleBuy() {
    setItems([])
    setTotalPrice(0)
  }

  function calculteTotalPrice() {
    let totalPriceTemp = 0;

    setTotalPrice(0)
    items.map( item => totalPriceTemp += item.totalPrice )
    setTotalPrice(totalPriceTemp)
  }

  return (
    <CartContext.Provider value={{ addItemAtCart,deleteItemAtCart,handleBuy,items,totalPrice,updateQuantity }}>
      { children }
    </CartContext.Provider>
  )
}