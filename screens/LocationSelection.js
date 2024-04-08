import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import { SimpleLineIcons } from "@expo/vector-icons";

import { DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";

const LocationSelection = ({ navigation }) => {
  useFonts({ DMSans_700Bold });

  return (
    <BottomSheetView style={styles.bottomSheetContainer}>
      <TextInput style={styles.locationInput} placeholder="Pickup" />
      <SimpleLineIcons
        style={styles.locationIconBlue}
        name="location-pin"
        size={24}
        color="#5FC0DE"
      />
      <View style={styles.dot}></View>
      <View style={styles.dot}></View>
      <TextInput style={styles.locationInput} placeholder="Drop-off" />
      <SimpleLineIcons
        style={styles.locationIconRed}
        name="location-pin"
        size={24}
        color="#DE5F5F"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("RideSelection")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetView>
  );
};

export default LocationSelection;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    gap: 5,
    backgroundColor: "#E4E4E4",
  },
  locationInput: {
    backgroundColor: "#ABABAB",
    opacity: 0.5,
    borderRadius: 30,
    width: "80%",
    height: "20%",
    alignSelf: "center",
    paddingLeft: 40,
    fontWeight: "bold",
  },
  dot: {
    backgroundColor: "#ABABAB",
    opacity: 0.5,
    borderRadius: 200,
    height: 13,
    width: 13,
    marginLeft: "15%",
  },
  locationIconBlue: {
    position: "absolute",
    left: "12%",
    top: "4%",
  },
  locationIconRed: {
    position: "absolute",
    left: "12%",
    top: "43%",
  },
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
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "DMSans_700Bold",
  },
});
