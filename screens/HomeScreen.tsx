import { StyleSheet, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { useAssets } from "expo-asset";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  const [assets, error] = useAssets([require("../assets/video/intro_ZZ.mp4")]);
  const goToRoot = () => {
    navigation.replace("Root");
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
        <Text style={styles.title}>Witaj w aplikacji Znajdź Zwierzaka</Text>
        <TouchableOpacity onPress={goToRoot} style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
