import { FC, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
  Text,
} from "react-native";
import Colors from "../constants/Colors";

interface IRegisterForm {
  goToTabs: () => void;
}

const RegisterForm: FC<IRegisterForm> = ({ goToTabs }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const onRegister = () => {
    console.log("register");
    goToTabs();
  };

  return (
    <View>
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
        onChangeText={setPassword}
        value={password}
        placeholder="Hasło"
        autoComplete="password"
        keyboardType="numeric"
        secureTextEntry={true}
        placeholderTextColor={Colors.text}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPasswordConfirmation}
        value={passwordConfirmation}
        placeholder="Powtórz hasło"
        autoComplete="password"
        keyboardType="numeric"
        secureTextEntry={true}
        placeholderTextColor={Colors.text}
      />

      <TouchableHighlight onPress={onRegister} style={styles.button}>
        <Text style={styles.buttonText}>Zarejestruj się</Text>
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

export default RegisterForm;
