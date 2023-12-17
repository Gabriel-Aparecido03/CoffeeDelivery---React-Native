import { Image, Text, TouchableOpacity, View } from "react-native";

import image from '../../../assets/Illustration.png'
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export function Success() {

  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={image} alt="" />
      <Text style={styles.title}>Uhu ! Confirmed</Text>
      <Text style={styles.subtitle}>Now you need to wait your coffees !</Text>
      <TouchableOpacity onPress={()=>{navigate('home' as never)}} style={styles.button}>
        <Text style={styles.buttonText}>Go home</Text>
      </TouchableOpacity>
    </View>
  )
}