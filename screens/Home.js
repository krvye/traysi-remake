import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import BottomSheetNavigator from "../navigators/BottomSheetNavigator";
import { useCallback, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

export default function Home() {
  const bottomSheetRef = useRef(null);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={[250]}
        backgroundStyle={{ backgroundColor: "#E4E4E4" }}
      >
        <BottomSheetNavigator />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { height: "100%", width: "100%" },
});
