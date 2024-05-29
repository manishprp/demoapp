import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Screen, Text} from '../components';
import {color, strings} from '../config';

import {AppDropDown, ClickableText, FormTextInput} from '../components';
function RegisterScreen({navigation}) {
  return (
    <Screen style={styles.container} isScrollable>
      <Text style={styles.title}>{strings.REGISTER}</Text>
      <ClickableText
        onPress={() => {
          navigation.navigate(strings.LOGIN);
        }}
        style={styles.text}
        nonClickableText={`Already have an`}
        clickableText={'account?'}
      />

      <FormTextInput placeholder={strings.firstName} />
      <FormTextInput placeholder={strings.lastName} />
      <FormTextInput placeholder={strings.email} />
      <FormTextInput placeholder={strings.phone} inputMode="numeric" />
      <AppDropDown
        placeHolder={strings.bloodGroup}
        items={[
          {label: 'O+ve', value: 'O+ve'},
          {label: 'O-ve', value: 'O-ve'},
          {label: 'A-ve', value: 'A-ve'},
          {label: 'A+ve', value: 'A+ve'},
          {label: 'B-ve', value: 'B-ve'},
          {label: 'B+ve', value: 'B+ve'},
        ]}
        onChangeValue={val => {
          console.log(val);
        }}
      />
      {/* <FormTextInput placeholder={strings.gender} /> // radio button Formik&Yup*/}
      <FormTextInput placeholder={strings.USERNAME} />
      <FormTextInput placeholder={strings.PASSWORD} secureTextEntry />

      <Button title={strings.REGISTER} style={{marginBottom: 20}} />
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
  text: {alignSelf: 'center', marginBottom: 20},
});
export default RegisterScreen;
