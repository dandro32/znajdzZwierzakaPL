import { FC, useState } from "react";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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

  return (
    <View>
      <Text style={styles.title}>{value.toISOString()}</Text>
      <FontAwesome.Button
        name={mode === "time" ? "clock-o" : "calendar"}
        // backgroundColor="#3b5998"
        onPress={openPicker}
      >
        {title}
      </FontAwesome.Button>
      {isOpen && (
        <RNDateTimePicker value={value} onChange={handleDate} mode={mode} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 225,
    margin: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.border,
    color: Colors.text,
  },
  item: {
    color: Colors.text,
    backgroundColor: Colors.background,
    borderRadius: 10,
  },
});

export default DateTimeSelector;
