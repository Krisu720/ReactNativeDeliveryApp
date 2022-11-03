import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {Provider} from "react-redux";
import { store } from "./store";
import BasketScreen from "./components/BasketScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} 
            options={{presentation: 'modal',headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
     </Provider> 
  );
}
