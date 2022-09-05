import { FC, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
  Text,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Colors from "../constants/Colors";
import Dropdown from "./Dropdown";
import HorizontalRule from "./HorizontalRule";

const mockedOptions = [
  {
    label: "label1",
    value: "value1",
  },
  {
    label: "label2",
    value: "value2",
  },
  {
    label: "label3",
    value: "value4",
  },
];

const AnimalForm: FC = () => {
  const [title, setTitle] = useState("");
  const [additional, setAdditional] = useState("");
  const [dropdown, setDropdown] = useState("");

  const handleDropdown = (name: string, value: string) => {
    console.log(name, value);
    setDropdown(value);
  };

  const onSubmit = () => {
    console.log("register");
  };

  const onMapPress = (e: any) => {
    console.log(e.nativeEvent.coordinate);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Tytuł"
        autoComplete="name"
        placeholderTextColor={Colors.text}
      />
      <Dropdown
        name="type"
        onChange={handleDropdown}
        value={dropdown}
        options={mockedOptions}
      />
      <Dropdown
        name="race"
        onChange={handleDropdown}
        value={dropdown}
        options={mockedOptions}
      />
      <Dropdown
        name="color"
        onChange={handleDropdown}
        value={dropdown}
        options={mockedOptions}
      />
      <TextInput
        style={styles.textArea}
        onChangeText={setAdditional}
        value={additional}
        placeholder="Dodatkowe informacje"
        placeholderTextColor={Colors.text}
        multiline
        numberOfLines={6}
      />

      <Text style={styles.useYourLocation}>Uzyj swojej lokalizacji</Text>
      <HorizontalRule text="albo oznacz inną" />
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        style={styles.map}
        onPress={onMapPress}
      />

      <TouchableHighlight onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Zapisz</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 225,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.border,
    color: Colors.text,
  },
  textArea: {
    width: 225,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.border,
    color: Colors.text,
    textAlignVertical: "top",
  },
  button: {
    width: 250,
    backgroundColor: "transparent",
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 25,
  },
  buttonText: {
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 3,
    color: Colors.text,
  },
  useYourLocation: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.text,
  },
  map: {
    marginTop: 20,
    width: 300,
    height: 300,
  },
});

export default AnimalForm;
