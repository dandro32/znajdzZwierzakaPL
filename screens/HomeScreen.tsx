import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useEffect, useRef } from "react";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

const { height } = Dimensions.get("window");

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  const video = useRef<any>(null);

  useEffect(() => {
    video?.current?.playAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={{
          uri: "./../assets/video/intro_ZZ.mp4",
        }}
        useNativeControls
        isLooping
        resizeMode={ResizeMode.STRETCH}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />

      <Text style={styles.title}>Welcome trararar</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
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
