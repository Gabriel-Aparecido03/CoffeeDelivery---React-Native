import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { theme } from "../../style/theme/default";
import { styles } from "./style";

import image from '../../../assets/Coffee.png'
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useCart } from "../../hooks/useCart";

type SizeType = '114' | '140' | '227'

export function Product() {

  const { params } = useRoute<any>()
  const { height } = useSafeAreaFrame()
  const { navigate } = useNavigation()
  const { addItemAtCart } = useCart()

  const [size, setSize] = useState<SizeType>('114')
  const [quantity, setQuantity] = useState(1)

  if (!params) return null
 
  function handleAddToCart() {
    addItemAtCart({ id : params.id , image : params.image , name : params.name  , priceUnity : params.price , quantity , size , tags : params.tags , totalPrice : params.price * quantity  })
  }

  return (
    <ScrollView contentContainerStyle={{ justifyContent: 'space-between', height: '100%' }} style={{ flex: 1 }}>
      <Header backgroundColor={theme.colors.gray[100]} />
      <View style={[styles.containerCoffee, { height: height * 0.3 }]}>
        <View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{params.tags[0]}</Text>
          </View>
          <View style={styles.containerTitleAndPrice}>
            <Text style={styles.titleText}>{params.name}</Text>
            <Text style={styles.auxPriceText}>R$<Text style={styles.priceText}>{ params.price }</Text></Text>
          </View>
          <Text style={styles.descriptionText}>{params.description}</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <View style={{ position: 'absolute', height: '50%', top: 0, width: '100%', backgroundColor: theme.colors.gray[100] }} />
        <Image source={image} alt="" />
      </View>
      <View style={styles.specsContainer}>
        <View>
          <Text style={{ color: theme.colors.gray[400], fontSize: 16, marginBottom: 12 }}>Choose the size :</Text>
          <View style={styles.sizeOptions}>
            <Pressable onPress={() => { setSize('114') }} style={size === '114' ? styles.pressableSelected : styles.pressableUnselected}><Text style={size === '114' ? styles.pressableTextSelected : styles.pressableTextUnselected}>114ml</Text></Pressable>
            <Pressable onPress={() => { setSize('140') }} style={size === '140' ? styles.pressableSelected : styles.pressableUnselected}><Text style={size === '140' ? styles.pressableTextSelected : styles.pressableTextUnselected}>140ml</Text></Pressable>
            <Pressable onPress={() => { setSize('227') }} style={size === '227' ? styles.pressableSelected : styles.pressableUnselected}><Text style={size === '227' ? styles.pressableTextSelected : styles.pressableTextUnselected}>227ml</Text></Pressable>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <View style={styles.touchableQuantity}>
            { 
              quantity <= 1 ? 
              <View/> : 
              <TouchableOpacity onPress={()=>{ setQuantity(prev => prev -= 1)}}><Text style={{ fontSize : 40 ,color : theme.colors.purple.medium }}>-</Text></TouchableOpacity>
            }
            <Text style={{ fontSize: 20, color: theme.colors.gray[100], alignItems: 'baseline', justifyContent: 'flex-end' }}>{quantity}</Text>
            <TouchableOpacity onPress={() => { setQuantity(prev => prev += 1) }}><Text style={{ fontSize: 40, color: theme.colors.purple.medium }}>+</Text></TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleAddToCart} style={styles.buttonAddToCart}>
            <Text style={styles.buttonAddToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}