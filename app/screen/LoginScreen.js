import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Button,
  ClickableRoundImage,
  Text,
  TextInput,
  Screen,
} from '../components';
import {color, strings, assets} from '../config';

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>{strings.LOGIN}</Text>
      <TextInput placeholder={strings.USERNAME} />
      <TextInput placeholder={strings.PASSWORD} secureTextEntry />
      <Button title={strings.LOGIN} />
      <Text style={styles.optionText}>{strings.orLoginWith}</Text>
      <View style={styles.optionsContainer}>
        <View style={styles.space} />
        <ClickableRoundImage image={assets.googleIcon} />
        <View style={styles.space} />
        <ClickableRoundImage image={assets.metaIcon} />
        <View style={styles.space} />
        <ClickableRoundImage image={assets.appleIcon} />
        <View style={styles.space} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
  },
  optionText: {fontSize: 14, marginTop: 25, textAlign: 'center'},
  space: {flex: 1},
  title: {
    marginBottom: 30,
    textAlign: 'center',
    color: color.black,
    fontWeight: 'bold',
  },
});
export default LoginScreen;
