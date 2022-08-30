import { FC, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
  Text,
} from "react-native";
import Colors from "../constants/Colors";
import Dropdown from "./Dropdown";

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
      <Dropdown name="type" onChange={handleDropdown} value={dropdown} />
      <Dropdown name="race" onChange={handleDropdown} value={dropdown} />
      <Dropdown name="color" onChange={handleDropdown} value={dropdown} />
      <TextInput
        style={styles.input}
        onChangeText={setAdditional}
        value={additional}
        placeholder="Dodatkowe informacje"
        placeholderTextColor={Colors.text}
        multiline
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
  button: {
    width: 250,
    backgroundColor: "transparent",
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
});

export default AnimalForm;
