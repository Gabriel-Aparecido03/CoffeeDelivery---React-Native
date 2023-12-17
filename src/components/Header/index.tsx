import { ArrowLeft, MapPin, ShoppingCart } from "phosphor-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { theme } from "../../style/theme/default";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCart } from "../../hooks/useCart";

type HeaderPropsType = {
  hasBackButton?: boolean
  backgroundColor: string
}

export function Header({ hasBackButton = false, backgroundColor }: HeaderPropsType) {

  const { navigate } = useNavigation()

  const { items } = useCart()

  const { top } = useSafeAreaInsets()

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor, paddingTop: top }]}>
      {!hasBackButton &&
        <View style={styles.localizationContainer}>
          <MapPin size={20} color={theme.colors.purple.light} />
          <Text style={{ fontFamily: theme.fontFamily.bold , color : theme.colors.white }}> São Paulo, SP</Text>
        </View>
      }
      {
        hasBackButton &&
        <Pressable>
          <ArrowLeft size={20} color={theme.colors.white} />
        </Pressable>
      }
      <Pressable onPress={()=>{ navigate('cart' as never)}} style={styles.cartContainer}>
        {items.length > 0 &&
          <View style={styles.cartIndication}>
            <Text style={{ color: theme.colors.white, fontFamily: theme.fontFamily.normal, fontSize: 12 }}>{ items.length }</Text>
          </View>
        }
        <ShoppingCart weight="fill" size={20} color={items.length === 0 ? theme.colors.yellow.dark : theme.colors.purple.dark} />
      </Pressable>
    </View>
  )
}