import { Pressable, StyleSheet, Text } from "react-native";
import AlertSymbol from "../assets/AlertSymbol.svg";
import {
  useFonts,
  DMSans_700Bold,
  DMSans_500Medium,
} from "@expo-google-fonts/dm-sans";

export default function SafetyAlerts({ navigation }) {
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
        navigation.navigate("Home");
      }}
    >
      <AlertSymbol width={200} height={230} />
      <Text style={styles.label}>Safety Alerts</Text>
      <Text style={styles.message}>
        Your safety, our priority. Travel confidently with us as our advanced
        safety alerts keep you informed about your surroundings in every
        location we go the extra mile to ensure your peace of mind offering you
        a secure and comfortable tricycle ride wherever you go.
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
