import React, { ReactNode } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"

type Coffee = {
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: any;
  id: number;
}


type CardPropsType = {
  image: any
  title: string
  description: string
  price: string
  onPress : () => void
}


export function Card({ image,description,price,title,onPress }:CardPropsType) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerCard}>
      <View style={{ top : -20 ,justifyContent : 'center',alignItems : 'center',width : '30%' }}>
        <Image source={image} alt="" />
      </View>
      <View style={{ width : '70%'}}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 2 }}>
          <Text style={styles.auxPriceText}>R$</Text>
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}