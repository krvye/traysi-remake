import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MapView from "react-native-maps";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";

export default function Home() {
  const bottomSheetRef = useRef(null);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  useFonts({ DMSans_700Bold });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={[250]}
        backgroundStyle={{ backgroundColor: "#E4E4E4" }}
      >
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
            <TouchableOpacity style={styles.nextButton}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { height: "100%", width: "100%" },
  bottomSheetContainer: {
    flex: 1,
    gap: 5,
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
