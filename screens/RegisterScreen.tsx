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
  loginContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
    color: Colors.title.defaultTitle,
  },
  noAccount: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
  },
  link: {
    marginTop: 5,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#77b2ed",
  },
});
