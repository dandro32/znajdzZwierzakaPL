import { StyleSheet, ScrollView, Dimensions } from "react-native";
import AnimalForm from "../components/AnimalForm";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function FoundScreen({
  navigation,
}: RootTabScreenProps<"TabThree">) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Znalazłem zwierzaka</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

        <AnimalForm />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
