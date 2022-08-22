import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

interface IHorizontalRule {
  text: string;
  color?: string;
}

const HorizontalRule: FC<IHorizontalRule> = ({ text, color }) => {
  const propsStyles = styles(color);

  return (
    <View style={propsStyles.wrapper}>
      <View style={propsStyles.line} />
      <View>
        <Text style={propsStyles.text}>{text}</Text>
      </View>
      <View style={propsStyles.line} />
    </View>
  );
};

const styles = (color: string = Colors.border) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: color,
    },
    text: {
      width: 50,
      textAlign: "center",
      color,
    },
  });

export default HorizontalRule;
