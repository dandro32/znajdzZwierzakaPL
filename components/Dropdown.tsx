import { Picker } from "@react-native-picker/picker";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

export interface IOption {
  label: string;
  value: string;
}

export interface IDropdown {
  name: string;
  onChange: (name: string, value: string) => void;
  options?: IOption[];
  value: string;
}

const Dropdown: FC<IDropdown> = ({ name, value, options = [], onChange }) => {
  const renderItems = options.map(({ label, value }) => (
    <Picker.Item
      key={`dropdown-${name}-${value}`}
      label={label}
      value={value}
      style={styles.item}
    />
  ));

  const handleChange = (itemValue: string) => {
    onChange(name, itemValue);
  };

  return (
    <View style={styles.dropdown}>
      <Picker
        selectedValue={value}
        onValueChange={handleChange}
        dropdownIconColor={Colors.border}
      >
        {renderItems}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
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

export default Dropdown;
