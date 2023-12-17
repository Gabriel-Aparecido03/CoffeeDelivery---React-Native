import { Image, Text, TouchableOpacity, View } from "react-native";
import imageTest from '../../../assets/coffees/Americano.png'
import { Trash } from "phosphor-react-native";
import { styles } from "./style";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

type CardCartPropsType = {
  image : any
  size :  string
  price : number
  quantity : number
  name : string
  id : string
}

export function CardCart({ image,price,quantity,size,name,id }:CardCartPropsType) {

  const { updateQuantity, deleteItemAtCart } = useCart()
  const [ stateQuantity , setStateQuantity ] = useState(quantity)

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} alt="" />
      <View style={styles.specsContainer}>
        <View style={styles.priceAndNameContainer}>
          <View style={styles.titleAndSizeContainer}>
            <Text style={styles.titleText}>{ name }</Text>
            <Text style={styles.sizeText}>{size} ml</Text>
          </View>
          <Text style={styles.priceText}>{ price }</Text>
        </View>
        <View style={styles.containerActions}>
          <View style={styles.touchableQuantity}>
            <TouchableOpacity onPress={()=>{
              setStateQuantity(prev => prev -= 1)
              updateQuantity(id,quantity - 1)
            }} ><Text>-</Text></TouchableOpacity>
            <Text>{ stateQuantity }</Text>
            <TouchableOpacity onPress={()=>{
              setStateQuantity(prev => prev += 1)
              updateQuantity(id,quantity + 1)
            }}><Text>+</Text></TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=> { deleteItemAtCart(id) }} style={styles.touchableDelete}>
            <Trash />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}