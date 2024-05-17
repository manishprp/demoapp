import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(props) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {},
});
export default App;
