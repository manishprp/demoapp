import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './app/screen/LoginScreen';

function App(props) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {},
});
export default App;
