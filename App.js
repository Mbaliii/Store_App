import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtomTabNavigation from "./navigation/BottomTabNavigation";
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart, ProductDetails } from './screens';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Button Navigation' component={ButtomTabNavigation}
          options={{ headerShown: false }} />

        <Stack.Screen name="Cart" component={Cart}
          options={{ headerShown: false }} />


        <Stack.Screen name="ProductDetails" component={ProductDetails}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
  }
});
