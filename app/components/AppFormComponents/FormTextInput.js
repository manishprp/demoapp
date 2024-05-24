import {TextInput} from '..';

import React from 'react';
import {StyleSheet, View} from 'react-native';
import ErrorMessage from '../ErrorMessage';

function FormTextInput({
  placeholder,
  suffixIcon,
  error,
  isVisible = false,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        suffixIcon={suffixIcon}
        {...otherProps}
      />
      <ErrorMessage error={error} isVisible={isVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 10},
});
export default FormTextInput;
