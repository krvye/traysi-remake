import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import TraysiLogo from "../assets/TraysiLogo.svg";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  DMSans_700Bold,
  DMSans_400Regular,
  useFonts,
} from "@expo-google-fonts/dm-sans";
import { useState } from "react";

const RideSelection = () => {
  const [toggleColor, setToggleColor] = useState("regular");

  useFonts({ DMSans_700Bold, DMSans_400Regular });

  const handleRegularPress = () => {
    setToggleColor("regular");
  };

  const handleSpecialPress = () => {
    setToggleColor("special");
  };

  return (
    <BottomSheetView style={styles.bottomSheetContainer}>
      <Pressable
        style={[
          styles.optionContainer,
          {
            backgroundColor: toggleColor === "regular" ? "#A1D2E1" : "#E4E4E4",
          },
        ]}
        onPress={handleRegularPress}
      >
        <TraysiLogo width={54} height={54} />
        <Text style={styles.optionLabel}>Regular Trip</Text>
        <Feather name="info" size={16} color="black" />
        <Text style={styles.price}>₱ 15.00</Text>
        <AntDesign name="edit" size={20} color="black" />
      </Pressable>
      <Pressable
        style={[
          styles.optionContainer,
          {
            backgroundColor: toggleColor === "special" ? "#A1D2E1" : "#E4E4E4",
          },
        ]}
        onPress={handleSpecialPress}
      >
        <TraysiLogo width={54} height={54} />
        <Text style={styles.optionLabel}>Special Trip</Text>
        <Feather name="info" size={16} color="black" />
        <Text style={styles.price}>₱ 30.00</Text>
        <AntDesign name="edit" size={20} color="black" />
      </Pressable>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton}>
          <Ionicons name="navigate-circle-outline" size={24} color="white" />
          <Text style={styles.nextButtonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetView>
  );
};

export default RideSelection;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: "#E4E4E4",
  },
  //  Ride Options Styles
  optionContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  optionLabel: {
    fontFamily: "DMSans_700Bold",
    fontSize: 18,
    paddingLeft: "5%",
    paddingRight: "2%",
  },
  price: {
    fontFamily: "DMSans_400Regular",
    fontSize: 14,
    paddingLeft: "16%",
    paddingRight: "5%",
  },

  //   Next Button Styles
  buttonContainer: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#5FC0DE",
    width: "80%",
    height: "60%",
    borderRadius: 30,
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "DMSans_700Bold",
  },
});
