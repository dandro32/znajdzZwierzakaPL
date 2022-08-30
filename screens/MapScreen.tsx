import { StyleSheet, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { View } from "../components/Themed";

export interface ILocation {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export const INITIAL_ZOOM = 0.2;

export default function MapScreen() {
  const [position, setPosition] = useState<ILocation>({
    latitude: 52.24,
    longitude: 21.02,
    latitudeDelta: INITIAL_ZOOM,
    longitudeDelta: INITIAL_ZOOM,
  });

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      setPosition((prevState) => ({
        ...prevState,
        latitude,
        longitude,
      }));
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={position}
        showsUserLocation
        style={styles.map}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
