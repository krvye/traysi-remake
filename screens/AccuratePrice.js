import { Pressable, StyleSheet, Text } from "react-native";
import PriceSymbol from "../assets/PriceSymbol.svg";
import {
  useFonts,
  DMSans_700Bold,
  DMSans_500Medium,
} from "@expo-google-fonts/dm-sans";

export default function AccuratePrice({ navigation }) {
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
        navigation.navigate("AccurateLocation");
      }}
    >
      <PriceSymbol width={200} height={230} />
      <Text style={styles.label}>Accurate Price</Text>
      <Text style={styles.message}>
        Hassle-free tricycle rides with us! our commitment to accurate and
        transparent pricing ensures you'll always know the cost before you
        travel. No surprises just fair fares ride confidently.
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
