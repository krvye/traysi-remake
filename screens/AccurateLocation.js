import { Pressable, StyleSheet, Text } from "react-native";
import LocationSymbol from "../assets/LocationSymbol.svg";
import {
  useFonts,
  DMSans_700Bold,
  DMSans_500Medium,
} from "@expo-google-fonts/dm-sans";

export default function AccurateLocation({ navigation }) {
  const [fontsLoaded, fontError] = useFonts({
    DMSans_700Bold,
    DMSans_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("SafetyAlerts");
      }}
    >
      <LocationSymbol width={200} height={230} />
      <Text style={styles.label}>Accurate Location</Text>
      <Text style={styles.message}>
        Your journey, your peace of mind for hassle-free rides and fair prices
        that keep your wallet happy. We're not just a tricycle service, we're
        your reliable partner for convenience and value, delivering accuracy in
        both location and pricing.
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 70,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 30,
    fontFamily: "DMSans_700Bold",
  },
  message: {
    fontSize: 16,
    fontFamily: "DMSans_500Medium",
    textAlign: "center",
    marginHorizontal: 60,
  },
});
