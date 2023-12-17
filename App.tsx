import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { useFonts as useFontsBaloo, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import { useFonts as useFontsRoboto, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Routes } from './src/routes';
import { CartContextProvider } from './src/context/CartContext';

export default function App() {

  const [isLoadedBaloo] = useFontsBaloo({ Baloo2_700Bold })
  const [isLoaddedRoboto] = useFontsRoboto({ Roboto_400Regular, Roboto_700Bold })

  if (!isLoadedBaloo || !isLoaddedRoboto) return <View></View>

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor='transparent' translucent />
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </View>
  );
}