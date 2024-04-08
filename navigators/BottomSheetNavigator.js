import { createStackNavigator } from "@react-navigation/stack";

import LocationSelection from "../screens/LocationSelection";
import RideSelection from "../screens/RideSelection";

const BottomSheetNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="LocationSelection"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LocationSelection" component={LocationSelection} />
      <Stack.Screen name="RideSelection" component={RideSelection} />
    </Stack.Navigator>
  );
};

export default BottomSheetNavigator;
