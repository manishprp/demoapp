import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from '../config/colors';

function AppTextInput({placeholder, style, ...textInputProps}) {
  return (
    <TextInput
      {...textInputProps}
      placeholder={placeholder}
      style={[styles.text, style]}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 30,
    backgroundColor: colors.medium,
    borderRadius: 30,
    color: colors.black,
    marginHorizontal: 20,
    fontSize: 20,
    padding: 15,
  },
});
export default AppTextInput;
