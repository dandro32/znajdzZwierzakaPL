import { FC, useState } from "react";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

export interface IDateTimePicker {
  mode?: "date" | "time";
  onChange: (value: Date) => void;
  title: string;
}

const DateTimeSelector: FC<IDateTimePicker> = ({
  title,
  mode = "date",
  onChange,
}) => {
  const [value, setValue] = useState(new Date());
  const [isOpen, setOpen] = useState(false);

  const openPicker = () => setOpen(true);

  const handleDate = (e: DateTimePickerEvent, date: Date | undefined) => {
    if (date) {
      onChange(date);
    }
    setOpen(false);
  };

  const isTime = mode === "time";
  const iconName = isTime ? "clock-o" : "calendar";
  const transformedValue = isTime
    ? value.toLocaleTimeString()
    : value.toLocaleDateString();

  return (
    <View>
      <TouchableHighlight onPress={openPicker} style={styles.button}>
        <View style={styles.buttonContainer}>
          <Text
            style={styles.buttonText}
          >{`${title}: ${transformedValue}`}</Text>
          <FontAwesome name={iconName} size={15} color={Colors.text} />
        </View>
      </TouchableHighlight>

      {isOpen && (
        <RNDateTimePicker value={value} onChange={handleDate} mode={mode} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    width: 230,
    backgroundColor: "transparent",
    padding: 10,
    borderWidth: 2,
    borderColor: Colors.border,
    borderRadius: 10,
  },
  buttonText: {
    textTransform: "capitalize",
    color: Colors.text,
  },
});

export default DateTimeSelector;
