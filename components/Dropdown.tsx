import { Picker } from "@react-native-picker/picker";
import { FC } from "react";
import { StyleSheet } from "react-native";
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
      style={styles.dropdown}
    />
  ));

  const handleChange = (itemValue: string) => {
    onChange(name, itemValue);
  };

  return (
    <Picker selectedValue={value} onValueChange={handleChange}>
      {renderItems}
    </Picker>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    width: 225,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.border,
    color: Colors.text,
  },
});

export default Dropdown;
