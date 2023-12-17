import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { ArrowLeft, Trash } from "phosphor-react-native";
import { theme } from "../../style/theme/default";
import { CardCart } from "../../components/CardCart";
import { useCart } from "../../hooks/useCart";
import Animated from "react-native-reanimated";
import { Swipeable } from "react-native-gesture-handler";
import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { EmptyCart } from "../../components/EmptyCart";

export function Cart() {
  const swipeableRefs = useRef<Swipeable[]>([])

  const { items, handleBuy, deleteItemAtCart, updateQuantity } = useCart()
  const { navigate } = useNavigation()

  const totalPrice = () => {
    let totalPriceTemp = 0;
    items.map( item => totalPriceTemp += item.totalPrice )
    return totalPriceTemp
  }

  function handleBuyItems() {
    handleBuy()
    navigate('home')
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.gray[900], position: 'relative' }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigate('home' as never)}}>
          <ArrowLeft size={32} />
        </TouchableOpacity>
        <Text style={styles.containerTitleHeader}>Cart</Text>
      </View>
      <Animated.FlatList
        data={items}
        keyExtractor={({ id }) => id}
        ListEmptyComponent={()=> <EmptyCart />}
        renderItem={({ item: { id, image, name, quantity, size, totalPrice } }) =>
          <Animated.View>
            <Swipeable
              leftThreshold={10}
              overshootLeft={false}
              ref={(ref)=>{
                if(ref) {
                  swipeableRefs.current.push(ref)
                }
              }}
              renderLeftActions={()=>(
                <TouchableOpacity onPress={()=>{ deleteItemAtCart(id) }} style={styles.swipeableRemove}>
                  <Trash size={32} color={theme.colors.gray[100]} />
                </TouchableOpacity>
              )}
            >
              <CardCart
                image={image}
                name={name}
                price={totalPrice}
                quantity={quantity}
                size={size}
                id={id}
              />
            </Swipeable>
          </Animated.View>
        }
      />
      <View style={styles.containerActionsButtonFooter}>
        <View style={styles.containerActionsButtonFooterTotalPrice}>
          <Text style={styles.totalText} >Total Price</Text>
          <Text style={styles.totalPriceText}>R$ { totalPrice() }</Text>
        </View>
        <TouchableOpacity onPress={handleBuyItems} style={styles.buttonHandleBuy}>
          <Text style={styles.buttonHandleBuyText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}