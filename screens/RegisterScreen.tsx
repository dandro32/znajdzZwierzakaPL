import { StyleSheet, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { useAssets } from "expo-asset";
import LoginForm from "../components/LoginForm";
import HorizontalRule from "../components/HorizontalRule";
import RegisterForm from "../components/RegisterForm";
import Colors from "../constants/Colors";

export default function RegisterScreen({
  navigation,
}: RootStackScreenProps<"Register">) {
  const goToTabs = () => {
    navigation.replace("Tabs");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsWrapper}>
        <Text style={styles.title}>Załóz konto</Text>
        <RegisterForm goToTabs={goToTabs} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  buttonsWrapper: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.title,
  },
});
