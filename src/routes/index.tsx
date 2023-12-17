import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Product } from "../screens/Product";
import { Cart } from "../screens/Cart";
import { Success } from "../screens/Success";

export function Routes() {

  const { Navigator,Screen } = createStackNavigator()

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown : false }}>
        <Screen name="home" component={Home} />
        <Screen name="product" component={Product} />
        <Screen name="cart" component={Cart} />
        <Screen name="success" component={Success} />
      </Navigator>
    </NavigationContainer>
  )
}