import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './app/screen/LoginScreen';
import RegisterScreen from './app/screen/RegisterScreen';
import CategoriesScreen from './app/screen/CategoriesScreen';
import ProductsList from './app/screen/ProductsList';
import SearchScreen from './app/screen/SearchScreen';

function App(props) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <SearchScreen />;
}

const styles = StyleSheet.create({
  container: {},
});
export default App;
