import { createStackNavigator } from "@react-navigation/stack";

import AccuratePrice from "../screens/AccuratePrice";
import AccurateLocation from "../screens/AccurateLocation";
import SafetyAlerts from "../screens/SafetyAlerts";
import Home from "../screens/Home";

export default function RootNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccuratePrice" component={AccuratePrice} />
      <Stack.Screen name="AccurateLocation" component={AccurateLocation} />
      <Stack.Screen name="SafetyAlerts" component={SafetyAlerts} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
