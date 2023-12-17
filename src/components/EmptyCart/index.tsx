import { ShoppingCart } from "phosphor-react-native";
import { TouchableOpacity, View, Text } from "react-native";
import { theme } from "../../style/theme/default";
import { styles } from "./style";

export function EmptyCart() {
  return (
    <View style={styles.container}>
      <ShoppingCart weight="fill" size={20} color={theme.colors.gray[400]} />
      <Text style={styles.text}>Your cart is empty !</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go home !</Text>
      </TouchableOpacity>
    </View>

  )
}