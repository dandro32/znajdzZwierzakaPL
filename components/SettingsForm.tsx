import { FC, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
  Text,
} from "react-native";
import Colors from "../constants/Colors";
import HorizontalRule from "./HorizontalRule";

const SettingsForm: FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = () => {
    console.log("change settings");
  };

  return (
    <View>
      <HorizontalRule text="Dane" />
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Nazwa uzytkownika"
        autoComplete="username"
        placeholderTextColor={Colors.text}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        keyboardType="email-address"
        autoComplete="email"
        placeholderTextColor={Colors.text}
      />
      <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="Imię"
        autoComplete="name"
        placeholderTextColor={Colors.text}
      />
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Nazwisko"
        autoComplete="name-family"
        placeholderTextColor={Colors.text}
      />
      <HorizontalRule text="Kontakt" />
      <TextInput
        style={styles.input}
        onChangeText={setStreet}
        value={street}
        placeholder="Adres"
        autoComplete="street-address"
        placeholderTextColor={Colors.text}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPostalCode}
        value={postalCode}
        placeholder="Kod pocztowy"
        autoComplete="postal-code"
        keyboardType="numeric"
        placeholderTextColor={Colors.text}
      />
      <TextInput
        style={styles.input}
        onChangeText={setCity}
        value={city}
        placeholder="Miasto"
        placeholderTextColor={Colors.text}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder="Telefon"
        keyboardType="numeric"
        autoComplete="tel"
        placeholderTextColor={Colors.text}
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

export default SettingsForm;
