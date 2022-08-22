import { StyleSheet, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { useAssets } from "expo-asset";
import LoginForm from "../components/LoginForm";
import HorizontalRule from "../components/HorizontalRule";
import Colors from "../constants/Colors";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  const [assets, error] = useAssets([require("../assets/video/intro_ZZ.mp4")]);
  const goToTabs = () => {
    navigation.replace("Tabs");
  };
  const loginAsGuest = () => {
    navigation.replace("Tabs");
  };
  const register = () => {
    navigation.replace("Register");
  };

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: assets ? assets[0]?.uri : "",
        }}
        style={styles.backgroundVideo}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        volume={1}
        resizeMode={ResizeMode.COVER}
      />
      <View style={styles.buttonsWrapper}>
        <Text style={styles.title}>Znajdź Zwierzaka</Text>
        <LoginForm goToTabs={goToTabs} />
        <Text style={styles.noAccount}>Nie masz konta?</Text>
        <TouchableOpacity onPress={register} style={styles.link}>
          <Text style={styles.linkText}>Zarejestruj się</Text>
        </TouchableOpacity>
        <HorizontalRule text="albo" />

        <TouchableOpacity onPress={loginAsGuest} style={styles.link}>
          <Text style={styles.linkText}>Uzyj jako gość</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
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
    color: Colors.text,
  },
  noAccount: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
    color: Colors.text,
  },
  link: {
    marginTop: 5,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.link,
  },
});
