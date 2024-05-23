import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Screen, Text, TextInput} from '../components';
import {color, strings} from '../config';

import ClickableText from '../components/ClickableText';
function RegisterScreen() {
  return (
    <Screen style={styles.container} isScrollable>
      <Text style={styles.title}>{strings.REGISTER}</Text>
      <TextInput placeholder={strings.USERNAME} />
      <TextInput placeholder={strings.PASSWORD} secureTextEntry />
      <Button title={strings.REGISTER} />
      {/* <BetweenLines text={strings.orLoginWith} /> */}
      {/* <View style={styles.optionsContainer}>
        <View style={styles.space} />
        <ClickableRoundImage
          image={assets.googleIcon}
          onPress={async () => {
            await AppGoogleSignIn();
          }}
        />
        <View style={styles.space} />
        <ClickableRoundImage image={assets.metaIcon} />
        <View style={styles.space} />
        <ClickableRoundImage image={assets.appleIcon} />
        <View style={styles.space} />
      </View> */}
      <ClickableText
        style={styles.text}
        nonClickableText={`Already have an`}
        clickableText={'account?'}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
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
  text: {position: 'absolute', bottom: 10, alignSelf: 'center'},
});
export default RegisterScreen;
